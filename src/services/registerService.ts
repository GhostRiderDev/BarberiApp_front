import { IUserToRegister } from "@/interfaces/IUserToRegister";

const urlApi = import.meta.env.VITE_API_URL;

export const isAlreadyExist = async (email: string) => {
  const response = await fetch(`${urlApi}/auth/registered`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  return data !== false;
};

export const registerUser = async (userData: IUserToRegister) => {
  const response = await fetch(`${urlApi}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const registerAdmin = async (userData: IUserToRegister) => {
  const response = await fetch(`${urlApi}/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};
