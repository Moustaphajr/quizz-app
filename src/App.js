import "./App.css";
import { useState } from "react";

function App() {
  const [newquestion, setNewQuestion] = useState(0);
  const [nbgoodanswer, setNbgoodanswer] = useState(0);
  const question = [
    {
      question: "Quelle est la capitale du Sénégal ?",
      answer: ["Conakry", "Dakar", "Abidjan"],
      correctanswer: "Dakar",
    },

    {
      question: "Quelle est la capitale du Mali ?",
      answer: ["Nairobi", "Bamako", "Saint-Louis"],
      correctanswer: "Bamako",
    },

    {
      question: "Quelle est la capitale du Niger ?",
      answer: ["Yamoussoukro", "Niamey", "Dakar"],
      correctanswer: "Niamey",
    },
  ];

  function ChooseAnswer(event) {
    if (question[newquestion].correctanswer === event.target.id) {
      event.target.style.backgroundColor = "green";
      setNbgoodanswer((prev) => prev + 1);
    } else {
      event.target.style.backgroundColor = "red";
    }
  }

  function DisplayQuestion() {
    setNewQuestion((prev) => prev + 1);
  }

  return (
    <div className="flex justify-center mt-4">
      <div className="mt-3 w-[650px] border-2 border-gray-600 rounded-md h-[350px] ">
        <h1 className="text-center mt-3">Quizz App</h1>
        <div className="mt-10 ml-6">
          <h1>{question[newquestion]?.question}</h1>
        </div>
        {question[newquestion]?.question && (
          <div className="mt-3 ml-6">
            <ul className="">
              {question[newquestion]?.answer.map((answer) => (
                <li
                  className="w-[500px] mt-3  border-2 border-gray-200 rounded-xl p-2 cursor-pointer"
                  id={answer}
                  onClick={ChooseAnswer}
                  key={answer}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        )}
        {question[newquestion]?.question ? (
          <div className="flex justify-end mt-3 ">
            <button
              className=" mr-3  mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={DisplayQuestion}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="mt-3  flex justify-center items-center">
            Merci pour votre participation , votre score est de {nbgoodanswer}/
            {question.length}
            {nbgoodanswer >= 2 ? (
              <label className="swap swap-active text-6xl">
                <div className="swap-on">🥳</div>
              </label>
            ) : (
              <label className="swap swap-active text-6xl">
                <div className="swap-off">😭</div>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
