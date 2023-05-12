import React, { MouseEventHandler } from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Parent = () => {
  return (
    <Button
      onClick={(e) => {
        e.currentTarget;
      }}
      className="my-class"
    >
      Children
    </Button>
  );
};
