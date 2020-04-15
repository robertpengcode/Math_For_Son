import React from 'react';
import QuestionCard from './QuestionCard';
import './Questions.css';

const Questions = ({questions}) => {
    
    return (
        <div>
            <ul className='questionsList'>
                {
                questions.map(question => <QuestionCard
                key={question.id} question={question}/>)
                }
            </ul>
            <ul className='answerList'><span>Answers: </span>
                {
                questions.map(question => <li className='answers' key={question.id} >
                    {`Q${question.id}: ${question.answer}`}</li>)
                }
            </ul>
        </div>
        
    )
}

export default Questions;