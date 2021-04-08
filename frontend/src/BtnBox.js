import React from "react";
import Btn from "./Btn";
import CalcDis from './CalcDis';

function BtnBox(props) {
  const buttons_map = [
    {text:("c"), handler: ()=> props.clear()},
    {text:("+"), handler: ()=> props.operation("+")},
    {text:("7"), handler: ()=> props.number("7")},
    {text:("8"), handler: ()=> props.number("8")},
    {text:("9"), handler: ()=> props.number("9")},
    {text:("x"), handler: ()=> props.operation("x")},
    {text:("4"), handler: ()=> props.number("4")},
    {text:("5"), handler: ()=> props.number("5")},
    {text:("6"), handler: ()=> props.number("6")},
    {text:("/"), handler: ()=> props.operation("/")},
    {text:("1"), handler: ()=> props.number("1")},
    {text:("2"), handler: ()=> props.number("2")},
    {text:("3"), handler: ()=> props.number("3")},
    {text:("-"), handler: ()=> props.operation("-")},
    {text:("0"), handler: ()=> props.number("0")},
    {text:("."), handler: ()=> props.dot()},
    {text:("="), handler: ()=> props.equal()},
  ];
  const buttons = buttons_map.map((value, index) => {
    return <Btn caption={value.text} clicked={value.handler}/>;
  });

  return <div className='calc_group'>
    <CalcDis text={props.result}/>
    {buttons}</div>;
}

export default BtnBox;
