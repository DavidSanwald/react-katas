import React, { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  const [counters, setCounters] = useState([]);
  return (
    <div className="App">
      <button
        onClick={(e) =>
          setCounters((prevCounters) => [...prevCounters, Date.now()])
        }
      >
        add counter
      </button>
      <div>
        counters:
        <div>
          {counters.map((id) => (
            <div key={id}>
              <Counter key={id} />
              <button
                onClick={() =>
                  setCounters((prevCounters) =>
                    prevCounters.filter((counter) => counter !== id)
                  )
                }
              >
                remove counter
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
