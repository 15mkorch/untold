import Head from 'next/head';
import Navbar from '../components/navbar';


export default function Home() {
  return (
    <div id="index-background" className="background">
      <Navbar />
      <div className="title">
        <h1> Untold </h1>
      </div>
      <img className="picture" src="/home_image.png" />
    </div>

  )
}
