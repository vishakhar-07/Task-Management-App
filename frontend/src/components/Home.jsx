
import { Plus , ListTodo } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-[#f7f8fc] text-slate-800'>
    {/* Main Div  */}
    <div className='mx-auto max-w-7xl px-5 lg:px-8 lg:py-10'>
        {/* Header */}
        <div className='mb-8 flex flex-col gap-5 sm-flex-row sm:items-end sm:justify-between'>
            <div>
                <div className='mb-2 flex items-center gap-2'>
                    <span className='h-2 w-2 rounded-full bg-emerald-500'></span>
                     <span className='text-sm font-medium text-emerald-400'> You are Doing great</span>  
                </div>

                   <h2 className='text-3xl font-bold text-slate-900 sm:text-4xl'>Hello , Dev </h2>
                   <p className='mt-2 text-sm  text-slate-500'>Here's What's Happening With your Task today.</p>
            </div>

            {/* Add task */}
            <button className='group flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition duration-200 hover:translate-y-0.5 hover:bg-indigo-600 cursor-pointer'>
                <Plus size={20} className='transition-transform group-hover:rotate-180'/>
            Add Task
            </button>

        </div>

        {/* States  */}
        <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>

            {/* Total Task  */}
                  <div className='group rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:translate-y-1 hover:shadow-md'>
                    <div className='flex item-center justify-between'>
                        <div>
                            <p className='text-sm font-medium text-slate-500'>Total Task  </p>
                            <h3 className='mt-2 text-3xl font-bold text-slate-900'>12</h3>
                            <p className='mt-1 text-xs text-slate-400'>All Your Task </p>
                        </div>
                        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:scale-110'>
                            <ListTodo size={22}/>
                        </div>
                    </div>
                 </div>
        </div>

    </div>
    </div>
  )
}

export default Home
