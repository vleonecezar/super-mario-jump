import React, { useEffect, useRef, useState } from "react";

import { PlayingContainer } from "./styled";

import mario_img from "../../assets/mario-walking.gif";
import mario_jump_img from "../../assets/mario-jump.gif";
import mario_dying_img from "../../assets/mario-dying.gif";
import bullet_img from "../../assets/bullet-bill.png";
import bushes_img from "../../assets/bushes.png";
import clouds_img from "../../assets/clouds.png";

const Playing = () => {
  const [gameOver, setGameOver] = useState(false);
  const [jump, setJump] = useState(false);
  const [score, setScore] = useState(0);

  const mario = useRef();
  const bullet = useRef();
  const bushes = useRef();
  const clouds = useRef();

  const getElementPosition = (element) => {
    if (element.className.includes("mario")) {
      return +window.getComputedStyle(element).bottom.replace("px", "");
    } else {
      return +window.getComputedStyle(element).left.replace("px", "");
    }
  };

  const stopAnimation = (element, position) => {
    element.style.animation = "none";

    if (element.className.includes("mario")) {
      element.style.bottom = `${position}px`;
    } else {
      element.style.left = `${position}px`;
    }
  };

  const handleJump = (event, eventName) => {
    if (event.code === "Space" || eventName === "touchstart") {
      setJump(true);

      setTimeout(() => {
        setJump(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const loop = setInterval(() => {
      const marioPosition = getElementPosition(mario.current);
      const bulletPosition = getElementPosition(bullet.current);
      const bushesPosition = getElementPosition(bushes.current);
      const cloudsPosition = getElementPosition(clouds.current);

      if (
        marioPosition <= 130 &&
        bulletPosition <= 70 &&
        bulletPosition >= -90
      ) {
        stopAnimation(clouds.current, cloudsPosition);
        stopAnimation(bushes.current, bushesPosition);
        stopAnimation(bullet.current, bulletPosition);
        stopAnimation(mario.current, marioPosition);

        setGameOver(true);
        clearInterval(loop);
      }
    }, 10); //10
  }, []);

  useEffect(() => {
    const events = ["keydown", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, (e) => handleJump(e, event));
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, (e) => handleJump(e, event));
      });
    };
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      if (!gameOver) {
        setScore((score) => (score += 1));
      }
    }, 2000);

    return () => clearInterval(loop);
  }, [gameOver]);

  return (
    <PlayingContainer>
      <span>SCORE: {score}</span>

      <img ref={bushes} src={bushes_img} className="bushes" alt="bushes" />

      <img ref={clouds} src={clouds_img} className="clouds" alt="clouds" />
      {!gameOver ? (
        <img
          className={!jump ? "mario" : "mario jump"}
          ref={mario}
          src={!jump ? mario_img : mario_jump_img}
          alt="mario"
        />
      ) : (
        <img
          className="mario dying"
          ref={mario}
          src={mario_dying_img}
          alt="mario"
        />
      )}

      <img className="bullet" ref={bullet} src={bullet_img} alt="bullet bill" />
    </PlayingContainer>
  );
};

export default Playing;
