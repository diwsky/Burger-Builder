import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((tes, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, idx) => {
        // console.log(arr, idx)
        return arr.concat(idx)
    }, [])

    console.log(transformedIngredients)

    if (transformedIngredients.length === 0) {
        transformedIngredients = 'Please start input ingredients!'
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={`bread-top`} />
            {transformedIngredients}
            <BurgerIngredient type={`bread-bottom`} />
        </div>
    )
}

export default burger;