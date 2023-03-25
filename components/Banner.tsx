import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5'>
        <div>
            <h1 className='text-7xl'>Rijan's Anime Blog</h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to {" "}
                <span className='underline decoration-4 decoration-primary'>
                    Every Otakus
                </span> {" "}
                favourite blog in the animosphere
            </h2>
        </div>
        <p className='max-w-sm mt-5 text-gray-400 md:mt-2'>
            New Anime News | Latest Manga Upadates | The weekly Anime Content & More!
        </p>
    </div>
  )
}

export default Banner