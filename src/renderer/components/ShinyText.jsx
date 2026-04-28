import React, { useEffect, useRef } from 'react';

export default function ShinyText({
  text,
  speed = 2,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (disabled || !textRef.current) return;

    const element = textRef.current;
    const animationDuration = speed * 1000;
    const animationDelay = delay * 1000;

    element.style.setProperty('--shine-color', shineColor);
    element.style.setProperty('--base-color', color);
    element.style.setProperty('--spread', `${spread}deg`);
    element.style.setProperty('--animation-duration', `${animationDuration}ms`);
    element.style.setProperty('--animation-delay', `${animationDelay}ms`);
    element.style.setProperty('--direction', direction === 'left' ? '0deg' : '180deg');

    if (yoyo) {
      element.style.animationDirection = 'alternate';
      element.style.animationIterationCount = 'infinite';
    }

    if (pauseOnHover) {
      element.addEventListener('mouseenter', () => {
        element.style.animationPlayState = 'paused';
      });
      element.addEventListener('mouseleave', () => {
        element.style.animationPlayState = 'running';
      });
    }
  }, [speed, delay, color, shineColor, spread, direction, yoyo, pauseOnHover, disabled]);

  return (
    <span
      ref={textRef}
      className={`shiny-text ${disabled ? '' : 'animate-shine'}`}
      style={{
        color: disabled ? color : undefined,
      }}
    >
      {text}
    </span>
  );
}
