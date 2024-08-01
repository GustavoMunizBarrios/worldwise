import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type='back'
      onClick={(e) => {
        e.preventDefault(); // this is to prevent that form submit this when click
        navigate(-1); // navigate(-1) means that we navigate back in history
      }}
    >
      &larr; Back
    </Button>
  );
}
