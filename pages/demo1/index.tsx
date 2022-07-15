import React, { ReactNode } from "react";
import CLayout from "../../layout";

function Demo1() {
  return <div>Demo1</div>;
}

Demo1.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default Demo1;
