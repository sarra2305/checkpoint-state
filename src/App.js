import './App.css';
import React, {Component } from 'react';
import Counter from './Counter'




export class App extends Component {


  

  constructor() {
    super()
    this.state = {
      name:'Frida Kahlo' , 
      bio:'Frida Kahlo was a Mexican painter best known for her uncompromising and brilliantly colored self-portraits that deal with such themes as identity, the human body, and death. ' , 
      imgSrc:'./Frida-Kahlo.jpeg' , 
      profession:'Painter', 
      toggleState:true ,
      date: new Date(),
     }}

     
     
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  

  render() {
    return (
      
      <div className='style'>
        <p className='art'>Hi</p>
          <button className='btnh' onClick={()=>{this.setState({toggleState:!this.state.toggleState})}} >show/hide</button>
          

        {
          this.state.toggleState?( 
            <>
              <h1 className='name'>{this.state.name}</h1>
              <h2 className='prof'>{this.state.profession}</h2>
              <h3 className='bio'>{this.state.bio}</h3>
              <h4 className='time'>It's {this.state.date.toLocaleTimeString()}.</h4>
              <img className='frida' src= {this.state.imgSrc} alt='Frida-Kahlo'/>
               <Counter/>
               
            </>
            
          ):
          <hr/>
        }
       
      </div>
    )
    
    
  }
}


  
 

export default App