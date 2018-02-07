import React, { Component } from 'react';
import axios from 'axios'


class SearchForm extends Component {
    constructor(props) {
        super (props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: []
        }
    }
    handleSubmit(event){
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
    
        var url = `http://api.apixu.com/v1/current.json?key=1d3b59f204b84c2cbd9143339180502&q=${this.state.city}`
        axios.get(url)
        .then(data => {
            var structure = {
                name: data.data.location.name,
                icon: data.data.current.condition.icon,
                feelslike_c: data.data.current.feelslike_c,
                text:data.data.current.condition.text,
                comments: []
            };
            this.props.onSubmitSearchForm(structure);
            this.setState({city: ''});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }
    render() {
        return (
               <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                    <input type="text" 
                           className="form-control" 
                           id="city" 
                           placeholder="Enter City"
                           required 
                           value={this.state.city} 
                           onChange={(event) => this.setState({city: event.target.value})}>
                           </input>
                           <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                    </div>
               </form>
        );
    }
}

export default SearchForm;