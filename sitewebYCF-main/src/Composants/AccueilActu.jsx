import { Zoom } from 'react-awesome-reveal';
import image from '../assets/orange.jpg';

const AccueilActu = () => {
  return (
    <div className="bg-white py-8 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 pb-4 text-gray-600">
        Actualités
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <Zoom cascade={true} duration={900}>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img src={image} alt="Actualité 1" className="w-full h-auto mb-4 rounded-lg" />
            <p className="text-gray-800">Texte de l'actualité 1</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img src={image} alt="Actualité 2" className="w-full h-auto mb-4 rounded-lg" />
            <p className="text-gray-800">Texte de l'actualité 2</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img src={image} alt="Actualité 3" className="w-full h-auto mb-4 rounded-lg" />
            <p className="text-gray-800">Texte de l'actualité 3</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img src={image} alt="Actualité 4" className="w-full h-auto mb-4 rounded-lg" />
            <p className="text-gray-800">Texte de l'actualité 4</p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AccueilActu;
