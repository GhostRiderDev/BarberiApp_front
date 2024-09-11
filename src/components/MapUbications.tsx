import { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { IBarberiasStore, useBarberiasStore } from "@/store/barberiasStore";

const MapUbications = () => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey });
  const barberias = useBarberiasStore(
    (state: IBarberiasStore) => state.barberias
  );

  useEffect(() => {
    console.log("Barberias: ", barberias);
  }, [barberias]);

  if (!isLoaded) {
    return null;
  }

  const generateRandomLat = () => {
    // Lógica para generar una latitud aleatoria
    return 7.8847222222222 + Math.random() * 0.01;
  };

  const generateRandomLng = () => {
    // Lógica para generar una longitud aleatoria
    return -76.635 + Math.random() * 0.01;
  };

    const mapOptions = {
      disableDefaultUI: true,
      mapTypeControl: false, 
      streetViewControl: false,
    };

  return (
    <GoogleMap
      mapContainerStyle={{ height: "100%", width: "100%" }}
      center={{ lat: 7.8847222222222, lng: -76.635 }}
      zoom={14}
      options={mapOptions}
    >
      {barberias !== undefined &&
        barberias.map((barberia) => (
          <Marker
            key={barberia.id}
            position={{
              lat: parseFloat(generateRandomLat() + ""),
              lng: parseFloat(generateRandomLng() + ""),
            }}
          />
        ))}
    </GoogleMap>
  );
};

export default MapUbications;
