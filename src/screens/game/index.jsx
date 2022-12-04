import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GameContainer,
  Ground,
  Score,
  GameOver,
  Mario,
  Bullet,
} from "./styled";

import mario_img from "../../assets/mario.gif";
import mario_jump_img from "../../assets/mario_jump.gif";
import mario_dead_img from "../../assets/mario_dead.gif";
import bullet_img from "../../assets/bullet.png";

const Game = () => {
  const [score, setScore] = useState(0);
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const navigate = useNavigate();

  const background = useRef();
  const ground = useRef();
  const player = useRef();
  const enemy = useRef();

  //FUNCTIONS
  const getElementValues = (element) => {
    //returns string
    const isBackground = element === background.current;
    const isGround = element === ground.current;

    if (isBackground || isGround) {
      const position = getComputedStyle(element).backgroundPosition;
      return { position };
    }

    //returns number
    const left = +getComputedStyle(element).left.replace("px", "");
    const right = +getComputedStyle(element).right.replace("px", "");
    const top = +getComputedStyle(element).top.replace("px", "");
    const bottom = +getComputedStyle(element).bottom.replace("px", "");
    const width = +getComputedStyle(element).width.replace("px", "");
    const height = +getComputedStyle(element).height.replace("px", "");
    return { left, right, top, bottom, width, height };
  };

  const handleJump = (event) => {
    const isKeyboardSpace = event.code === "Space";
    const isTouch = event.type === "touchstart";

    if (isKeyboardSpace || isTouch) {
      setJump(true);
    }

    setTimeout(() => {
      setJump(false);
    }, 1000);
  };

  const enemySpeedBoost = () => {
    const time = getComputedStyle(enemy.current).animationDuration;
    let timeFormatted = +time.replace("s", "");
    timeFormatted -= 0.00004;
    enemy.current.style.animationDuration = `${timeFormatted}s`;
  };

  const freezeAnimation = (element, values) => {
    element.style.animation = "none";

    const isBackground = element === background.current;
    const isGround = element === ground.current;

    if (isBackground || isGround) {
      element.style.backgroundPosition = values.position;
    }

    if (element !== player.current) {
      element.style.top = `${values.top}px`;
    }

    element.style.left = `${values.left}px`;
    element.style.right = `${values.right}px`;
    element.style.bottom = `${values.bottom}px`;
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

  //MAIN LOOP
  useEffect(() => {
    const loop = setInterval(() => {
      const backgroundValues = getElementValues(background.current);
      const groundValues = getElementValues(ground.current);
      const playerValues = getElementValues(player.current);
      const enemyValues = getElementValues(enemy.current);

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
        freezeAnimation(background.current, backgroundValues);
        freezeAnimation(ground.current, groundValues);
        freezeAnimation(player.current, playerValues);
        freezeAnimation(enemy.current, enemyValues);
        setGameOver(true);
        clearInterval(loop);

        setTimeout(() => {
          navigate("/");
        }, 3500);
      }

      enemySpeedBoost();
    }, 10000);

    return () => clearInterval(loop);
    // eslint-disable-next-line
  }, []);

  return (
    <GameContainer ref={background}>
      <Ground ref={ground} />
      <Score>score: {score}</Score>
      {gameOver && <GameOver>game over</GameOver>}

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
