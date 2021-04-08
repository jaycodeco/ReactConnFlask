import React from 'react'

function CalcDis(props){
    return(
        <input className='calc_screen' value={props.text} readOnly={true}/>
    );
}

export default CalcDis;