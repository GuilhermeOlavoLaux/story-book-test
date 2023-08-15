import "./Button.css";
export interface ButtonProps {
  primary: boolean;
  label: string;
  size?: "small" | "medium" | "large";
  onClick: () => void;
}

export default function Button({ primary, label, onClick, size }: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button onClick={onClick} className={`${mode} ${size}`}>
      {label}
    </button>
  );
}
