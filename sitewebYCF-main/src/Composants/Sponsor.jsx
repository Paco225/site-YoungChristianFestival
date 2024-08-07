import { Fade, Zoom } from 'react-awesome-reveal';
import logo1 from '../assets/logofficiel.png';
import logo2 from '../assets/logofficiel.png';
import logo3 from '../assets/logofficiel.png';
import logo4 from '../assets/logofficiel.png';
import logo5 from '../assets/logofficiel.png';
import logo6 from '../assets/logofficiel.png';
import logo7 from '../assets/logofficiel.png';
import logo8 from '../assets/logofficiel.png';
import logo9 from '../assets/logofficiel.png';
import logo10 from '../assets/logofficiel.png';
import logo11 from '../assets/logofficiel.png';
import logo12 from '../assets/logofficiel.png';
import logo13 from '../assets/logofficiel.png';
import logo14 from '../assets/logofficiel.png';

const Sponsor = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14
    ];

    return (
        <div className="bg-gray-100 px-4 py-20 text-center overflow-hidden">
            <Fade direction='up'>
                <h2 className="text-gray-600 md:text-xl lg:text-2xl font-bold mb-4 md:mb-8 pb-6">
                    ILS SOUTIENNENT LE PROJET
                </h2>
            </Fade>
            <Zoom bottom>
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 px-4"> 
                                <Zoom>
                                    <img src={logo} alt={`Logo ${index + 1}`} className="h-24 w-auto" /> 
                                </Zoom>
                            </div>
                        ))}
                    </div>
                </div>
            </Zoom>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Sponsor;
