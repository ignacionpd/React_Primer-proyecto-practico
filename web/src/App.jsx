import './App.css'
import { Casas } from './components/Casas'
import { Layout } from './components/basicos/Layout'
import { Presentacion } from './components/Presentación'
import { CasasDestacadas } from './components/CasasDestacadas'
import { ResultadosBusqueda } from './components/ResultadoBusqueda'
import { useState } from 'react'

function App() {
  
  const [ciudad, setCiudad] = useState('')

  const handleSearch = (ciudadBuscada) => {
    setCiudad(ciudadBuscada)
  }

  return (
    <>
      <Layout>
        <Presentacion onSearch={handleSearch} />
        <ResultadosBusqueda ciudad={ciudad} />
        <CasasDestacadas />
        <Casas />
      </Layout>
    </>
  )
}

export default App
