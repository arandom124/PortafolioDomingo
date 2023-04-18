/* eslint-disable no-unused-vars */
import Quiensoy from '../pages/Quiensoy';
import Mitrabajo from '../pages/Mitrabajo';
import Herramientas from '../pages/Herramientas';
import Intereses from '../pages/Intereses';
import Explaboral from '../pages/Explaboral';
import Educacion from '../pages/Educacion';
import Quiz from '../pages/Quiz';

import Footer from './Footer';
function Base() {
  return (
    <div className="bg-zinc-800 h-full">
      <Quiensoy />
      <Intereses />
      <Mitrabajo />
      <Herramientas />
      <Explaboral />      
      <Educacion />
      
      {/* <Quiz /> */}
      <Footer />
    </div>
  );
}

export default Base;
