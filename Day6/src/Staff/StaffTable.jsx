import React from "react";

export const StaffTable = (props) => {
  return (
    <>
      <table border={1} cellSpacing={10}>
        <thead>
          <tr>
            {props.columns.map((value) => (
              <th>{value}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.dataSource.map((rowData) => (
            <tr>
              {props.columns.map((value) => (
                <td>{rowData[value]}</td>
              ))}
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
