import { IBarberia } from "@/interfaces/IBarberia";
import { ILocation } from "@/interfaces/ILocation";
import { create } from "zustand";

export interface IBarberiasStore {
  barberias: IBarberia[];
  setBarberias: (barberias: IBarberia[]) => void;
}

export interface ILocationStore {
  location: ILocation;
  setLocation: (location: ILocation) => void;
}

export const useBarberiasStore = create<IBarberiasStore>((set) => ({
  barberias: [],
  setBarberias: (barberias: IBarberia[]) => set({ barberias }),
}));

export const useLocationStore = create<ILocationStore>((set) => ({
  location: {
    city: "",
    province: "",
    address: "",
  },
  setLocation: (location: ILocation) => set({ location }),
}));
