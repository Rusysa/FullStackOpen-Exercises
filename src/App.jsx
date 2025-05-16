const App = () => {

  const course = 'Half Stack application development '
  const parts = [
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
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts = {parts}/>
    </div>
  )
}


const Header = (props) =>{
  return(
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
       <Part1 part={props.parts[0]} />
       <Part2 part={props.parts[1]}/>
       <Part3 part={props.parts[2]}/>
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
  console.log(props.exercises)
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises  + props.parts[2].exercises}</p>
    </div>
  )
}

export default App