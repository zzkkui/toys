import Link from "next/link";
import { MenuItem, menus } from "../config/menus";
import styles from "../styles/Home.module.less";

function getDefaultMenu(menus: MenuItem[]): any {
  return menus[0]?.children
    ? getDefaultMenu(menus[0]?.children)
    : menus[0]?.key;
}

const defaultMenu = getDefaultMenu(menus);

export default function Home() {
  return (
    <div className={styles.content}>
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
