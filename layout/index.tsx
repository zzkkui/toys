import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import { menus } from "../config/menus";

import styles from "./index.module.less";

// const Sider = Layout

export default function CLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClickMenu = ({ key }: { key: string }) => {
    router.push(key);
  };

  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className={styles.sider}
        >
          <div onClick={toggleCollapsed} className={styles.collapse}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={menus}
            inlineCollapsed={collapsed}
            onClick={onClickMenu}
          />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </>
  );
}
