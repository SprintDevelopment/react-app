import { useState } from "react";

interface Props{
    children: string;
    colorClass?: 'primary' | 'danger' | 'dark';
    onClick: () => void;
}

function Button({children, colorClass = 'primary', onClick}: Props) {
  let [clickCount, setClickCount] = useState(0);

  return (
    <button className={"btn btn-" + colorClass} onClick={() => { setClickCount(clickCount + 1); onClick();}}>{children} <span className="badge text-bg-secondary">{clickCount}</span></button>
  );
}

export default Button;