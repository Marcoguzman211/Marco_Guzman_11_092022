import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/background-home.png";
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/logements.json").then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <>
      <Navbar />
      <Hero image={backgroundImage} path={"/"}/>
      <div className='main-container'>
          {data.map(logement => (
            <Card key={logement.id} image={logement.cover} title={logement.title} id={logement.id} />
          ))}
      </div>
      <Footer />
    </>
  )
}

export default Home