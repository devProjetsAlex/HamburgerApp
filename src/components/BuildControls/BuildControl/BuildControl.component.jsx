import React from 'react'

import './BuildControl.styles.css'

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <div className='Less'> Less </div>
        <div className='More' onClick={props.added}>More</div>

    </div>
)

export default buildControl