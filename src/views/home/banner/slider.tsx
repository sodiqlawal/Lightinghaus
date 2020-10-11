/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./sliderContent";
import Slide from "./index";
import Arrow from "./arrow";

const getWidth = () => window.innerWidth;
/**
 * @function Slider
 */

type TProps = {
  slides: any[];
  autoPlay: number | null;
};

const Slider = (props: TProps) => {
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.7,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { translate, transition, activeSlide: activeIndex, _slides } = state;
  const autoPlayRef = useRef<() => void>();
  const transitionRef = useRef<() => void>();
  const resizeRef = useRef<() => void>();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };

    const smooth = (e: { target: { className: string | string[] } }) => {
      if (
        transitionRef.current &&
        e.target.className.includes("SliderContent")
      ) {
        transitionRef.current();
      }
    };

    const resize = () => {
      if (resizeRef.current) {
        resizeRef.current();
      }
    };

    let interval: NodeJS.Timeout | null = null;

    const transitionEnd = window.addEventListener(
      "transitionend",
      smooth as any
    );

    const onResize = window.addEventListener("resize", resize);

    if (props.autoPlay)
      interval = setInterval(play, (props.autoPlay as number) * 2000);

    return () => {
      window.removeEventListener("transitionend", transitionEnd as any);
      window.removeEventListener("resize", onResize as any);

      if (props.autoPlay) {
        clearInterval(interval!);
      }
    };
  }, [props.autoPlay]);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.7 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeIndex === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
    });

  return (
    <div css={SliderCSS}>
      <SliderContent
        translated={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((slide, i) => (
          <Slide key={slide + 1} activeIndex={activeIndex} slides={props.slides}  />
        ))}
      </SliderContent>
      {!props.autoPlay && (
        <React.Fragment>
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </React.Fragment>
      )}
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

Slider.defaultProps = {
  slides: [],
  autoPlay: null,
};
export default Slider;
