"use client";

import { useParams } from "next/navigation";
import { Footer } from ".";

const FooterWrapperr = () => {
  const params = useParams();
  return <Footer visibleFooter={params.id !== undefined ? false : true} />;
};

export default FooterWrapperr;
