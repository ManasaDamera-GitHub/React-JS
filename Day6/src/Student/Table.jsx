export const StudentTable = (props) => {
  console.log(props.columns);
  console.log(props.dataSource);

  return (
    <>
      <table border={1} cellSpacing={10}>
        <thead>
          <tr>
            {props.columns.map((value, index) => (
              <th>{value}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {props.dataSource.map((rowData, index) => (
            <tr>
              {props.columns.map((value, index) => (
                <td>{rowData[value] ? rowData[value]:"Not available"}</td>
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
