//import React, {useState}  from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
// import {StudentContext} from '../App';
 import axios from "axios";
import {useFormik} from 'formik';
import * as yup from 'yup';

function StudentForm(){

  //let context = useContext(StudentContext);
  let navigate = useNavigate();

// let [name,setName] = useState("");
// let [degree,setDegree] = useState("");
// let [dept,setDept] = useState("");
// let [email,setEmail] = useState("");
// let [mobile,setMobile] = useState("");




const formik = useFormik({
  initialValues:{
      name:'',
      email:'',
      mobile:'',
      degree:'',
      dept:''
  },
  validationSchema: yup.object({
      name:yup.string().required('Required'),
      email:yup.string().email('Invalid email address').required('Required'),
      mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
      degree:yup.string(),
      dept:yup.string()
  }),
  onSubmit:values=>{
    saveHandler(values)
  }
});

// let saveHandler = ()=>{
 
//  // console.log('test');
//     context.students.push({name,degree,dept,mobile,email});    // navigate('/all-students');
//     context.setStudents([...context.students]);
//     console.log(context.students);
// };

// let saveHandler = async(values)=>{       
//   await fetch('https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail',{
//       method:'POST',
//       headers:{
//           'Content-Type':'application/json'
//       },
//       body : JSON.stringify(values)
//       // body:JSON.stringify({
//       //     name,
//       //     email,
//       //     mobile,
//       //     degree,
//       //     dept
//       // })
//   })
//   .then(response =>
//     {
//       response.json()
//     }
    
//    )
//   .then(data=>{
//     //console.log(data);
//     navigate('/all-students');
  
//   })
//   .catch((error)=>{
//       console.log(error)
//   })
  
// }


// let saveHandler = async()=>{


//     debugger
//     console.log({name,
//       email,
//       mobile,
//       degree,
//       dept});

//       try {
//       let res = await axios.post('https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail',{name, email, mobile,degree,dept})
//       console.log(res)
//       navigate('/all-students')
//       } catch (error) {
//         console.log(error) 
//       }
// }


let saveHandler = async(data)=>{
  try {
   let res = await axios.post('https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail',data)
   .then(response =>
       {
        console.log(response)
        navigate('/all-students');
       })
    //  .then(data=>{
    //    //console.log(data);
    //    navigate('/all-students');
     
    //  })
     .catch((error)=>{
         console.log(error)
     });
   console.log(res)
   navigate('/all-students')
  } catch (error) {
     console.log(error) 
  }
}


    return (
      <div>
        <h3>Student Form</h3>
        <form onSubmit={formik.handleSubmit}>

        <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            {/* <input
              type="text" id="txtStudentName" onChange={(e) => setName(e.target.value)}
              className="form-control"              
              placeholder="Enter name"
            /> */}
             <input 
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>):null}
           
          </div>

          <div className="form-group">
            <label htmlFor="Degree">Degree</label>
            {/* <input
              type="text" id="txtDegree" onChange={(e) => setDegree(e.target.value)}
              className="form-control"              
              placeholder="Enter Degree"
            /> */}
             <input 
                id="degree"
                name="degree"
                type="text"
                className="form-control"
                placeholder="Degree"
                onChange={formik.handleChange}
                value={formik.values.degree}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Department">Department</label>
            {/* <input
              type="text" id="txtDepartment" onChange={(e) => setDept(e.target.value)}
              className="form-control"               
              placeholder="Enter Department"
            />
            */}

<input 
                id="dept"
                name="dept"
                type="text"
                className="form-control"
                placeholder="Dept"
                onChange={formik.handleChange}
                value={formik.values.dept}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Mobile">Mobile</label>
            {/* <input
              type="text" id="txtMobile" onChange={(e) => setMobile(e.target.value)}
              className="form-control"              
              placeholder="Enter Mobile"
            /> */}
            <input 
                id="mobile"
                name="mobile"
                type="text"
                className="form-control"
                placeholder="Mobile"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?(<div style={{color:"red"}}>{formik.errors.mobile}</div>):null}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            {/* <input
              type="email" id="txtEmail" onChange={(e) => setEmail(e.target.value)}
              className="form-control"              
              aria-describedby="emailHelp"
              placeholder="Enter email"              
            /> */}

<input 
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          {/* <button className="btn btn-primary" onClick={saveHandler}>
            Submit
          </button> */}
        </form>
      </div>
    );

}

export default StudentForm;