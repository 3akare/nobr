import loader from "@images/loading.svg";
import Image from "next/image";
const isloading = () => {
  return (
    <main className="flex items-center justify-center h-[calc(100vh-224px)]">
      <Image src={loader} alt="loading" />
    </main>
  );
};

export default isloading;
