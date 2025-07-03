import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrige el problema del icono que no se carga
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Mapa = () => {
  return (
    <MapContainer
      center={[36.60616928800409, -4.530794341466971]}
      zoom={16}
      scrollWheelZoom={true}
      style={{
        height: "250px",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.58)",
        marginTop: "1rem",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[36.60616928800409, -4.530794341466971]}>
        <Popup>
          c/ Santo Tomás nº 19<br />
          Benalmádena, Málaga
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
