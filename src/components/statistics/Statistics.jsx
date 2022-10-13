import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
// const title = true;
  return (
    <section className={css.statistics}>
      <h2 className="title">{title ? title : 'Upload stats'}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};