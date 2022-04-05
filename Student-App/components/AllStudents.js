import React, { useState, useEffect } from "react";
// import {StudentContext} from '../App';
import { useNavigate } from "react-router-dom";
import axios from "axios";
    

function AllStudents() {
  let navigate = useNavigate();
  let [students, setStudents] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  // let getData = async () => {
  //   await fetch("https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setStudents(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let getData = async () => {
    await axios
    .get(
      `https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail`
    )
    .then((response) => {

      console.log(response.data);
      setStudents(response.data);
      // if (response.request.status === 200) {
      //     this.setState({
      //       weatherData: response.data.main.temp,
      //       weatherDescription: response.data.weather[0].description,
      //       weatherTextDisplay: this.state.airConditionsText.filter((item)=>{
      //         return item["id"] === response.data.weather[0].id
      //       })
      //     });
      // }else{throw Error('No internet')}
    })
  };

  // async function getData() {
  //   await fetch("https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail")
  //     .then(response => response.json())
  //     .then(res => setStudents(res))
  //     .catch(err=>{
  //       console.log(err)
  //     });
  // }

  //to delete the data
  // let handleDelete = async (id) => {
  //   await fetch(
  //     "https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail/" + id,
  //     {
  //       method: "DELETE",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       getData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };



  let handleDelete = async (id) => {
    // await fetch(
    //   "https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail/" + id,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     getData();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

      await axios
      .delete(
        "https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail/" + id,
      )
      .then((response) => {  
        console.log(response.data);
        getData();        
      })

  };


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Degree</th>
          <th scope="col">Department</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((element, i) => {
          return (
            <tr key={i}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.degree}</td>
              <td>{element.dept}</td>             
              <td>{element.mobile}</td>
              <td>{element.email}</td>
              <td>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/edit-student/" + element.id);
                  }}
                >
                  Edit
                </button>{" "}
                &nbsp; &nbsp;&nbsp;{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AllStudents;
