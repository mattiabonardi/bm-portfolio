import React from "react";

interface IconProps {
  iconName: string;
  size: string;
  color?: string;
  onClickEvent?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  size = "16",
  color = "#E8EAED",
  onClickEvent,
}) => {
  const iconStyle = {
    WebkitMask: "url(/icons/" + iconName + ".svg) center center no-repeat",
    width: size + "px",
    height: size + "px",
    background: color,
  };
  return <div style={iconStyle} onClick={onClickEvent}></div>;
};
