"use client";
import useUserSetup from "@/lib/hooks";
import Image from "next/image";
import loading from "@images/loading.svg";

const Page = () => {
  const setupStatusMessage = useUserSetup();
  return (
    <main className="h-[calc(100vh-228px)] flex items-center justify-center flex-col gap-2">
      <Image src={loading} alt="loading" width={50} height={50} />
      <p>{setupStatusMessage}</p>
    </main>
  );
};

export default Page;
