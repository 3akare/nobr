"use client";
// Import necessary modules
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the Page component
const Page = () => {
  // Use the useRouter hook to get the router object
  const router = useRouter();

  // Use the useEffect hook to replace the current route with "/chat/asdsd" when the component mounts
  useEffect(() => {
    router.replace("/chat/asdsd");
  }, [router]); // Add router to the dependency array to prevent unnecessary re-renders

  // Render a main element with a loading message
  return (
    <main className="h-[calc(100vh-228px)] flex items-center justify-center flex-col gap-2">
      {/* Uncomment the following lines when the loading image and setupStatusMessage are available */}
      {/* <Image src={loading} alt="loading" width={50} height={50} priority /> */}
      {/* <p>{setupStatusMessage}</p> */}
    </main>
  );
};

// Export the Page component as default
export default Page;
