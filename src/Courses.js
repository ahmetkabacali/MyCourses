import { useContext } from "react";
import { MainContext } from "./context/mainContext";
import Course from "./Course";
import Loading from "./Loading";

function Courses() {
  const { courses, loading, fetchCourses } = useContext(MainContext)

  return (
    <div>
      <h1 className='title'>Kurslarım</h1>
      {loading ?
        (<Loading />
        ) : (
          <div className="container task-list">
            {courses.length === 0 &&
              <div className="reset-wrapper">
                <div className="reset-title">Tüm Kurslar Silindi</div>
                <button onClick={fetchCourses} className="btn btn-reset">Reset Courses</button>

              </div>}
            {courses.map((course, i) => <Course course={course} key={i} />)}
          </div>)}
    </div>

  );
}

export default Courses;
