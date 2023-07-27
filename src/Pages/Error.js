import { useRouteError } from "react-router-dom";

const Error = () => {

  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Ooopppsssssssssssssssssssssssss.......</h1>
      <h3>Something Went Wrong</h3>
      <h3>{error.status}:{error.statusText}</h3>
    </div>
  )
}
export default Error;
