import CircleProgress from './circleProgress';
import State from './state';

const BookProgress = () => (
  <div className="progress-container">
    <CircleProgress />
    <State />
    <div className="progress-divider" />
    <div className="current-chapter-container">
      <div>
        <p className="current-chapter-label">CURRENT CHAPTER</p>
        <p className="current-chapter">CHAPTER 7</p>
      </div>
      <div>
        <button className="primary-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default BookProgress;
