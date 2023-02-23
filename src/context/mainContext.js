import React, { useEffect, useState } from 'react'

export const MainContext = React.createContext({});

const MainContextProvider = ({ children }) => {
    const [courses, setcourses] = useState([])
    const [loading, setLoading] = useState(false)
    // 
    useEffect(() => {
        fetchCourses()
    }, [])
    // 
    function fetchCourses() {
        setLoading(true)
        setTimeout(() => {
            fetch('http://localhost:3001/courses')
                .then(res => res.json())
                .then(data => setcourses(data), setLoading(false))
        }, 1000);
    }
    // 
    const deleteTask = (taskCourse) => {
        const filteredcourses = courses.filter((course) => course.id !== taskCourse.id)
        setcourses(filteredcourses)
    }
    // 
    const values = { courses, loading, deleteTask, fetchCourses }
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider