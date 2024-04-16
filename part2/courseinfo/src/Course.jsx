
import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
    <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>
    

);

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p>Total number of exercises: {totalExercises}</p>
    </div>
  );
};

export default Course;
