import React, { useState, useEffect} from "react";
import SquareComponent from "./SquareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];//initialy blank



function App() {
  const [gameState, updateGameState] = useState(initialState);//initialize game state
  const [isXChance,updateXChance] = useState(false);//firstly this is not X's chance so it is false
  const onSquareClicked =(index)=>{
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";//draw X if it is X's turn(firstly it will be false the alter)
    updateXChance(!isXChance)//after X's chance it will update the X cance as false
    updateGameState(strings)
  }
  
  useEffect(()=>{
    const winner = checkWiner();
    if (winner) {
      
      alert(`${winner} has won the game..`)
      updateGameState(initialState)
    }
    else if(checkTie()){
    alert(`Match draw`)}
    
  }, [gameState])
  const checkTie= () =>{
    let count = 0;
    gameState.forEach((cell) => {
      if (cell !== '') {
        count++;
      }
    })
    return count === 9;
  }
  const checkWiner=()=>{
    //winning conditions
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    // console.log('class: App, Function: checkWiner==', gameState[0],gameState[1],gameState[2]);
    // decide who is won '0' or 'X'
    for (let i = 0; i< lines.length; i++) {
    const [a,b,c] = lines[i];
     if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a];
     }
    }
    return null;
  }
  return (
    <div className="app-header">
      <p className="heading-text">Tic Tac Toe</p>
      {/* indexing squares */}
      <div className="row jc-center">
        <SquareComponent className='b-bottom-right' state={gameState[0]} onClick={()=> onSquareClicked(0)}/>
        <SquareComponent className='b-bottom b-right' state={gameState[1]} onClick={()=> onSquareClicked(1)}/>
        <SquareComponent className='b-bottom' state={gameState[2]} onClick={()=> onSquareClicked(2)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className='b-bottom-right' state={gameState[3]} onClick={()=> onSquareClicked(3)}/>
        <SquareComponent className='b-bottom b-right' state={gameState[4]} onClick={()=> onSquareClicked(4)}/>
        <SquareComponent className='b-bottom' state={gameState[5]} onClick={()=> onSquareClicked(5)}/>
      </div>
      <div className="row jc-center">
        <SquareComponent className='b-right' state={gameState[6]} onClick={()=> onSquareClicked(6)}/>
        <SquareComponent className='b-right' state={gameState[7]} onClick={()=> onSquareClicked(7)}/>
        <SquareComponent state={gameState[8]} onClick={()=> onSquareClicked(8)}/>
      </div>
      <button className="clear-button" onClick={()=>updateGameState(initialState)}> Clear Board</button>
      <p>Animesh</p>
    </div>
  );
}

export default App;
