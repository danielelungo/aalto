import { FunctionComponent } from "react";
import "./switch.css";

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: number | string;
}

const Switch: FunctionComponent<SwitchProps> = ({
  isOn,
  handleToggle,
  onColor,
}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: (isOn as any) && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
