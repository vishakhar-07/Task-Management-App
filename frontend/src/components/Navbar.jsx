import React from 'react'
import {ListTodo} from "lucide-react"

const Navbar = () => {
  return (
    <div>
      <nav className='sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8'> 
        {/* logo */}
    <div className='flex items-center gap-3' > 
        <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200 '>
        <ListTodo size={23}/>
        </div> 
        <div>
            <h1 className='text-lg font-bold text-slate-900'>TaskFlow</h1>
            <p>Stay Organised</p>
        </div>

        </div>
      </div>

      </nav>
    </div>
  )
}

export default Navbar
