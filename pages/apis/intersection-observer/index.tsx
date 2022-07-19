import { Tabs } from "antd";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import CLayout from "../../../layout";
import IntersectionObserver from "./IntersectionObserver";
import GetBoundingClientRect from "./GetBoundingClientRect";

import styles from "./index.module.less";
import { useRouter } from "next/router";

const { TabPane } = Tabs;

function LazyLoad() {
  const router = useRouter();
  const [tabKey, setTabKey] = useState<string>();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onTabChange = (key: string) => {
    setTabKey(key);
    router.push({
      pathname: router.route,
      query: {
        key,
      },
    });
  };

  useEffect(() => {
    console.log(router.query.key);
    router.query.key && setTabKey(router.query.key as string);
  }, [router.query]);

  return (
    <div className={styles.content} ref={wrapperRef}>
      <div className="title">图片懒加载的两种实现方式</div>
      <Tabs activeKey={tabKey} type="card" onChange={onTabChange}>
        <TabPane tab="IntersectionObserver" key="intersectionObserver">
          <IntersectionObserver activeKey={tabKey} />
        </TabPane>
        <TabPane tab="GetBoundingClientRect" key="getBoundingClientRect">
          <GetBoundingClientRect
            wrapper={wrapperRef.current!}
            activeKey={tabKey}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

LazyLoad.getLayout = function getLayout(page: ReactNode) {
  return <CLayout title="intersectionObserver 实现图片懒加载">{page}</CLayout>;
};

export default LazyLoad;
