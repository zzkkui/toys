import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { MenuItem, menus } from "../config/menus";
import styles from "../styles/Home.module.less";

function getDefaultMenu(menus: MenuItem[]): any {
  return menus[0]?.children
    ? getDefaultMenu(menus[0]?.children)
    : menus[0]?.key;
}

const defaultMenu = getDefaultMenu(menus);

function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>zzkkui&apos; Toys</title>
      </Head>
      <div className={styles.title}>Toys</div>
      <div className={styles.desc}>
        HTML5 api demo、手写代码、react轮子demo、各种 toys
      </div>
      <Link href={defaultMenu}>
        <a className={styles.getStart}>Get start</a>
      </Link>
    </div>
  );
}

// Home 全屏不需要布局
Home.getLayout = function getLayout(page: ReactNode) {
  return <>{page}</>;
};

export default Home;
