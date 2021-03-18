import React from "react";
import Controller from "./Controller/Controller";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <div>Price: ${props.price.toFixed(2)}</div>
    {controls.map((item) => {
      return (
        <Controller
          key={item.label}
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
          remove={() => props.ingredientRemoval(item.type)}
          disabled={props.disabled[item.type]}
        ></Controller>
      );
    })}
  </div>
);

export default BuildControls;
