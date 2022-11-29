import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GameContainer } from "./styled";

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

  const stopAnimation = (element, position) => {
    if (element !== player.current) {
      element.style.top = `${position.top}px`;
    }

    element.style.animation = "none";
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

  //SPEED BOOST
  const speedBoost = () => {
    let time = +getComputedStyle(enemy.current).animationDuration.replace(
      "s",
      ""
    );
    enemy.current.style.animationDuration = "0s";
    time -= 0.00005;
    enemy.current.style.animationDuration = `${time}s`;
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
        stopAnimation(player.current, playerValues);
        stopAnimation(enemy.current, enemyValues);
        stopAnimation(bushes.current, bushesValues);
        stopAnimation(clouds.current, cloudsValues);
        setGameOver(true);
        clearInterval(loop);

        setTimeout(() => {
          navigate("/");
        }, 3500);
      }

      speedBoost();
    }, 10);

    return () => clearInterval(loop);
  }, [navigate]);

  return (
    <GameContainer>
      <span>SCORE: {score}</span>
      {gameOver && <span className="game-over">GAME OVER</span>}

      <img ref={bushes} src={bushes_img} className="bushes" alt="bushes" />
      <img ref={clouds} src={clouds_img} className="clouds" alt="clouds" />
      <img className="bullet" ref={enemy} src={bullet_img} alt="bullet bill" />

      {!gameOver ? (
        <img
          className={!jump ? "mario" : "mario jump"}
          ref={player}
          src={!jump ? mario_img : mario_jump_img}
          alt="mario"
        />
      ) : (
        <img
          className="mario dead"
          ref={player}
          src={mario_dead_img}
          alt="mario dead"
        />
      )}
    </GameContainer>
  );
};
export default Game;
