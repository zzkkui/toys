import React, { ReactNode } from "react";
import CLayout from "../../layout";

function Algorithm() {
  return <div>Algorithm</div>;
}

Algorithm.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default Algorithm;
