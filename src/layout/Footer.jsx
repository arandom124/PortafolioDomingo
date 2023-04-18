import Github from '../assets/github';
function Footer() {
  return (
    <section className="mt-56 relative w-full bg-gradient-to-r bg-gradient-to-r from-indigo-500 via-shad-yellow-900 bg-gradient-to-r from-indigo-900">
      <div className="flex justify-center">
        <div className="flex flex-col pt-2 pb-2">
          <h1 className="flex-col lg:flex-row items-center gap-2 flex font-bold text-zinc-400 text-1xl text-center  tracking-wider">
          Copyright ©2023 Todos los derechos reservados{' '}
            <a
              className="flex-row flex gap-2 text-zinc-900"
              target="blank"
              // href="#"
            >
              <Github />
              <h1 className="font-bold text-1xl text-zinc-400">|</h1>
              <h1 className="font-bold text-1xl text-zinc-400">❤</h1>
              <h1 className="font-bold text-1xl text-zinc-400">y ArandomCore</h1>
              </a>
          </h1>
          
        </div>
      </div>
    </section>
  );
}

export default Footer;
