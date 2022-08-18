import Teaser from "../Teaser/Teaser";
import './Order.css'
import Cover from './../../bilder/Cover.png'

function Order() {
  return (
    <div>
      <div className="order-items">
        <Teaser prize='13.5€' img={Cover} alt='Cover'></Teaser>
        <Teaser title='coming soon' img={Cover}></Teaser>
      </div>
    </div>
  );
}

export const OrderItems = () => {

  return (
    <div>

    </div>
  );
}

export default Order;