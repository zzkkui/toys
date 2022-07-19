import React, { ReactNode } from "react";
import CLayout from "../../layout";

function Handwriting() {
  return <div>Handwriting</div>;
}

Handwriting.getLayout = function getLayout(page: ReactNode) {
  return <CLayout>{page}</CLayout>;
};

export default Handwriting;
