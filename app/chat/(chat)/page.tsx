"use client";
import useUserSetup from "@/lib/hooks";
import Image from "next/image";


const Page = () => {
  const setupStatusMessage = useUserSetup();
  return (
    <main className="h-[calc(100vh-228px)] flex items-center justify-center flex-col gap-2">
      <Image src="/images/loading.svg" alt="loading" width={50} height={50} priority />
      <p>{setupStatusMessage}</p>
    </main>
  );
};

export default Page;
