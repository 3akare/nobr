//next imports
import Image from "next/image";

//images
import blob from "@images/blob.svg";

const Blob = () => {
  return (
    <>
      <Image
        src={blob}
        alt="blob"
        className="absolute -top-10 blur opacity-10 hidden lg:block dark:hidden"
        priority
        loading="eager"
      />
      <Image
        src={blob}
        alt="blob"
        className="absolute -bottom-90 right-0 rotate-180 blur opacity-10 hidden lg:block dark:hidden -z-10"
        priority
        loading="eager"
      />
    </>
  );
};

export default Blob;
