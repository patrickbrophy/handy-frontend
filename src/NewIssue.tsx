import React, { useRef } from 'react';

const NewIssue: React.FC = () => {
    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const difficulty = useRef<HTMLInputElement>(null);
    const skill = useRef<HTMLInputElement>(null);
    const language = useRef<HTMLInputElement>(null);
    const link = useRef<HTMLInputElement>(null);

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
                <div className='row-span-2 h-4/5 w-full'>
                    <input className='input w-1/3 h-1/5 mb-2' 
                    placeholder='Issue Name'
                    ref={name}></input>

                    <textarea className='input'
                    placeholder='Description of Issue'>
                    </textarea>
                </div>

                <div className='w-full h-full grid grid-cols-2 place-items-center'>
                    <input className='input w-1/2 h-3/5' placeholder='Difficulty'></input>
                    <input className='input w-1/2 h-3/5' placeholder='Skill'></input>
                </div>

                <div className='w-full h-full grid grid-cols-2 
                place-items-center items-baseline'>
                    <input className='input w-1/2 h-3/5' placeholder='Language'></input>
                    <input className='input w-1/2 h-3/5' placeholder='Link to issue'></input>
                </div>

                <button className='button'>Submit</button>
            </div>
        </div>
    );
}
export default NewIssue;