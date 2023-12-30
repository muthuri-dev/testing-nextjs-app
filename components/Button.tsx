import React from "react";
type TProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: TProps) {
  return (
    <div>
      <button className="bg-green-400 py-2 px-6 rounded-2xl" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
