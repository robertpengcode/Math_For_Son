import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({question}) => {
    return (
        <div className='questionCard'>
            <span className='element questionId'>Q{question.id}</span>
            <div className='questionBox'>
                <span className='element firstNum'>{question.firstNum}</span>
                <span className='element operator_secondNum'>{question.operator +'  '+ question.secondNum}</span>
            </div> 
        </div>
    )
}
//<span className='element answer'>{question.answer}</span>
export default QuestionCard;