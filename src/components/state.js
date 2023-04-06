const rand = Math.floor(Math.random() * 100);
const State = () => (
  <div className="progress-stat">
    <p className="percent-complete">{`${rand}%`}</p>
    <p className="completed">Completed</p>
  </div>

);

export default State;
