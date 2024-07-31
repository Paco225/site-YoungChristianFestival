import ent from '../assets/bleu.jpg';
import { Zoom } from 'react-awesome-reveal';

const AccueilText = () => {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 flex justify-center">
            <Zoom>
              <img src={ent} alt="Image 1" className="rounded-xl w-full h-auto max-w-sm md:max-w-lg lg:max-w-xl" />
            </Zoom>
          </div>
          <div className="md:w-1/2 md:text-left">
            <Zoom>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-4'>CONCERT DE LA JEUNESSE</h1>
              <p className='text-base md:text-lg lg:text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?
              </p>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccueilText;
