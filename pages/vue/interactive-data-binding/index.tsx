import React, { ReactNode } from "react";
import CLayout from "../../../layout";

import styles from "./index.module.less";

const isGITHUB_PAG = process.env.GITHUB_PAG;

const iframeSrc = isGITHUB_PAG
  ? "/toys/iframe/vue/interactive-data-binding/index.html"
  : "/iframe/vue/interactive-data-binding/index.html";

function InteractiveDataBinding() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>vue 双向绑定的简单实现</div>
      <iframe src={iframeSrc} className={styles.frame}></iframe>
    </div>
  );
}

InteractiveDataBinding.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default InteractiveDataBinding;
