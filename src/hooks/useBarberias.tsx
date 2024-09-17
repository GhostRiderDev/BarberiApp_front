import { IBarberia } from "@/interfaces/IBarberia";
import { IBarberiasStore, useBarberiasStore } from "@/store/barberiasStore";
import { useEffect } from "react";

export const useBarberias = () => {
  const barberiasStore = useBarberiasStore(
    (state: IBarberiasStore) => state.barberias
  );
  const setBarberias = useBarberiasStore(
    (state: IBarberiasStore) => state.setBarberias
  );

  const barberiasLS: IBarberia[] = JSON.parse(
    localStorage.getItem("barberias") || "[]"
  );

  useEffect(() => {
    if (barberiasStore.length === 0 && barberiasLS.length > 0) {
      setBarberias(barberiasLS);
    }
  }, [barberiasStore, barberiasLS, setBarberias]);

  useEffect(() => {
    localStorage.setItem("barberias", JSON.stringify(barberiasStore));
  }, [barberiasStore]);

  return barberiasStore.length > 0 ? barberiasStore : barberiasLS;
};
