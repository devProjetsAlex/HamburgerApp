import React from 'react'
import Button from '../../CustomButton/Custom.Button'

import classes from './BuildControlStyles.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <Button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}
            inverse>Less</Button>
        <Button 
            className={classes.More} 
            onClick={props.added}
            inverse>More</Button>
    </div>
);

export default buildControl;