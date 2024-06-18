import { useEffect, useRef, useState } from 'react';

const DEFAULT_HIGHLIGHT = 'inherit';
const COLOR_HIGHLIGHT = 'yellow';
const DEFAULT_TIMEOUT = 5_000;

function DisplayHighlight(props) {
  const { count } = props;

  const [bgColor, setBgColor] = useState(DEFAULT_HIGHLIGHT);
  const updateTimer = useRef(null);

  const setUpdate = () => {
    setBgColor(COLOR_HIGHLIGHT);
    updateTimer.current = setTimeout(() => {
      setBgColor(DEFAULT_HIGHLIGHT);
      updateTimer.current = null;
    }, DEFAULT_TIMEOUT);
  };

  useEffect(() => {
    clearTimeout(updateTimer.current);
    setUpdate();
  }, [count]);

  // Cleanup, make sure timeout is deleted when component is unmounted
  useEffect(() => {
    return () => {
      if (updateTimer.current) {
        clearTimeout(updateTimer.current);
      }
    };
  }, []);

  // Show the current count highlighted for timeout milliseconds
  return (
    <div>
      Current count is:&nbsp;
      <span style={{ backgroundColor: bgColor }}>{count}</span>
    </div>
  );
}

export default DisplayHighlight;
