import React,{Fragment,useEffect,useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from 'axios'
const Partidos = ({ equipos}) => {  
  return (
    <Fragment>
      {equipos.length > 3 ?  <div className='container-partidos'>
            <Grid container >
              <Grid item  xs={12} md={12}>
              <h4 className='fechas'>Fecha 1 </h4>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[0].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[1].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button> enviar</button>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[2].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[3].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button> enviar</button>
              </Grid>
              <Grid item  xs={12} md={12}>
              <h4 className='fechas'>Fecha 2 </h4>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[0].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[2].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button> enviar</button>
              </Grid>
              <Grid item xs={12} md={5}>                
                  <h3>{equipos[1].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
           <Grid item  xs={12} md={5}>
                  <h3>{equipos[3].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button> enviar</button>
              </Grid>
              <Grid item  xs={12} md={12}>
              <h4 className='fechas'>Fecha 3 </h4>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[0].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[3].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button> enviar</button>
              </Grid>
              <Grid item  xs={12} md={5}>
                  <h3>{equipos[2].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
              </Grid>
              <Grid item  xs={12} md={2}>
                  <h1>VS</h1>
              </Grid>
              <Grid item  xs={12} md={5}>                  
              <h3>{equipos[1].nombreequipo}</h3>
                  <TextField label="marcador" variant="standard" />
                  <button > enviar</button>
              </Grid>
            </Grid>
        </div>
        :
      // <Fragment>
      <div className='container-partidos'>
        <h1>Se necesitan 4 equipos para inicar... porfavor agregue los equipos</h1>
      </div>
      }
    </Fragment>
    
  )
}

export default Partidos