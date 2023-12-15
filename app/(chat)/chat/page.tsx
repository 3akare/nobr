"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

useRouter;
// import useUserSetup from "@/lib/hooks";
// import Image from "next/image";
// import loading from "@images/loading.svg";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/chat/asdsd");
  }, []);
  //todo Figure out this setting up user part
  // const setupStatusMessage = useUserSetup();
  return (
    <main className="h-[calc(100vh-228px)] flex items-center justify-center flex-col gap-2">
      {/* <Image src={loading} alt="loading" width={50} height={50} priority /> */}
      {/* <p>{setupStatusMessage}</p> */}
    </main>
  );
};

export default Page;
