import React from 'react'

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
            <ul>
                    {ingredientsSummary}
            </ul>
            <p> Continue to chekout </p>
        </>
    )

}
export default orderSummary