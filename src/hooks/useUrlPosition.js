//  FUNCTION TO GET THE POSITION FROM THE URL
import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return [lat, lng];
}
