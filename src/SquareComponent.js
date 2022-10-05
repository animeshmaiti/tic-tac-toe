import React from "react";
import MISC1 from '../src/assets/click.mp3'


let turn = new Audio(MISC1);


function SquareComponent(props) {
    const classes = props.className?`${props.className} square`:'square';
  return (
    <span className={classes} onClick={props.onClick}>
        {props.state}
    </span>
  );
}

export default SquareComponent;
