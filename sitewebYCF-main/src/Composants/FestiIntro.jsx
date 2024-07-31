import { Zoom } from 'react-awesome-reveal';
import logo from '../assets/logofficiel.png';

const FestiIntro = () => {
    return (
        <div className="flex flex-col md:flex-row overflow-x-hidden mb-0 bg-gray-900 h-auto text-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
            <Zoom triggerOnce={false}>
                <div className="max-w-3xl mx-auto md:mx-0 md:pl-20 overflow-hidden">
                    <img src={logo} alt="" className="w-[80%] md:w-[60%] pb-10" />
                    <div className="pb-10">
                        <h3 className="text-2xl font-semibold">Event Dates</h3>
                        <p className="text-gray-400 text-[19px]">June 1 - June 30, 2024</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Location</h3>
                        <p className="text-gray-400 text-[19px]">Central Park, New York City</p>
                    </div>
                </div>
            </Zoom>

            <div className="max-w-3xl mx-auto md:mx-0 md:pl-20 md:pr-40 mt-10 md:mt-0 overflow-hidden">
                <Zoom triggerOnce={false}>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Lorem ipsum dolor sit amet
                    </h2>
                </Zoom>
                <Zoom triggerOnce={false}>
                    <p className="mt-4 text-[20px] leading-7 text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magni ipsum est veritatis enim quis soluta mollitia ut. Illo, molestiae non. Quibusdam dolorum unde facere ullam quisquam mollitia quidem officia?
                    </p>
                </Zoom>
                <Zoom triggerOnce={false}>
                    <div className="mt-8">
                        <div className="flex items-center justify-between">
                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold">Key Highlights</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-400 text-[18px]">
                                    <li>Immersive music performances</li>
                                    <li>Cultural exhibitions and workshops</li>
                                    <li>Food and craft vendors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default FestiIntro;
