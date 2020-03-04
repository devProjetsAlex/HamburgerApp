import React from 'react'

import './Layout.styles.css'

const layout = (props) => {
    return (
    <>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>

        <main className='Content'>
            {props.children}
        </main>
    </>)
}

export default layout