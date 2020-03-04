import React from 'react'

import './Burger.component.css'

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient.component'

const Burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger