import React from 'react'

import Button from '../CustomButton/Custom.Button'


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return( 
        <li>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]
    }</li>)
    })
    return(
        <>
            <h3> Your Order </h3>
            <p> A delicious burger with the following ingredients:</p>

            <p><strong> Your total price is : {props.price.toFixed(2)}</strong></p>
            <ul>
                    {ingredientsSummary}
            </ul>
            <p> Continue to chekout </p>
            <Button onClick={props.order} > Continue </Button>
            <Button onClick={props.modalClosed} danger> Delete</Button>
            
        </>
    )

}
export default orderSummary