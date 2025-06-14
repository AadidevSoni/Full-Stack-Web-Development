function Weather({temp}) {

  if(temp < 15){
    return <h2>It's cold outside</h2>
  }else if(15 <= temp && temp <= 25) {
    return <h2>It's nice outside</h2>
  }else {
    return <h2>It's hot outside</h2>
  }
}

export default Weather;