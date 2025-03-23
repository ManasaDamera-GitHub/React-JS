import {StudentData} from "./data/studentData";
const Cards = () => {
  return (
    <div className="cards-container">
      {StudentData.map((student, index) => {
        return (
          <>
            <div className="card" key={index}>
              <div className="card-heading">
                {`${student.name}-10000 coders`}
              </div>
              <div className="card-body">
                <h3>Age: {student.age}</h3>
                <p>
                  <i>email:{student.email}</i>
                </p>
                <p>
                  <i>mobile.no:{student.phone_no}</i>
                </p>
              </div>
              <div className="card-footer">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export {Cards}