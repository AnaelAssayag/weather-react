import React, { Component } from 'react';
import CommentsListBox from './CommentsListBox'
import CommentForm from './CommentForm'



class WeatherBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  } 

  // addComment=(comment, cityIndexToUpdate)=>{
  //   this.setState(prevState => {
  //     return {cities: prevState.cities.map((city, i)=>{
  //         if (i == cityIndexToUpdate){
  //             let updatedComments = city.comments.concat(comment);
  //             let updatedCity = {...city};
  //             updatedCity.comments = updatedComments;
  //             return updatedCity;
  //         }
  //         return  city;
  //         })
  //     };
  // });
//     this.setState(prevState => ({
//       comments: prevState.concat(data)

//     }, function(){
// console.log(data)
//     })

    // }


    deleteClick=()=> {
      this.props.deletebox(this.props.id)
    }
      
    render() {
        return (
           <div>
            <span>
              <span className="glyphicon glyphicon-trash pull-right"></span>
              <div className="media-left">
                <img src={this.props.item.icon} alt={this.props.item.name} className="media-object" style={{ width: 60}}/></div>
              <div className="media-body">
                <h4 className="media-heading">{this.props.item.name}</h4>
                <p>{this.props.item.text}- {this.props.item.feelslike_c} &nbsp;| C</p>
                <button type="button" onClick={()=>{this.props.deletebox(this.props.id)}}>Delete</button>
              </div>
            </span>
            <CommentForm id={this.props.id} onTextChange={this.onTextChange} addComment={this.props.addComment} />
            <CommentsListBox comments={this.props.item.comments}/>
            <hr/>
          </div>
        )
      }
}

export default WeatherBox;
