const homeController = (req,res) => {

  const data = {
    name: "Aadi",
    userID: 30,
  };
  res.render('index',data);
}

export {homeController} 