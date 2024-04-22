import { useState,useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import Header from "../Header"
import Rooms from "../Rooms"
import {TailSpin} from 'react-loader-spinner'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}


const Home = () => {
  const [values,setValues] = useState([])
  const [apiStatus,setApiStatus] = useState({apiStatus:apiStatusConstants.inProgress})

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    pauseOnHover: false
  }

  useEffect(() => {
    setApiStatus({apiStatus:apiStatusConstants.inProgress})
    const fetchData = async () => {

        const userDetails = {
            username: "satish",
            password: "satish123",
        };

        const url = 'https://booking-com13.p.rapidapi.com/stays/properties/list-v2?location=Mumbai%2C%20Maharashtra%2C%20India&checkin_date=2024-04-25&checkout_date=2024-04-28&language_code=en-us&currency_code=INR&property_type=Hotels';

        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'c090189d3fmsh5c804c68ae207dap17abe2jsn36f580be562f',
              'X-RapidAPI-Host': 'booking-com13.p.rapidapi.com'
              }
           
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
               const ss =  data.data
               setValues(ss)
               setApiStatus({apiStatus:apiStatusConstants.success})
               
            } else {
                const data = await response.json();
                
            }
        } catch (error) {
            console.error('Error occurred while fetching:', error)
        }
      };
  
      fetchData();
    }, [])

   const renderLoadingView = () => (
      <div className="loader-container">
        <TailSpin type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    )

    const renderHomePage = () => (
      <div className='home-container'>
    <div className="slider-container">
      <Slider {...settings} className='slider'>
        <div>
          <img src={img1} alt="img"/>
        </div>
        <div>
        <img src={img2} alt="img"/>
        </div>
        <div>
        <img src={img3} alt="img"/>
        </div>
        <div>
        <img src={img4} alt="img"/>
        </div>
      </Slider>
      <div className='slide-text-container'>
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home <br/>In Our <span>Hotel.</span></h1>
      </div>
      <form>
        <div>
            <label>
                Arrival Date
            </label>
                <input type='date'/>
        </div>
        <div>
        <label>
            Depature Date
        </label>
        <input type='date'/>
        </div>
        <div>
        <label>
            Locations
        </label>
        <input type='text'/>
        </div>

        <div>
        <label>
            Price Range
        </label>
        <input type='text'/>
        </div>

        <div>
        <label>
            Guests
        </label>
        <input type='text'/>
        </div>

        <button type="submit">Check Availability</button>
      </form>
    </div>
  /* <ul>
      {values.map((each,i) => <Rooms key={i} data={each}/>)}
    </ul>
    </div>
    )

    const renderPropertiesHomePage = () => {
      console.log(apiStatus.apiStatus)
       switch(apiStatus.apiStatus){
          case apiStatusConstants.success:
              return renderHomePage()
      
          case apiStatusConstants.inProgress:
              return renderLoadingView()
          default:
              return null
       }
    }

  return (
    <>
   <Header/>
   <div>
   {renderPropertiesHomePage()}
    </div>
    </>
  )
}

export default Home

/*import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
  params: {query: 'man'},
  headers: {
    'X-RapidAPI-Key': '7749cec638msh006cc43cfd52ee1p1eeb23jsn17467ce59857',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}*/