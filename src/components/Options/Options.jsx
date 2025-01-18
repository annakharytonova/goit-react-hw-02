import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  const btnOptions = ["good", "neutral", "bad"];

  return (
    <div className={s.container}>
      {btnOptions.map((options) => (
        <button
          key={options}
          onClick={() => updateFeedback(options)}
          className={s.button}
        >
          {options}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={s.button}>
          reset
        </button>
      )}
    </div>
  );
};

export default Options;
