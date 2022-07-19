/* eslint-disable @next/next/no-img-element */
import React, { memo, useEffect, useRef } from "react";
import { lazyloadImages } from "./utils";
import styles from "./index.module.less";

type IntersectionObserverComPropsType = {
  activeKey?: string;
};

function IntersectionObserverCom(props: IntersectionObserverComPropsType) {
  const { activeKey } = props;
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (activeKey === "intersectionObserver") {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;
          const _target = target as HTMLImageElement;
          if (_target.dataset["hadLoading"] === "true") {
            return;
          }
          if (intersectionRatio > 0) {
            _target.src = _target.dataset["src"] ? _target.dataset["src"] : "";
            _target.dataset["hadLoading"] = "true";
            observerRef.current!.unobserve(_target);
          }
        });
      });
      const dom = document.getElementById("intersection-observer");
      Array.from(dom!.getElementsByTagName("img")).forEach((img) =>
        observerRef.current!.observe(img)
      );

      return () => {
        observerRef.current!.disconnect();
      };
    }
  }, [activeKey]);

  return (
    <>
      <div className={styles.title}>IntersectionObserver</div>
      <div className={styles.intersectionObserver} id="intersection-observer">
        {lazyloadImages.map((image, index) => {
          return (
            <div key={index} className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={image.blurDataURL}
                data-src={image.src}
                alt={`${index}`}
                style={{ transition: ".3s" }}
                data-hadLoading="false"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default memo(IntersectionObserverCom);
