exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 1849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ menus)
/* harmony export */ });
const menus = [{
  label: "API demo",
  key: "/apis",
  children: [{
    label: "Intersection Observer",
    key: "/apis/intersection-observer"
  }]
}, {
  label: "手写",
  key: "/handwriting"
}, {
  label: "算法",
  key: "/algorithm"
}];

/***/ }),

/***/ 8611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CLayout)
});

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(5417);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "antd/lib/layout/layout"
var layout_layout_ = __webpack_require__(8697);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(274);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);
// EXTERNAL MODULE: ./config/menus.ts
var menus = __webpack_require__(1849);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd/lib/layout/Sider"
var Sider_ = __webpack_require__(8008);
var Sider_default = /*#__PURE__*/__webpack_require__.n(Sider_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./layout/sidebar/index.module.less
var index_module = __webpack_require__(2615);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./layout/sidebar/index.tsx









function findPath(tree, func) {
  const path = [];
  const list = [...tree];
  const visitedSet = new Set();

  while (list.length) {
    const node = list[0];

    if (visitedSet.has(node)) {
      path.pop();
      list.shift();
    } else {
      visitedSet.add(node);
      node.children && list.unshift(...node.children);
      path.push(node);

      if (func(node)) {
        return path;
      }
    }
  }

  return null;
}
function getAllParentPath(treeData, path) {
  const menuList = findPath(treeData, n => n.key === path);
  return (menuList || []).map(item => item?.key).filter(n => n);
}
function Sidebar() {
  const router = (0,router_.useRouter)();
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(false);
  const {
    0: openKeys,
    1: setOpenKeys
  } = (0,external_react_.useState)([]);
  const {
    0: selectedKeys,
    1: setSelectedKeys
  } = (0,external_react_.useState)([]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClickMenu = ({
    key
  }) => {
    router.push(key);
    setSelectedKeys([key]);
  };

  const onOpenChange = openKeys => {
    setOpenKeys(openKeys);
  };

  (0,external_react_.useEffect)(() => {
    setSelectedKeys([router.route]);
    setOpenKeys(getAllParentPath(menus/* menus */.I, router.route));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Sider_default()), {
    className: (index_module_default()).sider,
    collapsed: collapsed,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: toggleCollapsed,
      className: (index_module_default()).collapse,
      children: collapsed ? /*#__PURE__*/jsx_runtime_.jsx(icons_.MenuUnfoldOutlined, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_.MenuFoldOutlined, {})
    }), /*#__PURE__*/jsx_runtime_.jsx((menu_default()), {
      mode: "inline",
      style: {
        height: "100%",
        borderRight: 0
      },
      items: menus/* menus */.I,
      openKeys: openKeys,
      selectedKeys: selectedKeys,
      onClick: onClickMenu,
      onOpenChange: onOpenChange
    })]
  });
}
// EXTERNAL MODULE: ./layout/index.module.less
var layout_index_module = __webpack_require__(2613);
var layout_index_module_default = /*#__PURE__*/__webpack_require__.n(layout_index_module);
;// CONCATENATED MODULE: ./layout/index.tsx









const DEFAULT_TITLE = "Toys";
function CLayout({
  children,
  title
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title || DEFAULT_TITLE
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((layout_default()), {
      style: {
        height: "100vh"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(Sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_layout_.Content, {
        className: (layout_index_module_default()).content,
        children: children
      })]
    })]
  });
}

/***/ }),

/***/ 2613:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "index_content__B6sem"
};


/***/ }),

/***/ 2615:
/***/ ((module) => {

// Exports
module.exports = {
	"sider": "index_sider__cHnoM",
	"collapse": "index_collapse__Xqy54"
};


/***/ })

};
;