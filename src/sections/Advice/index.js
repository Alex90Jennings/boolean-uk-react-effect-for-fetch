import { useEffect, useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState([]);
  const [savedAdvice, setSavedAdvice] = useState([]);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((advice) => setAdvice(advice.slip.advice));
  }, []);

  const moreAdvice = () => {
    //PROBLEM- if I click the moreAdvice button quickly it has not had a chance to fetch the new data
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((advice) => setAdvice(advice.slip.advice));
  };

  const favouriteAdvice = () => {
    if (savedAdvice === []) {
      setSavedAdvice([advice]);
    }
    setSavedAdvice([...savedAdvice, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={moreAdvice}>Get More Advice</button>
        <button onClick={favouriteAdvice}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {savedAdvice.map((item, id) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
