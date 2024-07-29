import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CityItem.module.css'

CityItem.propTypes = {
    city: PropTypes.object,
    cityName: PropTypes.string,
};

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

export default function CityItem({ city }) {

    const { cityName, emoji, date, id } = city

    return (
        <li >
            <Link className={styles.cityItem} to={`${id}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>

            </Link>
        </li>
    );
}