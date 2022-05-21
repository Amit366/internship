import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ data }) => {
  console.log(data);

  const key = Object.keys(data);
  const value = Object.values(data);
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
  }
  const notify = () => {
    toast.options = {
      preventDuplicates: true,
      preventOpenDuplicates: true,
    };
    toast.success("List item clicked.");
  };
  return (
    <>
      <div className="container-card col-4 col-s-6">
        <div className="card" onClick={notify}>
          <div className="row justify-content-md-center">
            <div className="col-12 col-lg-12">
              <div className="wrapper">
                <span className="med">
                  {key.map((key) => (
                    <p> {key} </p>
                  ))}
                  {value.map((value) => (
                    <p> {value} </p>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};
export default Card;
