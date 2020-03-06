import React from 'react'

import './Layout.styles.css'
import Toolbar from '../Toolbar/Toolbar.components'
import SideDrawer from '../SideDrawer/SideDrawer.component'

const layout = (props) => {
    return (
    <>

        <Toolbar />
        <SideDrawer/>
        <main className='Content'>
            {props.children}
        </main>
    </>)
}

export default layout