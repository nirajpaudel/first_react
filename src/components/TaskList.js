import { useState } from 'react';
import { BoxCard } from './BoxCard';
import { TaskCard } from './TaskCard';

export const TaskList = () => {
  const [tasks, setTasks] = useState([{ id: 1, name: 'Learn React', completed: false }, { id: 2, name: 'Learn OracleSQL', completed: true }, { id: 3, name: 'Learn HTML, CSS and Java', completed: true }]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
    return (
        <>
        <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        { show && tasks.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, esse?</p>
      </BoxCard>
      <BoxCard result="warning">
      <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, esse?</p>
      </BoxCard>
          <BoxCard result="alert">
          <p className="title">Lorem, ipsum.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, esse?</p>
          </BoxCard>
        </>
    )
}

