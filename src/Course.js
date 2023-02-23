import React, { useContext } from "react";
import { MainContext } from "./context/mainContext";

function Course({ course }) {
  const { deleteTask } = useContext(MainContext)
  return (
    <div className="task">
      <h2 className="task-title">{course.id} - {course.title}</h2>
      <span className="task-price">{course.price} TL</span>
      <p className="task-text">{course.content}</p>
      <button onClick={() => deleteTask(course)} className="btn btn-delete">Sil</button>
    </div>
  );
}

export default Course;
