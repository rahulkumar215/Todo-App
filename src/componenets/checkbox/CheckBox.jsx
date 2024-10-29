import styles from "./CheckBox.module.scss";

// eslint-disable-next-line react/prop-types
const CheckBox = ({
  className1,
  className2,
  disabled = false,
  onChange,
  checked = false,
}) => {
  return (
    <div
      className={
        className1 ? `${styles.bgContianer} ${className1}` : styles.bgContianer
      }
    >
      <label className={styles.container}>
        <input
          type="checkbox"
          disabled={disabled}
          onChange={() => onChange()}
          checked={checked}
        ></input>
        <span
          className={
            className2 ? `${styles.checkmark} ${className2}` : styles.checkmark
          }
        ></span>
      </label>
    </div>
  );
};

export default CheckBox;
