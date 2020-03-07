import React, {Component} from 'react'

import './Layout.styles.css'
import Toolbar from '../Toolbar/Toolbar.components'
import SideDrawer from '../SideDrawer/SideDrawer.component'

class Layout extends Component  {
   state={
       showSideDrawer:false
   }
   
   
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:true})
    }



    render() {
    return (
    <>
        <Toolbar />
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className='Content'>
            {this.props.children}
        </main>
    </>)
    }
}

export default Layout