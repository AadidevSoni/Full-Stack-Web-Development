const ComponentTwo = ({counts, onClickHandler}) => {

  const handleClick = () => onClickHandler();

  return (
    <div>
      <h3>{counts}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentTwo;