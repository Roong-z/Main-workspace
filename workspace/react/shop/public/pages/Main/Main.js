import 



function Mainpage(){
    let [ goods, setGoods ] = useState(data);
  
    return(
      <>
      <Navbbar></Navbbar>
      <div className='main-bg'></div>
        <div className="container">
          <div className="row">
        {
          goods.map(function(a, i){
          return(
          <Product goods={goods[i]} i={i}/>
          )})
        }
        </div>
      </div>
      </>
    )
  }

  export default Mainpage;