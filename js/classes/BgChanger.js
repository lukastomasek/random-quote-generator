class BgChanger{
  changeBackgroundCol(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
   
    return randomColor

  }
}

export default BgChanger