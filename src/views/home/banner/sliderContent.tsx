/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

type TProps = {
  translated?: any;
  width?: number;
  transition?: number;
  children: React.ReactNode;
};

const SliderContent = (props: TProps) => (
  <div
    css={css`
      transform: translateX(-${props.translated}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
);

export default SliderContent;
