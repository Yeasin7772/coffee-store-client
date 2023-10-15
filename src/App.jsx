import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>

      <h1 className='text-5xl text-purple-500 text-center mb-5'>Hot Hot Coffee : {loadedCoffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          loadedCoffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            >

          </CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
