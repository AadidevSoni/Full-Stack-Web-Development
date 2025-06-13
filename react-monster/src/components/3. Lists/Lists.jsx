function Lists() {

  const numbers = [1,2,3,4,5];
  //Each child should be unique in a list and so each child will have a key that is unique
  //Inside the map fucntion it is => () and not => {}
  //We have to go inside the javascript using {} and then write the code

  const userInfo = [
    {
      name: "Aadidev",
      age: 18,
      location: "Bahrain"
    },
    {
      name: "Asher",
      age: 19,
      location: "Al-Ain"
    },
    {
      name: "Nael",
      age: 20,
      location: "Dubai"
    }
  ]
  return (
    <div>
      <h3>List of Numbers</h3>
      {
        numbers.map(number => (
          <ul key = {number} >  
            <li>{number}</li>
          </ul>
        ))
      }

      <h3>List of Objects</h3>
      {
        userInfo.map(person => (
          <ul key = {Math.random()} >
            <li>Name: {person.name}</li>
            <li>Age: {person.age}</li>
            <li>Location: {person.location}</li>
          </ul>
        ))
      }

      <h3>Destructuring Objects</h3>
      {
        userInfo.map(({name,age,location}) => (
          <ul key = {Math.random()} >
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Location: {location}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Lists