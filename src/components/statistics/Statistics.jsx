import css from './Statistics.module.css';
import clsx from "clsx";

export const Statistics = ({ title, stats }) => {
// const title = true;
  return (
    <section className="statistics">
      <h2 className="title">{title ? title : 'Upload stats'}</h2>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={clsx(css.item)}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
      {/* <button onClick={event => console.log(event)}>Click me!</button> */}
    </section>
  );
};
