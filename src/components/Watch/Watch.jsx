import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <div className="Watch">
    <p className="Watch__time">
      {setTimeFormat(time)}
    </p>
    <div className="Watch__buttons">
      <button type="button" className="Watch__button" onClick={start}>
        Start
      </button>
      <button type="button" className="Watch__button" onClick={stop}>
        Stop
      </button>
      <button type="button" className="Watch__button" onClick={reset}>
        Reset
      </button>
      <button type="button" className="Watch__button" onClick={wait}>
        Wait
      </button>
    </div>
  </div>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
