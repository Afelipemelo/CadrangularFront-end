import React, {Fragment,useEffect,useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IoIosAddCircle } from "react-icons/io";
import axios from 'axios'
import Alert from '@mui/material/Alert'; 

const Agregar = ({setActivador}) => {
    
    const [aregarEquipo, setAgregarEquipo] = useState({
        nombreEquipo: '',
        directorTecnico: '',
        capitan: ''
    }); 
    const [numeroEquipos, setNumeroEquipos] = useState(0)
    console.log(numeroEquipos)
    const {nombreEquipo , directorTecnico, capitan } = aregarEquipo
    const [error,setError] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) =>{
        setAgregarEquipo({
            ...aregarEquipo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async() =>{
        const {nombreEquipo , directorTecnico, capitan } = aregarEquipo
        if(nombreEquipo !== "" && directorTecnico !== "" && capitan !== "" ){
        axios.post(' http://localhost:4400/crearEquipo', {
            nombreEquipo: aregarEquipo.nombreEquipo,
            directorTecnico: aregarEquipo.directorTecnico,
            capitan: aregarEquipo.capitan 
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          setAgregarEquipo({
            nombreEquipo: '',
            directorTecnico: '',
            capitan: ''
          })
          setError(false)
          window.location.reload()
    }else {
        setError(true)
        return;
    }
    }
    useEffect(()=>{
        const consulEquipos = async()=>{
            const equipos = await axios.get('http://localhost:4400/getAllMarcadores')
            const result = equipos.data.respuesta.length
            setNumeroEquipos(result)
        }
        consulEquipos()
    })
    const iniciar = async() =>{
            if(numeroEquipos == 4 ){
                setActivador(true)
                alert("iniciar con los cuadrangulares")
            }else {
                alert("tienen que ser 4 equipos")
            }
    }
  return (
    <Fragment>
        <div className='container-botones'>
            {numeroEquipos <= 3 ?  <IconButton onClick={handleOpen} color="success" size='large'>
                <IoIosAddCircle size={60} />
            </IconButton> 
            : null}
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className='modal' >
                    <form autoComplete="off">
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <TextField 
                                    style={{margin:'30px 0px 30px 10px',width:'92%'}}
                                    label="Nombre del equipo"
                                    variant="outlined"
                                    type="text"
                                    name="nombreEquipo"
                                    value={nombreEquipo}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField 
                                    style={{margin:'10px 0px 30px 10px',width:'92%'}}
                                    label="Nombre del director tecnico"
                                    variant="outlined"
                                    type="text"
                                    name="directorTecnico"
                                    value={directorTecnico}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <TextField 
                                style={{margin:'10px 0px 30px 10px',width:'92%'}}
                                label="Nombre del capitan"
                                variant="outlined"
                                type="text"
                                name="capitan"
                                value={capitan}
                                onChange={handleChange}
                            />
                            </Grid>
                        </Grid>     
                    </form>
                    {}
                     <Button  onClick={handleSubmit} color="success" variant="contained" size="small" style={{marginBottom:'30px'}}>Agregar</Button >
                    {error ?  <Alert severity="warning" style={{ margin:'0px 10px 10px 10px'}}>Todos los campos son obligatorios</Alert> : null}
                </Box>
            </Modal>
           <div className='boton-iniciar'>
            {numeroEquipos <= 3 ? null 
            :
                <Button onClick={iniciar}  color="success" variant="contained" size="small"> iniciar</Button>
            }
            </div>
        </div>
      </Fragment>
  )
}

export default Agregar