import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import styles from './Map.module.css';
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesContext';

function Map() {
  const navigate = useNavigate(); // with useNavigate we can move to any URL
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([22.251877, -97.8395161]);
  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get('lat');
  const mapLng = searchParams.get('lng');

  //Effect to update the map position when search parameters change.
  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
