import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
// const title = true;
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ? title : 'Upload stats'}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id} >
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