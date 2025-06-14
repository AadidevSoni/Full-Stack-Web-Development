function Greeting({timeOfDay}) {
  return (
    <div>
      {timeOfDay == "morning" && <h2>Good Morning!</h2>}
      {timeOfDay == "afternoon" && <h2>Good Afternoon!</h2>}
    </div>
  )
}

export default Greeting