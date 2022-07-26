import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Head from "next/head";
import React, { ReactNode, useState } from "react";

import Sidebar from "./sidebar";

import styles from "./index.module.less";

export type CLayoutPropsType = {
  children: ReactNode;
  title?: string;
};

const DEFAULT_TITLE = "Toys";

export default function CLayout({ children, title }: CLayoutPropsType) {
  return (
    <>
      <Head>
        <title>{title || DEFAULT_TITLE}</title>
      </Head>
      <Layout style={{ height: "100vh" }} hasSider>
        <Sidebar />
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </>
  );
}
