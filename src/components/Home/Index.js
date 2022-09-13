import React from 'react'
import Body from '../Body/Index'
import Footer from '../Footer/Index'
import Header from '../Header/Index'
import './Home.css'
const Home = () => {
    return (
        <div className="home">
          <div>
              <Header />
          </div>  
           <div>
              <Body />
          </div>
          <div>
              <Footer />
          </div>
        </div>
    )
}

export default Home
