import React from "react";

type Props = {
  className: string;
};

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button className="first-class"></Button>

      <Button className="my-class"></Button>
    </>
  );
};
