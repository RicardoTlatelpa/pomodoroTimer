import React from 'react';
import './styles/Pomodoro.css'
import {single} from './helpers/singleDigit';
class Pomodoro extends React.Component {
    constructor(props) {
     super(props)
     this.state = {
            seconds: 0,
            minutes: 0,
            click: false,
            reset: false
         }
     this.handleClick = this.handleClick.bind(this) 
     this.handlePomodoro = this.handlePomodoro.bind(this);
     this.handleReset = this.handleReset.bind(this);
    }
    
    handlePomodoro(){
        
        let pomo = setInterval(() => {
            if(this.state.minutes === '00' && this.state.seconds === '00'){
                return clearInterval(pomo)
           }
            if(this.state.seconds === '00'){
                this.setState(state =>({
                    minutes: this.state.minutes-1,
                    seconds: 60
                }))
            }
            this.setState(state =>({
                seconds: this.state.seconds - 1 
            }))
        },1000)       
        let reset = () =>{
            clearInterval(pomo)
        }
        if(this.state.reset){
            reset()
        }
    }
    
    handleClick(){    
      this.setState({
        click: true,
        minutes: single(25),
        seconds: single(0)
      })
      this.handlePomodoro()
    }
    handleStop(){
        this.setState({
        minutes: 0,
        seconds: 0,
        click: false,
        reset: true
      })
    }
    handleReset(){
        this.setState({
            minutes: single(25),
            seconds: single(0),
            reset: true
        })
        
        
    }
     
    render() {
        let pomo = (
      <div className = "pomo-timer">
      <h2>{this.state.minutes}:{this.state.seconds}</h2>
      <button onClick = {this.handleReset}>Reset</button>
      <button onClick = {() => this.handleStop()}>Stop</button>
      </div>)
      
      return (
        <div>
         <h1 className = "pomo-title">Pomodoro</h1>
  
         {this.state.click ? pomo : <button className = 'tomatoBtn' onClick = {this.handleClick}>
        </button>  }
        </div>
      )
    }
  }
  
  export default Pomodoro;