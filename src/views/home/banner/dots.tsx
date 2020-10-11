/** @jsx jsx */
import { css, jsx } from "@emotion/core";

type TProps = {
  slides: string[];
  activeIndex: number;
};

type DotProps = {
  active: boolean;
};

const Dot = ({ active }: DotProps) => (
  <span
    css={css`
      width: 30px;
      height: 2px;
      background: $fff;
      margin-right: 10px;
      cursor: pointer;
      background: ${active ? "#f4811f" : "white"};
    `}
  />
);

const Dots = ({ slides, activeIndex }: TProps) => (
  <div
  css={css`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
