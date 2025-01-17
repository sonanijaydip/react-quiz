function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;
    return (
        <div>
            <div className="options">
                {question.options.map((option, index) =>
                    <button key={option} disabled={hasAnswered} className={`btn btn-option 
                    ${index === answer ? "answer" : ""} 
                    ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`}
                        onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                    >{option}</button>)}
            </div>
        </div>
    )
}
export default Options