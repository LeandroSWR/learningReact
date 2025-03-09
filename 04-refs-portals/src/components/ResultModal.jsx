import {useImperativeHandle, useRef} from "react";
import { createPortal } from 'react-dom';

export default function ResultModal({ref, targetTime, remainingTime, onReset}) {
  const dialog = useRef(null);

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1- remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      {!userLost && <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>}
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}