import React from 'react';

const NewIssue: React.FC = () => {
    return (
        <div className='NewIssue w-2/3 h-2/3
        mx-auto mt-6 text-center
        border-gray-900 border-2 rounded-md
        hover:bg-gray-900 transition duration-300 ease-in-out'>
            <h2 className='text-3xl my-4'>
                Submit an Issue
            </h2>
            <div className='w-1/6 h-2 mx-auto my-4 rounded
      bg-gradient-to-r from-purple-800 to-purple-900'>
            </div>
            <p>Tell us some information about the issue
                you want worked on. The more the merrier!
            </p>
            <div className='h-5/6 grid grid-rows-5 place-items-center'>
                <textarea className='input'
                placeholder='Description of Issue'>
                </textarea>
                <div className='w-full h-full grid grid-cols-2 place-items-center'>
                    <input className='input w-1/2 h-2/3' placeholder='Difficulty'></input>
                    <input className='input w-1/2 h-2/3' placeholder='Skills'></input>
                </div>
                <div className='w-full h-full grid grid-cols-2 
                place-items-center items-baseline'>
                    <input className='input w-1/2 h-2/3' placeholder='Languages'></input>
                    <input className='input w-1/2 h-2/3' placeholder='Link to issue'></input>
                </div>
                <button className='button'>Submit</button>
            </div>
        </div>
    );
}
export default NewIssue;