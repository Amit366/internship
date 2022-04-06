import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ saltName, medname, manufacturer }) => {
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
                  <b>{medname}</b>
                </span>
                <p className="secondary">{saltName}</p>
                <p className="manu">{manufacturer}</p>
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
