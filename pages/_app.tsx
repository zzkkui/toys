import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactNode } from "react";
import "antd/dist/antd.css";
import "../styles/globals.less";
import CLayout from "@/layout";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
  // CLayout 默认布局
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <CLayout>{page}</CLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
