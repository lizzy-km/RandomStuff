import React, { useState } from "react";

const Button = ({ text, icon, isLoading, className, clickText }) => {
  const [count, setCount] = useState(false);

  return (
    <button
      type="submit"
      onClick={() => setCount(!count)}
      className={`
        ${className}
        ${count && "invert"}
        hover:invert px-2 py-1  transition-colors cursor-pointer  flex justify-center items-center gap-2 `}
    >
      {count ? (
        <i>{clickText}</i>
      ) : (
        <div className=" p-2 ">
          {text?.length > 0 && <p>{text}</p>}
          {icon && <i></i>}
        </div>
      )}
    </button>
  );
};

export default Button;
