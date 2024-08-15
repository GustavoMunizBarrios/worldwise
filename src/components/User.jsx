import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import styles from './User.module.css';

/* const FAKE_USER = {
  name: 'Gustavo',
  email: 'gustavo@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}; */

export default function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
