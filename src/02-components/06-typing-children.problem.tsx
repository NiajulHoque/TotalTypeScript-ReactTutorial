import React from "react";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button>
        <p>This is a child element of the Button Component.</p>
      </Button>
      <Button>Hello world!</Button>
    </>
  );
};
