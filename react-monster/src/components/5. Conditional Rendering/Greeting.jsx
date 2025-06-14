function Greeting({timeOfDay}) {
  return (
    <div>
      {timeOfDay == "morning" && <h2>Good Morning!</h2>}
      {timeOfDay == "afternoon" && <h2>Good Afternoon!</h2>}
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default Greeting