import React, {useState} from "react";
import "./EightBall.css";


const EightBall = (props) => {
    const genRandom = () => Math.floor(Math.random() * 20) + 1;

    const initialColorCounts = {
        green: 0,
        goldenrod: 0,
        red: 0
    };

    const [colorCounts, setColorCounts] = useState(initialColorCounts);

    const makePrediction = () => {
        const randomIndex = genRandom();
        const selectedAnswer = props.answers[randomIndex];
    
        setColorCounts((prevCounts) => ({
          ...prevCounts,
          [selectedAnswer.color]: prevCounts[selectedAnswer.color] + 1,
        }));
    
        setAnswer(selectedAnswer);
      };
    
    const restart = () => {
        setAnswer(props.answers[0]);
        setColorCounts(initialColorCounts);
    }

    const [answer, setAnswer] = useState(props.answers[0]);
    

    return (
        <div className="EightBall">
            <div className={answer.color} onClick={() => makePrediction()}>
                <h1>{answer.msg}</h1>
            </div>
            <button className="EightBall-reset" onClick={restart}>Reset</button>
            <p>Green: {colorCounts.green} Goldenrod: {colorCounts.goldenrod} Red: {colorCounts.red}</p>
        </div>
    )
}

export default EightBall;