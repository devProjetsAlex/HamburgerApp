import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger.component'



class BurgerBuilder extends Component{
    render() {
        return (
            <>
                <div>
                   <Burger/>
                </div>

                <div>
                    Build Controls
                </div>
            </>
        )
    }
}

export default BurgerBuilder