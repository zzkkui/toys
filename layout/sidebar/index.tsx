import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { menus, MenuItem } from "../../config/menus";
import styles from "./index.module.less";

export function findPath<T = any>(tree: any, func: Fn): T | T[] | null {
  const path: T[] = [];
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

export function getAllParentPath<T = Recordable>(
  treeData: T[],
  path: string
): string[] {
  const menuList = findPath(treeData, (n) => n.key === path) as MenuItem[];
  return (menuList || []).map((item) => item?.key).filter((n) => n) as string[];
}

export default function Sidebar() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClickMenu = ({ key }: { key: string }) => {
    router.push(key);
    setSelectedKeys([key]);
  };

  const onOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys);
  };

  useEffect(() => {
    setSelectedKeys([router.route]);
    setOpenKeys(getAllParentPath(menus, router.route));
  }, []);

  return (
    <Sider className={styles.sider} collapsed={collapsed}>
      <div onClick={toggleCollapsed} className={styles.collapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        items={menus}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={onClickMenu}
        onOpenChange={onOpenChange}
      />
    </Sider>
  );
}
