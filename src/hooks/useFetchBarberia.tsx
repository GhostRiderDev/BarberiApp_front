import { useEffect, useState } from "react";
import { IBarberia } from "@/interfaces/IBarberia";
import { findBarberiaById } from "@/services/barberiaService";

export const useFetchBarberia = (id: string) => {
  const [barberia, setBarberia] = useState<IBarberia | null>(null);

  const fetchBarberia = async () => {
    const response = await findBarberiaById(id);
    setBarberia(response);
  };

  useEffect(() => {
    fetchBarberia();
  }, [id]);

  return barberia;
};
