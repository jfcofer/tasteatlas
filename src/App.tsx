import './App.css'

import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'

import { type Dish } from './interface/Dish'
import { useEffect, useState } from 'react'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"


  const [dishes, setDishes] = useState<Dish[]>([])


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDishes(data))
      .catch(error => console.error("Error al cargar los datos:", error))
  }, [])



  return (
    <Grid container spacing={5}>

      {/* Student */}
      <Grid size={{ xs: 12 }}>

        <Student apellido="Fernandez" nombre="Juan" paralelo={2}></Student>

      </Grid>

      {/* DishTable */}
      <Grid size={{ xs: 12 }}>

        <DishTable data={dishes}></DishTable>

      </Grid>


    </Grid>
  )
}

export default App
