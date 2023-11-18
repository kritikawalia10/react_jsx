import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const ResArr = this.imageData();
    return(
      <>
        <div><h1>Kalvium Gallary</h1></div>
        <div className="imagess">
            {ResArr.map((item)=>{
            return <img key ={item.id} src = {item.img}/>
            })}
        </div>
      </>
    )
  }
}