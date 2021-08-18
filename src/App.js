import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  
  constructor(props) {
    super(props);
  
    this.state = { 
      number: 1,
      person : {
      FullName: "Riadh BEN OTHMANE",
      Profession: "job seeker",
      Bio : 'Passionated by Web development',
      Show: true
    }}
 };

// to toggle the boolean state 

 toggleButton =()=> {
  this.setState ({
    number: 1,
    person : { Show : ! this.state.person.Show,
    FullName: "Riadh BEN OTHMANE",
      Profession: "job seeker",
      Bio : 'Passionated by Web development',
  } })
 };


//  To set the counter


 componentDidMount() {
  this.interval = setInterval(() => {
    console.log(this.state.number, this.props.counter)
    if (this.props.counter === 'double') {
      this.setState({number: this.state.number + this.state.number});        
    } else {
      this.setState({number: this.state.number + 1});
    }
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}


// to set the HTML
 buttonToggled =() => {
   return ( <div className='btnToggled'>
     {this.state.person.Show ? <p></p> : <div>
      <p>{this.state.number} seconds since the componentDidMount</p>
      <div className="card" style={{width: '18rem'}}>
  <img src="riadh.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{this.state.person.FullName}</h3>
    <h5 className="card-title">{this.state.person.Profession}</h5>
    <p className="card-text">{this.state.person.Bio}</p>   
  </div>
</div>
     </div>}
   </div>)};


 
  render() {

    return(
     <div className="AppIn">
       <button  onClick = {(e) =>  { this.toggleButton() ;
      }} type="button" class="btn btn-primary">View The profile </button>
       {this.buttonToggled()}
      </div>  
);
  }
 
}
export default App;