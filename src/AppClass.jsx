import { Component } from "react";
import "./App.css";

export default class AppClass extends Component{
  constructor(props){
    super();
    this.props;
  }

  render() {
    const imgData = this.props.myData();
    return (
      <div>
         <h1 className="name">Kalvium Gallery</h1>
  <div className='photo'>
    {imgData.map((item)=> {
      return (
          <img key={item.id} src={item.img} alt="elephant" />
      )
    })}
  </div>
        
      </div>
    )
  }
}