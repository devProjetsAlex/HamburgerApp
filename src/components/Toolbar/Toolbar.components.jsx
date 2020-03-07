import React from 'react'
import {ToolbarStyle} from  './Toolbar.styles'
import Button from '../CustomButton/Custom.Button'
import {ReactComponent as Logo} from '../../assets/image/Logo.svg'
import './Toolbar.css'
import Navigation from '../Navigation/Navigation'

const Toolbar = (props) => (
    <ToolbarStyle>
        <Button inverse>Menu</Button>
        <Logo className='Logo' />
        <div className='DesktopOnly'>
        <Navigation  /> 
        </div>
    </ToolbarStyle>
)

export default Toolbar