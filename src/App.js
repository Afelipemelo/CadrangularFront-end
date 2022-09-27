import React, {Fragment,useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Partidos from './components/Partidos'
import Agregar from './components/Agregar'
import TablaPosiciones from './components/TablaPosiciones';

import axios from 'axios'
function App() {
  const [contador, setContador] = useState()
  const [equipos, setEquipos] = useState([])
  const [activador, setActivador] = useState(false)
  useEffect(()=>{
    const consultarEquipos = async()=>{
      const equipos = await axios.get('http://localhost:4400/getAllMarcadores')
      setContador(equipos.data.respuesta.length)
      setEquipos(equipos.data.respuesta)
    }
    consultarEquipos()
  },[])
  return (
    <Fragment>
      <div className='nadvar'>
        <h3>Cuadrangulares</h3>
      </div>
      <Grid container >
        <Grid item  xs={12} md={5}>
          <Partidos activador={activador} equipos={equipos}/>
        </Grid>
        <Grid item  xs={12} md={2}>
          <Agregar setActivador={setActivador}/>
        </Grid>
        <Grid item  xs={12} md={5}>
          {contador == 0 ? null : <TablaPosiciones/>}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
