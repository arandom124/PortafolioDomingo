import Facebook from '../assets/facebook';
import Github from '../assets/github';
import Instagram from '../assets/instagram';
import LinkedIn from '../assets/linkedIn';
import Twitter from '../assets/twitter';

function Quiensoy() {
  const hacker =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjmvioCa42776dE49q7PwtlpGJqvend4qbTwgyBoXPCm0Egeu1JKZuIDF5hFB2xGjl9uT3IlNEP-TGazyKknZlMegBve94f8ZHH0pmXlG8SbsE3DGmL5wcGU-EuIIWgD3qFAuMh27kG-3v2guXK5t1IaMkUXznmX4YvM12Hcy79iu9K6kO5324v2q1Q';

  
  return (
    <section className="px-1 lg:pt-4 mx-auto max-w-7xl">
      <div className="py-2 px-3 md:px-4 flex flex-col items-center">
        <div>
          
          <span className="pt-1 grid justify-rigth relative">
            <div className="  bg-sky-50 lg:top-6 absolute rounded-full blur-3xl "style={{ width: '170px',height: '180px'}}></div>
            <img src={hacker} alt="hacker" className="relative " style={{ width: '160px',height: '200px'}}/>
          </span>
          <h2 className="pt-1 text-3xl font-black text-center text-white sm:text-3xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
            HOLA, soy José Domingo Aranda calambás.
            </span>
          </h2>
          <h2 className="pt-1 text-1xl font-black text-center text-white sm:text-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-green-500 to-gray-100">
            Desarrollador Web y Junior en Android
            </span>
          </h2>
          <h2 className="pt-1 text-1xl font-black text-center text-white sm:text-1xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-green-100">
            📌 Colombia, Popayán
            </span>
          </h2>
        </div>
        <div className="lg:pt-28 pt-10">
          <span>
            <h6 className=" text-xl lg:text-1xl text-center text-white">
            Bienvenido a mi portafolio.
            </h6>
            <h3 className=" lg:text-1zxl text-center text-white">
              ¿Quieres saber más acerca de mí?
            </h3>
            <br></br>
          </span>
         <span className="flex flex-row gap-14">
          <a
            className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
            target="blank"
            // href="#"
          >
            <Github />
            </a>
            <a
            className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
            target="blank"
            href="https://www.linkedin.com/in/arandom-jd-0197431bb/"
          >
            <LinkedIn />
            </a>
            <a
            className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
            target="blank"
            href="https://www.facebook.com/aranda.josed/"
          >
            <Facebook />
            </a>
            <a
            className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
            target="blank"
            href="https://www.instagram.com/josed_aranda/"
          >
            <Instagram />
            </a>
            <a
            className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
            target="blank"
            
          >
            <Twitter />
            </a>
            </span>
        </div>
        <br></br>
        <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        ______🔴🔵⚪⚫_______
      </h1>
      </div>
    </section>
  );
}

export default Quiensoy;
