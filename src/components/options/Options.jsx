import css from "./Options.module.css";

function Options({ options, updateFeedback, resetFeedback, isFeedback }) {
  return (
    <ul className={css.options}>
      {options.map((option, id) => {
        return (
          <li key={id}>
            <button
              type="button"
              onClick={(e) => updateFeedback(e.target.innerHTML)}
            >
              {option}
            </button>
          </li>
        );
      })}
      {isFeedback && (
        <li>
          <button type="button" onClick={resetFeedback}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}

export default Options;
