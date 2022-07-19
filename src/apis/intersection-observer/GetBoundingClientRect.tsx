/* eslint-disable @next/next/no-img-element */
import React, { memo, useCallback, useEffect, useRef } from "react";
import throttle from "lodash/throttle";
import styles from "./index.module.less";
import { lazyloadImages } from "@/utils/apis/intersection-observer";

type GetBoundingClientRectPropsType = {
  wrapper: HTMLDivElement;
  activeKey?: string;
};

function GetBoundingClientRect(props: GetBoundingClientRectPropsType) {
  const { wrapper, activeKey } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const showImage = useCallback(() => {
    if (ref.current) {
      Array.from(ref.current.getElementsByTagName("img")).forEach((imgNode) => {
        if (imgNode.dataset["hadloading"] === "true") {
          return;
        }
        const { top, bottom } = imgNode.getBoundingClientRect();
        const documentHeight = document.body.clientHeight;

        if (top < documentHeight && bottom > 0) {
          const dataSrc = imgNode.dataset["src"];
          if (dataSrc) {
            imgNode.src = dataSrc;
            imgNode.dataset["hadloading"] = "true";
          }
        }
      });
    }
  }, []);

  const onScroll = throttle(() => {
    console.log(1111);
    showImage();
  }, 1000);

  useEffect(() => {
    if (activeKey === "getBoundingClientRect") {
      showImage();
    }
  }, [activeKey]);

  useEffect(() => {
    if (activeKey === "getBoundingClientRect") {
      wrapper && wrapper.addEventListener("scroll", onScroll);
      return () => {
        wrapper!.removeEventListener("scroll", onScroll);
      };
    }
  }, [activeKey]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>GetBoundingClientRect</div>
      <div className={styles.getBoundingClientRect} ref={ref}>
        {lazyloadImages.map((image, index) => {
          return (
            <div key={index} className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={image.blurDataURL}
                data-src={image.src}
                alt={`${index}`}
                style={{ transition: ".3s" }}
                data-hadloading="false"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(GetBoundingClientRect);
