import React, { useState } from "react";
import Card from "./Card";
// import { useState } from "react";


const Cards = (props) =>{

        let courses = props.courses;
        let category = props.category;

        const [likedCourses, setLikedCourses] = useState([]);

        console.log("printing data");
        console.log(courses);

        function getCourses(){
            if(category === "All") {
                let allCourses = [];            
                Object.values(courses).forEach(array => {
                    array.forEach(courseData =>{
                        allCourses.push(courseData);
                    })
                })
    
                return allCourses;
            }

            else{
                // mmain sirf specific category ka array pass karoomge
                return courses[category];
            }
           
        }
    return(
        <div className="w-11/12 max-w-[1200px] mx-auto  flex flex-wrap justify-center gap-3 min-h-[50vh]">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses}/>
                ))
            }

        </div>

    )
}

export default Cards;