import {Link} from 'react-router-dom'
import "./index.css"

const Rooms = (props) =>{ 
  const {data} = props
  const {basicPropertyData,displayName,priceDisplayInfoIrene,location} = data
  const {photos} = basicPropertyData
  const getBeatches = location.nearbyBeachNames.length > 0 ? location.nearbyBeachNames : ""
  console.log(getBeatches)
  const Rmimg = `https://cf.bstatic.com${photos.main.highResJpegUrl.relativeUrl}`
  return(
  <li className="room-item-container">
    <img src={Rmimg} alt="ss"/>
    <div>
    <h1>{displayName.text}</h1>
    <p>{location.displayLocation}</p>
    <p>{getBeatches}</p>
    <p>2 Beds</p>
    <p>3 nights 3 adults</p>
    <p>{priceDisplayInfoIrene.displayPrice.amountPerStay.amount}</p>
    <Link to="/room-details"><button type="button">View Details</button></Link>
    </div>
  </li>
)
}
export default Rooms