import styled from "styled-components";
import "./App.css";
import { Component } from "react";
import Inventory from "./classComponents/Inventory";
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

class AppClass extends Component {
  /**
   * Class
   *
   * 필드
   *
   * 생성자
   *
   * 매서드
   *
   *
   *  const srcImg = `${imgPath}/${direction}_${name}.png`;
   */

  constructor(props) {
    super(props);
    this.state = {
      startComment: "시작하려면 버튼을 클릭해주세요.",
      userSelect: "",
      computerSelect: "",
      result: "",
      winnerId: "",
    };
  }

  componentDidMount() {
    this.setState({
      winnerId: this.state.startComment,
    });
  }

  control(userChoise) {
    this.setState({ userSelect: choice[userChoise] });

    let computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });

    let result = this.judgement(choice[userChoise], computerChoice);
    this.setState({ result: result });

    let $winnerIdSearch = this.winnerIdSearch(result);
    this.setState({ winnerId: $winnerIdSearch });
  }

  judgement(user, computer) {
    if (user.name === computer.name) {
      return "Draw";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "Win" : "Lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "Win" : "Lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "Win" : "Lose";
    }
  }

  randomChoice() {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  winnerIdSearch(result) {
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
  }
  render() {
    return (
      <>
        <GamePage>
          <WrapperInventory>
            <Inventory
              itemTitle="User"
              item={this.state.userSelect}
              result={this.state.result}
              imgPath={imgPath}
            />
            <Versus>VS</Versus>
            <Inventory
              itemTitle="Computer"
              item={this.state.computerSelect}
              result={this.state.result}
              imgPath={imgPath}
            />
          </WrapperInventory>
          <WrapperResultDisplay>
            <ResultDisplay>
              <h1>{this.state.winnerId}</h1>
            </ResultDisplay>
            <SelectBtnContainer>
              <Button
                onClick={() => this.control("rock")}
                imagePath={`${imgPath}/button_rock.png`}
                alt="Rock"
              />
              <Button
                onClick={() => this.control("scissors")}
                imagePath={`${imgPath}/button_scissors.png`}
                alt="Scissors"
              />
              <Button
                onClick={() => this.control("paper")}
                imagePath={`${imgPath}/button_paper.png`}
                alt="Paper"
              />
            </SelectBtnContainer>
          </WrapperResultDisplay>
        </GamePage>
      </>
    );
  }
}

export default AppClass;

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
