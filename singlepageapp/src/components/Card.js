import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Card = ({ saltName, medname, manufacturer, toast }) => {
  const notify = () => {
    toast("hekl");
  };
  return (
    <div className="container-card col-4 col-s-6">
      <div className="card">
        <div className="row justify-content-md-center">
          <div className="col-12 col-lg-12">
            <div className="wrapper" onClick={notify}>
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
  );
};
export default Card;
