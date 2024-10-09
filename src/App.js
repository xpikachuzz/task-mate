import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import Secure from './Secure';


function App() {
  const [tasklist, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist') || '[]'));
  const [task, setTask] = useState({})
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist])

  //useEffect(() => { POST("", "") }, [])



  return (
    <div className={"App"}>
      <Header />
      <Secure profile={profile} setProfile={setProfile} tasklist={tasklist} />
      <AddTask task={task} setTask={setTask} tasklist={tasklist} setTaskList={setTaskList} />
      <ShowTask task={task} setTask={setTask} tasklist={tasklist} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
