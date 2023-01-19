import React from "react";
import Button from "./Button";

function GuessControl (props) {

  const [currentGuess, setCurrentGuess] = React.useState('');

  function handleInputChange (event) {
    const newCurrentGuess = event.target.value;
    setCurrentGuess(newCurrentGuess);
  };

  function onSubmitGuess() {
    props.onGuess(Number(currentGuess));
    setCurrentGuess('');
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess} 
        onChange={handleInputChange} 
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
