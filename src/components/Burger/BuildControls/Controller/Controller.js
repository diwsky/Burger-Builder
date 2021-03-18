import React from "react";

import classes from "./Controller.module.css";

const Controller = (props) => {
  return (
    <div className={classes.Controller}>
      {console.log("Props: ", props.label)}
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default Controller;
