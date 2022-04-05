function Todo(probs){
    return (  // To write multi line html 
     
      <div className="card">
        <h3> {probs.title} </h3> 
        <label>
           <span> Task Date : </span> {probs.taskDate}
        </label>
        <p> User Logged In : {probs.userState}</p>
        <br/>
        {probs.userState ?  <button className="btn btn-primary" onClick={()=>probs.login(true)}> Log In  </button> : ""}

       
        </div> 
    );
}

export default Todo;