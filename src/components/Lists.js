import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "./Lists.css";

export default function Lists() {

const [feedbacks, getFeedbacks] = useState([])


// API Call to display listing 

useEffect(() => {
    axios.get("https://api.imcas.com/v1/feedbacks")
      .then(response => {
        const res = response.data
        getFeedbacks(res.data)
        })
      .catch(error => {
        console.log(error)
        })
    }, [])


return (
    <div>
        <h1>List of Feedbacks</h1>
        <ul className='feedbacks-list'>
            {feedbacks.map(feedback => (
            <li key={feedback.id}>
                <Link to={`/feedback/${feedback.id}`}>{feedback.user.first_name} {feedback.user.last_name} | comment id : {feedback.id}</Link>
            </li>))}
        </ul>
    </div>
);
}
