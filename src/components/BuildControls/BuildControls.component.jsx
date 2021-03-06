import React from 'react'
import BuildControl from './BuildControl/BuildControl.component'

import './BuildControls.styles.css'

import Button from '../CustomButton/Custom.Button'

const controls = [
    {label:'Salad', type: 'salad' },
    {label:'Bacon', type: 'bacon' },
    {label:'Cheese', type: 'cheese' },
    {label:'Jalapenos', type: 'jalapenos' },
    {label:'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientsAdded(ctrl.type)}
            removed={()=>props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <Button       
        disabled={!props.purchasable}
        onClick={props.ordered}
        > Order Now </Button>

    </div>
)

export default buildControls