import React from 'react';

const SearchIssues: React.FC = () => {
    return (
        <div className='SearchIssues w-2/3 h-2/3 max-h-full
        mx-auto mt-6 text-center
        border-gray-900 border-2 rounded-md
        hover:bg-gray-900 transition duration-300 ease-in-out'>
            <h2 className='text-3xl my-4'>
                Tell us About Yourself
            </h2>
            <div className='w-1/5 h-2 mx-auto my-4 rounded
      bg-gradient-to-r from-purple-800 to-purple-900'></div>
            <p className='my-6'>
                This is so we can recommend you the best projects to tackle!
            </p>
            <span className='text-gray-500'>
                (please separate items by comma)
            </span>
            <div className='grid grid-rows-4 grid-cols-1
            h-1/3
            mx-auto place-items-center'>
                <input className='row-span-1 input w-1/4' placeholder='Languages'></input>
                <input className='row-span-1 input w-1/4' placeholder='Proficiency'></input>
                <input className='row-span-1 input w-1/4' placeholder='Skills'></input>
                <button className='button'>Find Issues</button>
            </div>
        </div>
    );
}
export default SearchIssues;