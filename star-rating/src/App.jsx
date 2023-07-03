import { useState } from "react";
import StarRating from "./StarRating";

function App() {
  const [currenRating, setCurrentRating] = useState(3)
  return (
    <div style={{ padding: "2rem" }}>
      <StarRating totalStars={5} currentRating={currenRating} setCurrentRating={setCurrentRating} />
    </div>
  );
}

export default App;
