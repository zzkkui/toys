import React, { ReactNode } from "react";
import CLayout from "../../layout";

function Demo2() {
  return <div>Demo2</div>;
}

Demo2.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default Demo2;
