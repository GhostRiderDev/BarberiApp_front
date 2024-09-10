import { useState, useRef, useEffect } from "react";
import { getGeocode } from "use-places-autocomplete";
import { Input } from "./ui/input";
import { FaMapLocationDot } from "react-icons/fa6";
import { findBarberiasByCityAndProvince } from "@/services/barberiaService";
import {
  IBarberiasStore,
  ILocationStore,
  useBarberiasStore,
  useLocationStore,
} from "@/store/barberiasStore";
import { useNavigate } from "react-router-dom";

export default function Places() {
  return <PlacesAutocomplete />;
}

const PlacesAutocomplete = () => {
  const { location, setLocation } = useLocationStore(
    (state: ILocationStore) => state
  );
  const [inputValue, setInputValue] = useState(location.address || "");
  const setBarberias = useBarberiasStore(
    (state: IBarberiasStore) => state.setBarberias
  );
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [open, setOpen] = useState(false);
  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!placesService.current && window.google) {
      placesService.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    }
  }, [autocompleteService, placesService]);

  const handleSearchBarbers = async (
    city: string,
    province: string,
    address: string
  ) => {
    console.log("City: ", city);
    console.log("Province: ", province);
    const barberiasFound = await findBarberiasByCityAndProvince(city, province);
    console.log("Barberias found: ", barberiasFound);
    console.log("Address: ", address);
    setBarberias(barberiasFound);
    setLocation({ city, province, address });
    navigate("/barberias");
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(true);

    if (autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
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
    }
  };

  const getGeoProperti = (
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

      handleSearchBarbers(city, province, address);
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
          onClick={() => {
            if (window.location.pathname === "/") {
              navigate("/barberias");
              return;
            }
          }}
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
