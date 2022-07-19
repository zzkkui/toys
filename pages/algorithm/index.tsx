import CLayout from "@/layout";
import React, { ReactNode } from "react";

function Algorithm() {
  return <div>Algorithm</div>;
}

Algorithm.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default Algorithm;
