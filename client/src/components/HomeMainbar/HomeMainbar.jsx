import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionsList from "./QuestionsList";
import { useSelector } from "react-redux";


const HomeMainbar = () => {
  const location = useLocation();
  const user =useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();
const questionsList = useSelector(state=>state.questionsReducer)
// console.log(questionsList)

  // var questionsList = [
  //   {
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "R", "node js", "react js", "mongodb"],
  //     userPosted: "Malika",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:'Answer',
  //       userAnswered: "Anu",
  //       answeredOn:'jan 2',
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "R", "node js", "react js", "mongodb"],
  //     userPosted: "Malika",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:'Answer',
  //       userAnswered: "Anu",
  //       answeredOn:'jan 2',
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "R", "node js", "react js", "mongodb"],
  //     userPosted: "Malika",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:'Answer',
  //       userAnswered: "Anu",
  //       answeredOn:'jan 2',
  //       userId:2,
  //     }]
  //   },
  // ];

  const checkAuth = () => {
    if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
    }else{
        navigate('/AskQuestion')
    }
}
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length}Questions</p>
            <QuestionsList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
