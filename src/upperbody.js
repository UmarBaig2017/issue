import React, { Component } from 'react'

export default class Upperbody extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        


        <h1>upperbody </h1>
        <p>{this.props.name} </p>
        <p>{this.props.age} </p>
      {this.props.user.name}
      <div>
      <h1>Hobbies </h1>
      <ul>
      {this.props.user.hobbies.map((hobby)=>
          <li> {hobby} </li>
      )}
       </ul>
        
        </div>
        <div>
        <ul>  
         </ul>
        </div>
      </div>
    )
  }
}
