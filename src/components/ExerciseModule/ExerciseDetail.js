import { useParams } from "react-router-dom";

function ExerciseDetail() {
  const { id } = useParams();

  // Fetch exercise details based on the id from your data source or API

  return (
    <div className="bg-black h-full">
      {/* Display exercise details */}
      <h1>Exercise Detail Page for ID: {id}</h1>
      {/* ... rest of your code ... */}
    </div>
  );
}

export default ExerciseDetail;
