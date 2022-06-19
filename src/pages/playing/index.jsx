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

  const handleJump = (type, event) => {
    if (
      (event.code === "Space" && event.type === "keydown") ||
      event.type === "touchstart"
    ) {
      setJump(true);

      setTimeout(() => {
        setJump(false);
      }, 1000);
    }
  };

  const stopAnimation = (element, position) => {
    if (element !== mario.current) {
      element.style.top = `${position.top}px`;
    }
    element.style.animation = "none";
    element.style.left = `${position.left}px`;
    element.style.right = `${position.right}px`;
    element.style.bottom = `${position.bottom}px`;
  };

  const getElementPosition = (element) => {
    const left = +getComputedStyle(element).left.replace("px", "");
    const right = +getComputedStyle(element).right.replace("px", "");
    const top = +getComputedStyle(element).top.replace("px", "");
    const bottom = +getComputedStyle(element).bottom.replace("px", "");
    const width = +getComputedStyle(element).width.replace("px", "");
    const height = +getComputedStyle(element).height.replace("px", "");
    return { left, right, top, bottom, width, height };
  };

  // GameOver
  useEffect(() => {
    const loop = setInterval(() => {
      const marioPosition = getElementPosition(mario.current);
      mario.last = marioPosition.bottom;
      console.log(mario.last);
      const bulletPosition = getElementPosition(bullet.current);
      const bushesPosition = getElementPosition(bushes.current);
      const cloudsPosition = getElementPosition(clouds.current);

      const fix = 15; //15

      const colBottom =
        marioPosition.bottom <
        bulletPosition.bottom - fix + bulletPosition.height;

      const colFront =
        marioPosition.right < bulletPosition.right - fix + bulletPosition.width;

      const colBack =
        marioPosition.left < bulletPosition.left + bulletPosition.width;

      if (colBottom && colFront && colBack) {
        stopAnimation(clouds.current, cloudsPosition);
        stopAnimation(bushes.current, bushesPosition);
        stopAnimation(bullet.current, bulletPosition);
        stopAnimation(mario.current, marioPosition);
        setGameOver(true);
        clearInterval(loop);
      }
    }, 10); //10

    return () => clearInterval(loop);
  }, []);

  // JUMP
  useEffect(() => {
    const eventsType = ["keydown", "touchstart"];

    eventsType.forEach((type) => {
      window.addEventListener(type, (event) => handleJump(type, event));
    });

    return () => {
      eventsType.forEach((type) => {
        window.removeEventListener(type, (event) => handleJump(type, event));
      });
    };
  }, []);

  // SCORE
  useEffect(() => {
    const loop = setInterval(() => {
      if (!gameOver) {
        setScore((score) => (score += 1));
      }
    }, 2000);

    return () => clearInterval(loop);
  }, [gameOver]);

  return (
    <PlayingContainer last={mario.last}>
      <span datatype="eu">SCORE: {score}</span>
      {gameOver && <span className="game-over">GAME OVER</span>}

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
