import Carrito from '../../../assets/Carrito.png'
import Badge from "react-bootstrap/Badge";

const CartWidget = ({count, funcionOnClick}) => {
  return (
    <>
      <div className="">
        <div className="position-relative" onClick={funcionOnClick}>
          <img src={Carrito} alt="" width="32px"/>
          <Badge className="position-absolute top-0 start-100 translate-middle rounded-circle" bg="primary">{count}</Badge>
        </div>
      </div> 
    </>
  )
}

export default CartWidget