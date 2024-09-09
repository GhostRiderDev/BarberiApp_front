import { useState, useRef, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { Input } from "./ui/input";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <PlacesAutocomplete />;
}

const PlacesAutocomplete = () => {
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

  const handleInputChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(true);

    autocompleteService.current!.getPlacePredictions(
      { input: value, componentRestrictions: { country: "co" } },
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

  const handleSelect = async (address: string) => {
    setInputValue(address);
    setSuggestions([]);
    setOpen(false);

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log("Coordinates: ", { lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        className="flex flex-row text-md items-center cursor-pointer duration-300 transition-all gap-2 px-6 bg-white p-2 rounded-[50px]"
        value={inputValue}
        onChange={handleInputChange}
        aria-expanded={open}
      />

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
