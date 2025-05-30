const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}


const Header = (props) =>{
  return(
    <div>
      <h1> {props.course.name} </h1>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
       <Part1 part={props.course.parts[0]} />
       <Part2 part={props.course.parts[1]}/>
       <Part3 part={props.course.parts[2]}/>
    </div>
  )
}

const Part1 = (props) =>{
  return(
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Part2 = (props) =>{
  return(
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Part3 = (props) =>{
  return(
    <div>
        <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}


const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises  + props.course.parts[2].exercises}</p>
    </div>
  )
}

export default App