import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const navigate = useNavigate(); // with useNavigate we can move to any URL

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}
