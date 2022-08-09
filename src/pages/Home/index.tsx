import Navbar from "../../components/molecules/Navbar";
import BackgroundSlider from 'react-background-slider'


const fotoBG = "../bgHome.jpg"
const fotoBG2 = "../bgHome2.jpg"
const fotoBG3 = "../bgHome3.jpg"
const fotoBG4 = "../bgHome4.jpg"
const fotoBG5 = "../bgHome5.jpg"

function HomePage ()  {
    return <>
    <Navbar />
    <h1 className="wikiflix"> WIKIFLIX</h1>
   <h4 className="desc">A sua wikipedia de filmes</h4>
  
       <BackgroundSlider
  images={[fotoBG, fotoBG2, fotoBG3, fotoBG4, fotoBG5]}
  duration={10} transition={2} />
    </>
}

export default HomePage