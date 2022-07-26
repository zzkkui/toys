import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number] & {
  children?: MenuItem[];
};

export const menus: MenuItem[] = [
  {
    label: "API demo",
    key: "/apis",
    title: "API demo",
    children: [
      {
        label: "图片懒加载",
        key: "/apis/intersection-observer",
        title: "图片懒加载",
      },
    ],
  },
  {
    label: "手写",
    key: "/handwriting",
    title: "手写",
  },
  {
    label: "算法",
    key: "/algorithm",
    title: "算法",
  },
  {
    label: "Vue",
    key: "/vue",
    title: "Vue",
    children: [
      {
        label: "双向绑定",
        key: "/vue/interactive-data-binding",
        title: "双向绑定",
      },
    ],
  },
];
