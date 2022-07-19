import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactNode } from "react";
import "antd/dist/antd.css";
import "../styles/globals.less";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
