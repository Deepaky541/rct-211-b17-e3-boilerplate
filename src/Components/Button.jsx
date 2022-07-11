import "./button.css"
import classNames from "classnames";
export const Button = ({ colorScheme, variant, size }) => {
  return (
    <button
      className={classNames(
        `${colorScheme || "white"}`,
        `${variant||"solid"}`,
        `${size|| "md"}`,
        "btn"
      )}
    >
      button
    </button>
  );
};
