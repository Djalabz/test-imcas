import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Feedback.css";



export default function Feedback({ match }) {

const [feedback, getFeedback] = useState({ 
    translations : [{}],
    user : {
        country: {
            translations: [{}]
        },
        specialty : {
            translations: [{}]
        }
    }
});

// Call to the API with the use of match in order to get the id

useEffect(() => {
    axios.get(`https://api.imcas.com/v1/feedbacks/${match.params.id}`)
      .then(response => {
        const res = response.data
        getFeedback({...res})
        })
      .catch(error => {
        console.log(error)
        }) 
    }, [match.params.id])      


return (
    <div>
        <div className='feedback-container'>
            <img src={feedback.user.picture_url} alt={feedback.user.fullname}/>
            <div className="feedback-content">
                <div className="title">{feedback.user.fullname} 
                <span className="position"> - {feedback.user.specialty.translations[0].name}, {feedback.user.country.translations[0].name}</span></div>
                <div className="quote">"{feedback.translations[0].content}"</div>
            </div>
        </div>
        <Link to={'/'}><div className="back">Retour</div></Link>
    </div>
);
}
