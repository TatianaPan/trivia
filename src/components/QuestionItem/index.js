import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class QuestionItem extends Component {

    handleChoice = () => {
        let answers = this.props.answers;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === this.props.answer) {
                console.log('correct!')
                return true;
            } else {
                console.log('incorrect..')
                return false;
            }
        }
        console.log('answer clicked!')
      }

   
    render() {
        return (
            <div>
                <li  onClick={ this.handleChoice } dangerouslySetInnerHTML={ { __html: this.props.answer } }></li>
            </div>
        )
    }
}

export default withRouter(QuestionItem);
