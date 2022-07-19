import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

// label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],

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
