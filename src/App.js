import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upperbody from './upperbody';
import Lowerbody from './lowerbody';


class App extends Component {
  constructor(props){
    super(props)
this.state={
    news: ""
}
 }
componentDidMount(){
  fetch('https://newsapi.org/v2/sources?apiKey=05aaab986f2d4b57bb2f115eed00f227')
  .then(res=>res.json()).then(data=>{
    console.log(data)
    this.setState({
      news : data
    })
    console.log(this.state.news.sources[1].id)
    {this.state.news.sources.map(source=>console.log(source.id))}
    
  })
}

  render() {

    return (
      <div >
        <ul>
        {this.state.news.sources.map(source=>
         <li> {source.id}</li>
          )}

        </ul>
      

      </div>
    );
  }
}

export default App;
