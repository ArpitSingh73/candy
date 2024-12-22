import "../index.css"
// import { MdScore } from "react-icons/md";
const ScoreBoard = ({ score }) => {


  return (
    <div className="score-board">
      {/* <MdScore /> */}
      <h2>My Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
