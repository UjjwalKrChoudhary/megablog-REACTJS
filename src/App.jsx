import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authservice from './appwrite/auth'
import {login,logout} from "./store/authslice"
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
// import {Footer,Header} from 'react-router-dom'

function App() {
  //console.log(import.meta.env.REACT_APP_APPWRITE_URL);
   const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
       dispatch(login({userData}))  
      }else{
        dispatch(logout())
      }

    })
    .finally(()=> setLoading(false))
    
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer  />
      </div>
    </div>
  ) : null
  return (
    <>
    <h1> mega Blog</h1>
    </>
  )
}

export default App
