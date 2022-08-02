import Head from "next/head";
import React from "react";

import styles from "./index.module.less";

const isGITHUB_PAG = process.env.GITHUB_PAG;

const iframeSrc = isGITHUB_PAG
  ? "/toys/iframe/vue/interactive-data-binding/index.html"
  : "/iframe/vue/interactive-data-binding/index.html";

function InteractiveDataBinding() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>vue 双向绑定的简单实现</title>
      </Head>
      <div className={styles.title}>vue 双向绑定的简单实现</div>
      <iframe src={iframeSrc} className={styles.frame}></iframe>
    </div>
  );
}

export default InteractiveDataBinding;
