import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

// label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],

export const menus: MenuItem[] = [
  {
    label: "demo1",
    key: "/demo1",
  },
  {
    label: "demo2",
    key: "/demo2",
  },
];
