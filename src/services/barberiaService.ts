const apiUrl = import.meta.env.VITE_API_URL;

export const findBarberiasByCityAndProvince = async (
  city: string,
  province: string
) => {
  try {
    const response = await fetch(
      `${apiUrl}/barberia/ubication?ciudad=${city}&departamento=${province}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const findBarberiaById = async (id: string) => {
  try {
    const response = await fetch(`${apiUrl}/barberia/${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
