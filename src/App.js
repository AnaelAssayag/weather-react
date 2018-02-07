import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox';


class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = {
      boxes: []
    }
  } 

  onSubmitSearchForm(data) {
    this.setState(prevState => ({
      boxes: prevState
        .boxes 
        .concat(data)
    }));
  };
  deletebox=(id)=>{
      console.log(id)
      var array = this.state.boxes;
      array.splice(id, 1);
      this.setState({boxes: array})

    }
  addComment=(cityIndexToUpdate, comment)=>{
    console.log(comment)
       this.setState(prevState => {
           return {boxes: prevState.boxes.map((city, i)=>{
               if (i == cityIndexToUpdate){
                   let updatedComments = city.comments.concat(comment);
                   let updatedCity = {...city};
                   updatedCity.comments = updatedComments;
                   return updatedCity;
               }
               return  city;
               })
           };
       },()=> {
         console.log(this.state)
       });
  }

  

  render() {
    return (
      <div className="App">
      {/* component form */}
      <div>
      <h1>Weather Chat</h1>
      <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
      </div>
      <div>
      <WeatherListBox boxes={this.state.boxes} deletebox={this.deletebox} addComment={this.addComment}/>      
    </div>
    <div>
      </div>
      </div>
    );
  }
}

export default App;
