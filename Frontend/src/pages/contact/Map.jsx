import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
export default function Map() {
    return(
        <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    )
}
