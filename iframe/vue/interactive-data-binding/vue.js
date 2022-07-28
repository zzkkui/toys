const toString = Object.prototype.toString;

function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

function isObject(val) {
  return val !== null && is(val, "Object");
}

function isFunction(val) {
  return typeof val === "function";
}

// 双大括号匹配
const patten = /\{\{\s*(\S+)\s*\}\}/;

class Vue {
  constructor(objInstance) {
    this.$data = isFunction(objInstance.data)
      ? objInstance.data()
      : objInstance.data;
    Observer(this.$data);
    Compile(objInstance.el, this);
  }
}

// 数据劫持，监听实例里面的数据
function Observer(dataInstance) {
  if (!dataInstance || !isObject(dataInstance)) {
    return;
  }
  // 为每个对象的当前层级创建依赖收集者
  // 这里 $data(根) 层级一个依赖收集，$data.more 一个依赖收集
  const dependency = new Dependency()
  Object.keys(dataInstance).forEach((key) => {
    let value = dataInstance[key];
    // 递归子属性的数据劫持
    Observer(value);
    Object.defineProperty(dataInstance, key, {
      configurable: true,
      enumerable: true,
      get() {
        // console.log(`访问属性：${key} => ${value}`, Dependency.temp)
        // 添加订阅者到订阅者数组
        Dependency.temp && dependency.addSub(Dependency.temp)
        return value;
      },
      set(newVal) {
        value = newVal;
        // 改写属性后需要重新劫持（可能把基础属性改成了引用类型）
        Observer(newVal);
        // 通知依赖收集者执行订阅者数组相关的订阅函数
        dependency.notify()
      },
    });
  });
}

// HTML 模板解析（双大括号）、替换
function Compile(el, vm) {
  vm.$el = document.querySelector(el);
  const fragment = document.createDocumentFragment();
  let child;
  while ((child = vm.$el.firstChild)) {
    // 将已有dom添加到文档碎片中，dom树中该dom会消失，文档碎片不在dom树中，而是在内存中
    // 这里就是将页面内容存在fragment中，我们在fragment中操作dom，就不会引起页面的重新渲染，
    // 最后处理完再将fragment中内容放入真实dom中，就只会渲染一次
    fragment.appendChild(child);
  }
  fragmentCompile(fragment);
  function fragmentCompile(node) {
    if (node.nodeType === 3) {
      const nodeTemp = node.nodeValue
      const res = patten.exec(node.nodeValue);
      if (res) {
        // 有双大括号模板时添加 watcher 实例
        new Watcher(vm, res[1], (value) => {
          node.nodeValue = nodeTemp.replace(patten, value)
        })
      }
      return;
    } else if (node.nodeType === 1 && node.nodeName === 'INPUT') {
      const attr = Array.from(node.attributes)
      const vModel = attr.find(n => n.nodeName === 'v-model')
      if (vModel) {
        new Watcher(vm, vModel.nodeValue, (value) => {
          node.value = value
        })
        node.addEventListener('input', (e) => {
          // 赋值
          const arr1 = vModel.nodeValue.split('.')
          const arr2 = arr1.slice(0, arr1.length - 1)
          const final = arr2.reduce((total, curr) => {
            return total[curr];
          }, vm.$data)
          // 触发 setter
          final[arr1[arr1.length - 1]] = e.target.value
        })
      }
    }
    node.childNodes.forEach((child) => fragmentCompile(child));
  }
  vm.$el.appendChild(fragment);
}

// 依赖收集，触发订阅者
class Dependency {
  constructor() {
    // 订阅者数组
    this.subscribers = []
  }

  addSub(sub) {
    // 收集依赖（订阅者）
    this.subscribers.push(sub)
  }

  notify() {
    // 触发订阅者更新
    this.subscribers.forEach(sub => sub.update())
  }
}

// 订阅者
class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm
    this.key = key
    this.callback = callback
    this.init()
  }

  init() {
    // 触发 getter 将订阅者添加到订阅者数组
    // 同时触发初始化更新，替换文档中的双大括号模板
    Dependency.temp = this
    this.update()
    Dependency.temp = null
  }

  getValue() {
    // 取值，触发 getter
    return this.key.split('.').reduce((total, curr) => {
      return total[curr];
    }, this.vm.$data)
  }

  update() {
    // 订阅者更新
    const value = this.getValue()
    this.callback(value)
  }

}
