import "./App.css";
import { BadList } from "./components/BadList";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { TotalHours } from "./components/TotalHours";
import React, { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState([]);
  const addNewTask = (task)=>{
    setTaskList([...taskList, task]);
  };


  return (
    <div class="wrapper">
			<div class="container">
				{/* <!-- top title --> */}
        
          <Title />

				{/* <!-- form area --> */}
<Form addNewTask={addNewTask} />
				{/* <!-- list area --> */}

				<div class="row">
				<TaskList taskList={taskList}/>
        {/* BadList */}
				<BadList />
				</div>  
{/* TotalHours */}
				<TotalHours />
			</div>
		</div>

  );
}

export default App;
