import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { useTransform, useViewportScroll, useSpring } from "framer-motion";
import { Frame } from "framer";
import "./styles.css";

export const MyComponent = () => {
  const { scrollY } = useViewportScroll();
  const xTransformRange = useTransform(scrollY, [0, 150], [5, 1]);
  const xSpring = useSpring(xTransformRange, { damping: 20 });
  const [value, setValue] = useState(5);
  useEffect(() => xSpring.onChange(v => setValue(v)), [xSpring]);

  return (
    <>
      <Frame
        style={{ x: value, scale: value }}
        transition={{ ease: "linear", duration: 2 }}
        top={value * 50}
        size={30}
        width={500}
        background={"#fff"}
        radius={3}
      >
        Diego Montes
      </Frame>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
