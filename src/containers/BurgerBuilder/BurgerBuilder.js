import React, { useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [ingredient, setIngredient] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [price, setPrice] = useState(0);

  const removeIngredientHandler = (type) => {
    const oldCount = ingredient[type];
    const updatedCounted = oldCount > 0 ? oldCount - 1 : 0;
    const updatedIngredient = {
      ...ingredient,
    };
    updatedIngredient[type] = updatedCounted;
    setIngredient(updatedIngredient);

    const priceDedyuction = INGREDIENT_PRICES[type];
    const oldPrice = price;
    const updatedPrice = oldPrice > 0 ? oldPrice - priceDedyuction : 0;
    setPrice(updatedPrice);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredient[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredient = {
      ...ingredient,
    };
    updatedIngredient[type] = updatedCounted;
    setIngredient(updatedIngredient);

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = price;
    const updatedPrice = oldPrice + priceAddition;
    setPrice(updatedPrice);
  };

  const disabledInfo = {
    ...ingredient,
  };

  for (let item in disabledInfo) {
    disabledInfo[item] = disabledInfo[item] <= 0;
  }

  return (
    <Aux>
      <Burger ingredients={ingredient}></Burger>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoval={removeIngredientHandler}
        disabled={disabledInfo}
        price={price}
      />
    </Aux>
  );
};

export default BurgerBuilder;
