function UserStatus({loggedIn,isAdmin}) {
  return (
    <div>
      {loggedIn && isAdmin && <h2>Welcome Admin</h2>}
      {loggedIn && isAdmin == false && <h2>Welcome User</h2>}
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> 
    </div>
  )
}

export default UserStatus;