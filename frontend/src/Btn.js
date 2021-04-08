import React from 'react'

function Btn(props){
    return(
        <input className='calc_btn' type='button' value={props.caption} onClick={props.clicked}/>
    );
}

export default Btn;