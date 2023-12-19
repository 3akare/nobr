import { create } from "zustand";

export const useUserSetup = create((set) => {
  // Check if window is defined (i.e., we're in a browser environment)
  const userID =
    typeof window !== "undefined" ? localStorage.getItem("userID") : null;

  return {
    userID,
    setUserID: (id: string) => {
      // Again, check if window is defined before accessing localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("userID", id);
      }
      set({ userID: id });
    },
  };
});
