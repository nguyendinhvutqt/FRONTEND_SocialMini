import React from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
};

function WrapperDropdown({ children }: Props) {
  return <section className="wrapper-dropdown">{children}</section>;
}

export default WrapperDropdown;
