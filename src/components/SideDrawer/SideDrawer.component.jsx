import React from 'react'
import Navigation from '../Navigation/Navigation'
import {SideDrawerStyle} from './SideDrawer.styles'
import {ReactComponent as Logo} from '../../assets/image/Logo.svg'
import './SideDrawer.css'


const SideDrawer = (props) => {

    return (
        <>
               
        <SideDrawerStyle>
            <Logo className='LogoSideDrawer' show={props.open} cliked={props.closed} />
            <Navigation/>
        </SideDrawerStyle>
        </>
    )
}

export default SideDrawer