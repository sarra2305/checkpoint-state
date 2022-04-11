import React, {Component} from 'react'

export class counter extends Component {
    

constructor(){
   console.log('constructor()')
  super();
  this.state={
   counter:0,
   timer : 0,
   intervall : null
  }
}

componentDidMount(){
  console.log("componentDidMount()")
  this.setState({
    intervall: setInterval(
        ()=>this.setState({timer: this.state.timer + 1}),
        1000 
     )
  });
}

componentDidUpadate(){
    console.log('il ya un update')
    console.log(this.state.counter)
}



increment =()=>{
    this.setState({
        counter : this.state.counter + 1
    });
}


decrement = ()=>{
    if( this.state.counter > 0 ){
        
        this.setState({
        counter : this.state.counter -1
    })}
}

reset=()=>{
    this.setState({
        counter : 0
    })
}


   render() {
        return (
            <div>
                <h3>counter state class component</h3>
                <p> {this.state.counter}</p>
                <button className='btnc' onClick={this.increment}>plus</button>
                <button className='btnc' onClick={this.decrement}>moins</button>
                <button className='btnc' onClick={this.reset}>reset</button>

                <hr/>
                <p>{this.state.timer}</p>
                <p className='timer'>timer</p>

            </div>
        )
    }

   }
 







export default counter