import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number] & {
  children?: MenuItem[];
};

export const menus: MenuItem[] = [
  {
    label: "API demo",
    key: "/apis",
    children: [
      {
        label: "Intersection Observer",
        key: "/apis/intersection-observer",
      },
    ],
  },
  {
    label: "手写",
    key: "/handwriting",
  },
  {
    label: "算法",
    key: "/algorithm",
  },
];
