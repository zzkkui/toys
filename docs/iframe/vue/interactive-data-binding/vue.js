const toString = Object.prototype.toString;

function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

function isObject(val) {
  return val !== null && is(val, "Object");
}

function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

function isString(val) {
  return is(val, "String");
}

function isFunction(val) {
  return typeof val === "function";
}

function isArray(val) {
  return val && Array.isArray(val);
}

function isElement(val) {
  return isObject(val) && !!val.tagName;
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
  Object.keys(dataInstance).forEach((key) => {
    const value = dataInstance[key];
    // 递归子属性的数据劫持
    Observer(value);
    Object.defineProperty(dataInstance, key, {
      configurable: true,
      enumerable: true,
      get() {
        return value;
      },
      set(newVal) {
        value = newVal;
        // 改写属性后需要重新劫持（可能把基础属性改成了引用类型）
        Observer(newVal);
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
      const res = patten.exec(node.nodeValue);
      if (res) {
        const arr = res[1].split(".");
        const value = arr.reduce((total, curr) => {
          return total[curr];
        }, vm.$data);
        node.nodeValue = node.nodeValue.replace(patten, value);
      }
      return;
    }
    node.childNodes.forEach((child) => fragmentCompile(child));
  }
  vm.$el.appendChild(fragment);
}
