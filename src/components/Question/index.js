import React, { Component } from 'react';
import axios from 'axios';
import QuestionItem from '../QuestionItem'

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      answers: []
    }
  }


  async componentDidMount() {
    const response = await axios('https://opentdb.com/api.php?amount=1&category=9&difficulty=medium');
    const data = response.data;
    const result = data.results[0];
    const newAnswers = this.state.answers;
    newAnswers.push(result.correct_answer);
    result.incorrect_answers.forEach(item => newAnswers.push(item));
    this.setState({
      question: result,
      answers: newAnswers
    });


    console.log(newAnswers);
  }

 
  render() {

    return (

      <div>
        <h2>Question 1</h2>
        <p dangerouslySetInnerHTML={{ __html: this.state.question.question }} />
        <ul>
          {this.state.answers.map((answer, index) =>
            <QuestionItem
              key={index}
              answer={answer}
              answers={this.state.answers}/>

          )}
        </ul>
      </div>
    )
  }
}

export default Question;
