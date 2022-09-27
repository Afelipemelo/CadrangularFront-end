import React,{Fragment,useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
const TablaPosiciones = () => {
    const [equipos, setEquipos] = useState([])
    useEffect(()=>{
      const consultarEquipos = async()=>{
        const equipos = await axios.get('http://localhost:4400/getAllMarcadores')
        setEquipos(equipos.data.respuesta)
      }
      consultarEquipos()
    },[])
  return (
    <Fragment>
        <div className='container-tabla'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Pts</TableCell>
            <TableCell align="center">Gf</TableCell>
            <TableCell align="center">Gc</TableCell>
            <TableCell align="center">PJ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipos.map((equipos) => (
            <TableRow
              key={equipos.idequipo}
            >
              <TableCell>
                {equipos.nombreequipo}
              </TableCell>
              <TableCell align="center">{equipos.puntos}</TableCell>
              <TableCell align="center">{equipos.golesafabor}</TableCell>
              <TableCell align="center">{equipos.golesencontra}</TableCell>
              <TableCell align="center">{equipos.partidosjugados}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </Fragment>
  )
}

export default TablaPosiciones