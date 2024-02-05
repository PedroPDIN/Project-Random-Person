'use client'

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerIcon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'

interface Props {
  position: {
    latitude: string,
    longitude: string,
  };
  street: {
    number: number,
    name: string,
  },
  city: string,
  state: string,
  country: string,
}

export default function Map({position, street}: Props) {
  return (
    <MapContainer
      className="w-full h-full"
      center={[+position.latitude, +position.longitude]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            shadowUrl: MarkerShadow.src,
            shadowSize: [41, 41],
          })
        }
        position={[+position.latitude, +position.longitude]}>
        <Popup>
          {`${street.name}, ${street.number}` }
        </Popup>
      </Marker>
    </MapContainer>
  )
}