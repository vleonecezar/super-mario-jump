import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GameContainer,
  Score,
  GameOver,
  Clouds,
  Bushes,
  Bullet,
  Mario,
} from "./styled";

import clouds_img from "../../assets/clouds.png";
import bushes_img from "../../assets/bushes.png";
import mario_img from "../../assets/mario.gif";
import mario_jump_img from "../../assets/mario_jump.gif";
import mario_dead_img from "../../assets/mario_dead.gif";
import bullet_img from "../../assets/bullet.png";

const Game = () => {
  const [score, setScore] = useState(0);
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const navigate = useNavigate();

  const player = useRef();
  const enemy = useRef();
  const bushes = useRef();
  const clouds = useRef();

  //FUNCTIONS
  const getElementValues = (element) => {
    const left = +getComputedStyle(element).left.replace("px", "");
    const right = +getComputedStyle(element).right.replace("px", "");
    const top = +getComputedStyle(element).top.replace("px", "");
    const bottom = +getComputedStyle(element).bottom.replace("px", "");
    const width = +getComputedStyle(element).width.replace("px", "");
    const height = +getComputedStyle(element).height.replace("px", "");
    return { left, right, top, bottom, width, height };
  };

  const handleJump = (event) => {
    const isKeyboardSpace = event.code === "Space" && event.type === "keydown";
    const isTouch = event.type === "touchstart";

    if (isKeyboardSpace || isTouch) {
      setJump(true);

      setTimeout(() => {
        setJump(false);
      }, 1000);
    }
  };

  const freezeAnimation = (element, position) => {
    element.style.animation = "none";

    if (element !== player.current) {
      element.style.top = `${position.top}px`;
    }

    element.style.left = `${position.left}px`;
    element.style.right = `${position.right}px`;
    element.style.bottom = `${position.bottom}px`;
  };

  //SCORE
  useEffect(() => {
    const loop = setInterval(() => {
      if (!gameOver) {
        setScore((score) => (score += 1));
      }
    }, 2000);

    return () => clearInterval(loop);
  }, [gameOver]);

  //JUMP
  useEffect(() => {
    const eventList = ["keydown", "touchstart"];

    eventList.forEach((listItem) => {
      window.addEventListener(listItem, (event) => handleJump(event));
    });

    return () => {
      eventList.forEach((listItem) => {
        window.removeEventListener(listItem, (event) => handleJump(event));
      });
    };
  }, []);

  //SPEED BOOST
  const enemySpeedBoost = () => {
    const time = getComputedStyle(enemy.current).animationDuration;
    let timeFormatted = +time.replace("s", "");
    timeFormatted -= 0.00004;
    enemy.current.style.animationDuration = `${timeFormatted}s`;
  };

  //MAIN LOOP
  useEffect(() => {
    const loop = setInterval(() => {
      const playerValues = getElementValues(player.current);
      const enemyValues = getElementValues(enemy.current);
      const bushesValues = getElementValues(bushes.current);
      const cloudsValues = getElementValues(clouds.current);

      const fixCollisionBorder = 15; //Because images have a square border

      const collisionBottom =
        playerValues.bottom <
        enemyValues.bottom - fixCollisionBorder + enemyValues.height;

      const collisionFront =
        playerValues.right <
        enemyValues.right - fixCollisionBorder + enemyValues.width;

      const collisionBack =
        playerValues.left < enemyValues.left + enemyValues.width;

      //GAME OVER VERIFICATION
      if (collisionBottom && collisionFront && collisionBack) {
        freezeAnimation(player.current, playerValues);
        freezeAnimation(enemy.current, enemyValues);
        freezeAnimation(bushes.current, bushesValues);
        freezeAnimation(clouds.current, cloudsValues);
        setGameOver(true);
        clearInterval(loop);

        setTimeout(() => {
          navigate("/");
        }, 3500);
      }

      enemySpeedBoost();
    }, 10);

    return () => clearInterval(loop);
  }, [navigate]);

  return (
    <GameContainer>
      <Score>score: {score}</Score>
      {gameOver && <GameOver>game over</GameOver>}

      <Clouds ref={clouds} src={clouds_img} alt="clouds" />
      <Bushes ref={bushes} src={bushes_img} alt="bushes" />
      <Bullet ref={enemy} src={bullet_img} alt="bullet bill" />

      {!gameOver ? (
        <Mario
          jump={jump}
          ref={player}
          src={!jump ? mario_img : mario_jump_img}
          alt="mario"
        />
      ) : (
        <Mario
          ref={player}
          className="mario_dead"
          src={mario_dead_img}
          alt="mario dead"
        />
      )}
    </GameContainer>
  );
};
export default Game;
