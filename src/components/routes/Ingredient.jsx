import { useParams } from "react-router-dom";

function Ingredient() {
  let params = useParams();
  return <div>Ingredient: {params.filter}</div>;
}

export default Ingredient;
