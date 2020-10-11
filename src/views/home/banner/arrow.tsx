/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LeftArrow from "@material-ui/icons/CallReceived";
import RightArrow from "@material-ui/icons/CallMade";

const Arrow = ({ direction, handleClick }: any) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      .icon {
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
      .arrow {
        transform: rotate(45deg)
      }
    `}
  >
    {direction === "right" ? (
      <RightArrow className="icon arrow" />
    ) : (
      <LeftArrow className="icon arrow" />
    )}
  </div>
);

export default Arrow;
