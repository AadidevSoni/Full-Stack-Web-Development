function ListChallenge() {

  const users = [
    {id:1,name:"Aadidev",age:18},
    {id:2,name:"Asher",age:19},
    {id:3,name:"Nael",age:20}
  ];

  return (
    <div>
      <h2>List Challenge</h2>
      {
        users.map(user => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>----------------------</p>
          </div>
        ))
      }
    </div>
  )
}

export default ListChallenge