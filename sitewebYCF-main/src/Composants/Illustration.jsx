import image from '../assets/illu.jpg'
import { Zoom } from 'react-awesome-reveal'

const Illustration = () => {
  return (
<div className="flex justify-center items-center min-h-screen pt-20">
  <Zoom>
    <img src={image} alt="illustration" className="w-full mt-[-90px] pb-[40px]" />
  </Zoom>
</div>


  )
}

export default Illustration