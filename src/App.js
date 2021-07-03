import React, { useState } from 'react'
import Icon from './components/Icon'
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const itemArray = new Array(9).fill('empty');
var indexOfEmpty = itemArray.indexOf('empty');

const App = () => {

  const [isX, setIsX] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsX(false);
    setWinMessage("");
    itemArray.fill('empty', 0, 9)
  }

  const checkWinner = () => {
    // Row Wins !
    if (itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins !`)
    } else if (itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setWinMessage(`${itemArray[3]} Wins !`)
    } else if (itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setWinMessage(`${itemArray[6]} Wins !`)
    }
    // Column Wins !
    else if (itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins !`)
    } else if (itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setWinMessage(`${itemArray[1]} Wins !`)
    } else if (itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Wins !`)
    }
    // diagonal Wins !
    else if (itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Wins !`)
    } else if (itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setWinMessage(`${itemArray[2]} Wins !`)
    }
  }

  const changeItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isX ? "X" : "O"
      setIsX(!isX);
    } else {
      return toast("Filled Place", { type: "error" })
    }
    indexOfEmpty = itemArray.indexOf("empty");
    if (indexOfEmpty < 0) {
      setWinMessage("DRAW!");
    }
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    checkWinner();
  }

  return (
    <div className="container">
      <ToastContainer position="top-left" />
      <div>
        {winMessage ? (
          <div>
            <h1 className="turnMsg">
              {winMessage}
            </h1>
            <button className="reloadBtn" onClick={reloadGame}>          
              Reset Game   
            </button>
          </div>
        ) : (
          <h1 className="turnMsg">
            {isX ? "X" : "O"}'s Turn
          </h1>
        )}
      </div>
      <div className="grid">
        {
          itemArray.map((item, index) => (
            <div onClick={() => changeItem(index)} className="iconContanier">
              <Icon player={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default App;