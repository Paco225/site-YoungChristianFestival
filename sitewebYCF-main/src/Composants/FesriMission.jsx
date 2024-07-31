import { Zoom } from 'react-awesome-reveal';
import illustration from '../assets/fond entete .jpg';

const FesriMission = () => {
  return (
    <div className="bg-purple-1000 grid grid-cols-1 md:grid-cols-2 w-full h-auto px-4 sm:px-10 py-10 items-center justify-center overflow-x-hidden">
      <Zoom>
        <div className="overflow-x-hidden mb-10 md:mb-0">
          <img src={illustration} alt="" className="rounded-xl w-full" />
        </div>
      </Zoom>
      
      <Zoom>
        <div className="overflow-x-hidden md:pl-10">
          <h1 className="font-semibold text-3xl md:text-4xl">Titre Ici</h1>
          <p className="mt-4 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, beatae? Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quae dolorem. Voluptates ab culpa repellendus. Nisi, vero voluptatibus! Consequuntur dolorum mollitia non voluptas voluptate quasi vitae esse! Provident consequatur dicta illo ullam fugit necessitatibus quibusdam esse. Ipsam eveniet fuga adipisci provident tempora omnis aspernatur dicta, obcaecati facilis dolores, nesciunt officia. amet consectetur adipisicing elit. Quia, cum!
          </p>
        </div>
      </Zoom>
    </div>
  );
}

export default FesriMission;
