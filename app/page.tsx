import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-4 w-full items-center text-center'>
      <h1 className='text-3xl font-bold pb-1'>Form Research</h1>
      <h2 className='pb-4'>Team Lindsey-Claire-Danny</h2>
      
      <div className='flex justify-center gap-4'>
      <Link className='underline' href='/zod'>
      Zod Form
      </Link>
      <Link className='underline' href='/zod'>
      Zod Form
      </Link>
      </div>
      </div>
  )
}

export default page