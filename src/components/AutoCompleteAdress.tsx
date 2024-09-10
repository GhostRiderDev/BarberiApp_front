import { useState, useRef, useEffect, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { getGeocode } from "use-places-autocomplete";
import { Input } from "./ui/input";
import { FaMapLocationDot } from "react-icons/fa6";
import { findBarberiasByCityAndProvince } from "@/services/barberiaService";
import { HomeContext } from "@/views/Home";


export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <PlacesAutocomplete />;
}

const PlacesAutocomplete = () => {
  const homeContext = useContext(HomeContext);
  console.log("Home context: ", homeContext);
  const [inputValue, setInputValue] = useState("");

  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [open, setOpen] = useState(false);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (!autocompleteService.current) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!placesService.current) {
      placesService.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    }
  }, []);

  const handleSearchBarbers = async (city: string, province: string) => {
    console.log("City: ", city);
    console.log("Province: ", province);
    const barberiasFound = await findBarberiasByCityAndProvince(city, province);
    homeContext.barberias = barberiasFound;
    console.log("Barberias found: ", homeContext.barberias);
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(true);

    autocompleteService.current!.getPlacePredictions(
      {
        input: value,
        componentRestrictions: { country: "co" },
        types: ["(regions)"],
      },
      (
        predictions: google.maps.places.AutocompletePrediction[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setSuggestions(predictions || []);
        } else {
          setSuggestions([]);
        }
      }
    );
  };

  const getGeoProperty = (
    results: google.maps.GeocoderResult[],
    property: string
  ) => {
    return results[0].address_components.find((c) => c.types.includes(property))
      ?.long_name;
  };

  const handleSelect = async (address: string) => {
    setInputValue(address);
    setSuggestions([]);
    setOpen(false);

    try {
      const results = await getGeocode({ address });

      const city =
        getGeoProperty(results, "administrative_area_level_2") ||
        getGeoProperty(results, "locality") ||
        "";

      const province =
        getGeoProperty(results, "administrative_area_level_1") || "";

      handleSearchBarbers(city, province);

      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        placeholder="Buscar..."
        className=" pl-[45px] text-md cursor-pointer duration-300 transition-all bg-white rounded-[50px]"
        value={inputValue}
        onChange={handleInputChange}
        aria-expanded={open}
        onClick={() => {
          if (inputValue.length > 0) setInputValue("");
        }}
      />

      <div className="absolute left-3 top-[6px]">
        <FaMapLocationDot className="w-6 h-6 text-violet-700 " />
      </div>

      <div className="absolute right-3 top-[3px]">
        <button
          className="text-white bg-violet-700 px-4 py-1 rounded-2xl font-bold"
          onClick={() => handleSelect(inputValue)}
        >
          Search
        </button>
      </div>


      {open && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map(({ place_id, description }) => (
                <li
                  key={place_id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelect(description)}
                >
                  {description}
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-2">No address found.</div>
          )}
        </div>
      )}
    </div>
  );
};
