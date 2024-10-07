import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Box } from "@radix-ui/themes";

export function Map() {
  return (
    <Box width="32" height="32">
      <MapContainer
        style={{ height: 80, width: 200 }}
        center={[52.1409, -0.0802]}
        zoom={10}
        scrollWheelZoom={true}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.1409, -0.0802]}>
          <Popup>Cambridge Regional College</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}
