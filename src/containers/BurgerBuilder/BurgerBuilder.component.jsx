import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger.component'
import BuildControls from '../../components/BuildControls/BuildControls.component'

const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7,
    jalapenos:0.666,
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            jalapenos:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4 
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
    }
    
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0) {
            return;
        }
        const updatedCount = oldCount -1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
    }

    
    render() {
        return (
            <>
                <div>
                   <Burger ingredients={this.state.ingredients}/>
                </div>

                <div>
                    <BuildControls
                    ingredientsAdded={this.addIngredientsHandler} ingredientsRemoved={this.removeIngredientsHandler}/>
                  
                </div>
            </>
        )
    }
}

export default BurgerBuilder