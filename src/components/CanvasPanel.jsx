import React from "react";
import { AppContext } from "../store";
import { Section, Canvas } from "./styles/CanvasPanel.styles";
import actions from "../store/actions";
import Button from "../pattern/Button";

const CanvasPanel = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const node = React.useRef(null);
  const live = state.lives;

  React.useEffect(() => {
    const baseA = { x: 200, y: 0, width: 2, height: 20 };
    const baseB = { x: 100, y: 0, width: 100, height: 2 };
    const baseC = { x: 100, y: 297, width: 300, height: 2 };
    const baseD = { x: 100, y: 0, width: 2, height: 400 };
    const body = { x: 200, y: 180, q: 200, z: 80 };
    const rightArm = { x: 150, y: 130, q: 200, z: 80 };
    const leftArm = { x: 250, y: 130, q: 200, z: 80 };
    const rightLeg = { x: 150, y: 280, q: 200, z: 180 };
    const leftLeg = { x: 250, y: 280, q: 200, z: 180 };

    const canvas = node.current;

    if (canvas.getContext("2d")) {
      const context = canvas.getContext("2d");

      if (live === 10) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      const Draw = (base) => {
        context.beginPath();
        context.fillRect(base.x, base.y, base.width, base.height);
        context.strokeRect(base.x, base.y, base.width, base.height);
        context.stroke();
      };

      const DrawBody = (body) => {
        context.beginPath();
        context.moveTo(body.q, body.z);
        context.lineTo(body.x, body.y);
        context.strokeStyle = "blue";
        context.stroke();
      };

      const drawHead = () => {
        context.beginPath();
        context.fillStyle = "blue";
        context.arc(200, 50, 30, 0, Math.PI * 2, true);
        context.fill();

        context.beginPath();
        context.lineWidth = 3;
        context.stroke();

        context.beginPath();
        context.fillStyle = "blue";
      };

      live === 9 && Draw(baseC);
      live === 8 && Draw(baseD);
      live === 7 && Draw(baseB);
      live === 6 && Draw(baseA);
      live === 5 && drawHead();
      live === 4 && DrawBody(body);
      live === 3 && DrawBody(rightArm);
      live === 2 && DrawBody(leftArm);
      live === 1 && DrawBody(rightLeg);
      live === 0 && DrawBody(leftLeg);
    }
  }, [live]);

  const handleRestartGame = () => {
    const original = {
      selectedText: [],
      lives: 10,
      gameOver: false,
      winner: false,
      guess: ""
    };

    const comparable = (o) =>
      typeof o != "object" || !o
        ? o
        : Object.keys(o)
            .sort()
            .reduce((c, key) => ((c[key] = comparable(o[key])), c), {});

    const moved =
      JSON.stringify(comparable(state)) ===
      JSON.stringify(comparable(original));

    if (!moved) dispatch({ type: actions.Clear_State });
  };

  return (
    <Section>
      <Canvas width="400vmin" height="300vmin" ref={node} />
      <Section>
        <Button onClick={() => handleRestartGame()}>restart</Button>
      </Section>
    </Section>
  );
};

export default CanvasPanel;
