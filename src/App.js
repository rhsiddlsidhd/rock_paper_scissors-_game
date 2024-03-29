import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import Inventory from "./components/Inventory";
import Button from "./components/Button";

const imgPath = process.env.REACT_APP_IMAGE_PATH;

const choice = {
  rock: {
    name: "rock",
  },
  scissors: {
    name: "scissors",
  },
  paper: {
    name: "paper",
  },
};

function App() {
  const startComment = "시작하려면 버튼을 클릭해주세요";
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");
  const [winnerId, setWinnerId] = useState(startComment);

  const control = (userChoise) => {
    setUserSelect(choice[userChoise]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let result = judgement(choice[userChoise], computerChoice);
    setResult(result);

    let $winnerIdSearch = winnerIdSearch(result);
    setWinnerId($winnerIdSearch);
  };

  const winnerIdSearch = (result) => {
    let winnerId;
    switch (result) {
      case "Draw":
        winnerId = "Who is winner?";
        break;
      case "Win":
        winnerId = "User wins ";
        break;
      default:
        winnerId = "Computer wins";
    }
    return winnerId;
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Draw";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "Win" : "Lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "Win" : "Lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "Win" : "Lose";
    }
  };

  const randomChoice = () => {
    /**
     * Object.keys()
     * 객체의 Key값을 가져와 배열로 만들어주는 메소드
     */

    let itemArray = Object.keys(choice);

    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <GamePage>
      <WrapperInventory>
        <Inventory
          itemTitle="User"
          item={userSelect}
          result={result}
          imgPath={imgPath}
        />
        <Versus>VS</Versus>
        <Inventory
          itemTitle="Computer"
          item={computerSelect}
          result={result}
          imgPath={imgPath}
        />
      </WrapperInventory>
      <WrapperResultDisplay>
        <ResultDisplay>
          <h1>{winnerId}</h1>
        </ResultDisplay>
        <SelectBtnContainer>
          <Button
            onClick={() => control("rock")}
            imagePath={`${imgPath}/button_rock.png`}
            alt="Rock"
          />
          <Button
            onClick={() => control("scissors")}
            imagePath={`${imgPath}/button_scissors.png`}
            alt="Scissors"
          />
          <Button
            onClick={() => control("paper")}
            imagePath={`${imgPath}/button_paper.png`}
            alt="Paper"
          />
        </SelectBtnContainer>
      </WrapperResultDisplay>
    </GamePage>
  );
}

export default App;

const GamePage = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eeeeee;
`;

const WrapperInventory = styled.div`
  width: 90%;
  height: 65vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const WrapperResultDisplay = styled.div`
  width: 90%;
  height: 25vh;
  background-color: white;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

const Versus = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const SelectBtnContainer = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultDisplay = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 2rem;
    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
