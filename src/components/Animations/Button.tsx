import { cx } from "@emotion/css";

type Props = {
  text: string;
  className?: string;
  active?: { state: boolean; className: string };
  onClick?: () => void;
};

function Button({ text, className, onClick, active }: Props) {
  return (
    <button
      className={cx(
        "p-2 px-4 border rounded-lg bg-white hover:bg-slate-100 shadow",
        active?.state && active.className,
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
