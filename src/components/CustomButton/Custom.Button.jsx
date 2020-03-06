import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

import styled from 'styled-components'


export const StyledButton = styled.button`

    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

   

.OrderButton:hover, .OrderButton:active {
    background-color: #A0DB41;
    border: 1px solid #966909;
    color: #966909;
}

.OrderButton:disabled {
    background-color: #C7C6C6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
}

.OrderButton:not(:disabled) {
    animation: enable 0.3s linear;
}
`


const Button = props => {
    if (props.href) {
        return (
            <a 
            className={`button button--
            ${props.size || 'default'} 
            ${props.inverse && 'button--inverse'} 
            ${props.danger && 'button--danger'} 
            `} 
            href={props.href}
            > 
            {props.children}
        </a>
        )
    }
    if (props.to) {
        return (
            <Link
             to={props.to}
             exact={props.exact}
             className={`button button--
             ${props.size || 'default'} 
             ${props.inverse && 'button--inverse'} 
             ${props.danger && 'button--danger'} 
             `} 
             >
            {props.children}
            </Link>
                )
    }
    return (
        <button
        className={`button button--
        ${props.size || 'default'} 
        ${props.inverse && 'button--inverse'} 
        ${props.danger && 'button--danger'} 
        `} 
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button