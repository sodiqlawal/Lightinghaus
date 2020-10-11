import React from "react";
import { css, jsx } from "@emotion/core";

const Slide = ({ key, content, text }: any) => (
  <div
    css={css`
      height: 70vh;
      width: 100%;
      background-image: url("${content}");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    key={key}
  >
    <div
      css={css`
        width: 1140px;
      `}
    >
      {text}
    </div>
  </div>
);

export default Slide;
