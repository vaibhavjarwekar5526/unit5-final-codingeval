import React, { useState } from 'react';
import styled from 'styled-components';


  const Table = styled.table`
    margin: auto;
    margin-top: 10px;
    
    th, td{
      border: 1px solid black;
    }
  `

  const ListAllUsers = () => {
    const [data, setData] = useState([]);

    React.useEffect(() => {
      getFormData();
    },[]);

    const getFormData = () => {
        
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`)
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
        .catch((err) => console.log(err))
    };
  return (
    <Table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>isMarried</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.address}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
            <td>{employee.isMarried}</td>
          </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export { ListAllUsers };