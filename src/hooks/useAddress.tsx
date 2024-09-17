import { useLocationStore } from "@/store/barberiasStore";
import { useEffect, useState } from "react";

export const useAddress = () => {
  const [address, setAddress] = useState("");
  const addressStore = useLocationStore((state) => state.location.address);

  useEffect(() => {
    const addressLocalStorage = localStorage.getItem("address") || "";
    const addressDefined = addressStore || addressLocalStorage;
    setAddress(addressDefined);
  }, [addressStore, address]);

  return address;
};
