import { Zoom } from 'react-awesome-reveal';
import image from '../assets/fond entete .jpg';

const FestiActi = () => {
  return (
    <div className="bg-gray-100 pb-20 flex flex-col items-center space-y-6 px-4 md:px-8 lg:px-16">
      {/* Section 1 */}
      <Zoom triggerOnce>
        <h1 className="text-[36px] font-semibold py-8">ACTIVITES</h1>
      </Zoom>
      
      {/* Activity Sections */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        <div className="flex justify-center px-2">
          <Zoom>
            <img src={image} alt="Image 1" className="rounded-xl w-full h-auto" />
          </Zoom>
        </div>
        <div className="flex flex-col justify-center px-2">
          <Zoom>
            <h1 className="pt-6 md:pt-0 pb-2 font-bold text-[28px]">CONCERT DE LA JEUNESSE</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
          </Zoom>
        </div>
      </div>
      
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        <div className="flex justify-center px-2 order-last md:order-first">
          <Zoom>
            <img src={image} alt="Image 2" className="rounded-xl w-full h-auto" />
          </Zoom>
        </div>
        <div className="flex flex-col justify-center px-2">
          <Zoom>
            <h1 className="pt-6 md:pt-0 pb-2 font-bold text-[28px]">CONCERT DE LA JEUNESSE</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
          </Zoom>
        </div>
      </div>
      
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        <div className="flex justify-center px-2">
          <Zoom>
            <img src={image} alt="Image 3" className="rounded-xl w-full h-auto" />
          </Zoom>
        </div>
        <div className="flex flex-col justify-center px-2">
          <Zoom>
            <h1 className="pt-6 md:pt-0 pb-2 font-bold text-[28px]">CONCERT DE LA JEUNESSE</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default FestiActi;
