import React, { useEffect, useRef, useState } from "react";

import { Screen, PlayingContainer, MarioJump } from "./styled";

import clouds_img from "../../assets/clouds.png";
import bushes_img from "../../assets/bushes.png";
import mario_img from "../../assets/mario-walking.gif";
import mario_jump_img from "../../assets/mario-jump.gif";
import mario_dying_img from "../../assets/mario-dying.gif";
import bullet_img from "../../assets/bullet-bill.png";
import marioJump from "../../assets/mario-border.png";

const Playing = () => {
  const [gameOver, setGameOver] = useState(false);
  const [jump, setJump] = useState(false);
  const [score, setScore] = useState(0);

  const player = useRef();
  const enemy = useRef();
  const bushes = useRef();
  const clouds = useRef();

  const handleJump = (event) => {
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
    if (element !== player.current) {
      element.style.top = `${position.top}px`;
    }
    element.style.animation = "none";
    element.style.left = `${position.left}px`;
    element.style.right = `${position.right}px`;
    element.style.bottom = `${position.bottom}px`;
  };

  const getElementValues = (element) => {
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
      const playerValues = getElementValues(player.current);
      const enemyValues = getElementValues(enemy.current);
      const bushesValues = getElementValues(bushes.current);
      const cloudsValues = getElementValues(clouds.current);

      const fix = 15; //15

      const colBottom =
        playerValues.bottom < enemyValues.bottom - fix + enemyValues.height;

      const colFront =
        playerValues.right < enemyValues.right - fix + enemyValues.width;

      const colBack = playerValues.left < enemyValues.left + enemyValues.width;

      if (colBottom && colFront && colBack) {
        player.position = playerValues.bottom;
        stopAnimation(player.current, playerValues);
        stopAnimation(enemy.current, enemyValues);
        stopAnimation(bushes.current, bushesValues);
        stopAnimation(clouds.current, cloudsValues);
        setGameOver(true);
        clearInterval(loop);
      }
    }, 100000); //10

    return () => clearInterval(loop);
  }, []);

  // JUMP
  useEffect(() => {
    const eventsType = ["keydown", "touchstart"];

    eventsType.forEach((type) => {
      window.addEventListener(type, (event) => handleJump(event));
    });

    return () => {
      eventsType.forEach((type) => {
        window.removeEventListener(type, (event) => handleJump(event));
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
    <PlayingContainer>
      <Screen playerPosition={player.position}>
        <span>Score: {score}</span>
        {gameOver && <span className="game-over">game over</span>}

        <img ref={bushes} src={bushes_img} className="bushes" alt="bushes" />
        <img ref={clouds} src={clouds_img} className="clouds" alt="clouds" />
        <img
          className="bullet"
          ref={enemy}
          src={bullet_img}
          alt="bullet bill"
        />

        {!gameOver ? (
          <img
            className={!jump ? "mario" : "mario jump"}
            ref={player}
            src={!jump ? mario_img : mario_jump_img}
            alt="mario"
          />
        ) : (
          <img
            className="mario dying"
            ref={player}
            src={mario_dying_img}
            alt="mario"
          />
        )}
      </Screen>
      <MarioJump src={marioJump} />
      <p>TAP SCREEN TO JUMP</p>
    </PlayingContainer>
  );
};
export default Playing;
