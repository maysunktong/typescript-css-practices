'use client'
import { useEffect, useState } from "react";

export default function Home() {
  type Drink = "julmust" | "påsmust";

  type Votes = {
    "julmust": number,
    "påsmust": number
  }

  const [votes, setVotes] = useState<Votes>({ julmust: 0, påsmust: 0 });
  const [result, setResult] = useState<string>("Let's vote!");

  const castVote = (drink: Drink) => {
    return setVotes(prev => ({
      ...prev, [drink]: prev[drink] + 1
    }))
  }

  useEffect(() => {
    if (votes.julmust === 0 && votes["påsmust"] === 0) {
      setResult("Let's vote!")
    } else if (votes.julmust > votes["påsmust"]) {

      setResult("Julmost won!");

    } else if (votes.julmust < votes["påsmust"]) {
      setResult("Påsmust won!");
    }
    else {
      setResult("Draw.")
    }
  }, [votes]);

  const resetVote = () => {
    setVotes({ julmust: 0, påsmust: 0 })
  }

  return (
    <div>
      <h1>Vote Your Favorite Must 🍾</h1>
      <div>
        <h2>Votes:</h2>
        <span>{votes.julmust}</span> :
        <span>{votes["påsmust"]}</span>
      </div>
      <h1>{result}</h1>
      <div>
        <button onClick={() => castVote("julmust")} type="button">Julmust</button>
        <button onClick={() => castVote("påsmust")} type="button" >Påsmust</button>
      </div>

      <button onClick={() => resetVote()} type="button">Restart Vote</button>
    </div>
  );
}
