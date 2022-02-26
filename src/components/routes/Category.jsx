import { useParams } from "react-router-dom";

function Category() {
  let params = useParams();
  return <div>Category: {params.filter}</div>;
}

export default Category;
