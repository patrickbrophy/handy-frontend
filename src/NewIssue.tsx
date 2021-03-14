import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

interface APIResponse {
    success: boolean;
}

const NewIssue: React.FC = () => {
    const [loading, updateLoading] = useState(false);
    const history = useHistory();

    // Refs
    const name = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const difficulty = useRef<HTMLInputElement>(null);
    const skill = useRef<HTMLInputElement>(null);
    const language = useRef<HTMLInputElement>(null);
    const link = useRef<HTMLInputElement>(null);

    // Send new issue to API
    async function sendIssue(): Promise<void> {
        updateLoading(true);

        // TEMPORARY
        const url = 'alsfdjk';

        const data = {
            name: (name.current as HTMLInputElement).value, 
            description: (description.current as HTMLTextAreaElement).value, 
            difficulty: (difficulty.current as HTMLInputElement).value,
            skill: (skill.current as HTMLInputElement).value, 
            language: (language.current as HTMLInputElement).value, 
            link: (link.current as HTMLInputElement).value
        };

        
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        });
        const successData: Promise<APIResponse> = await response.json();
        const succeeded = (await successData).success;

        if (!succeeded)
            alert('Something went wrong!');

        updateLoading(false);

        // Return to landing page
        history.push('/');
    }

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
                you want worked on.
            </p>
            <div className='h-5/6 grid grid-rows-5 place-items-center'>
                <div className='row-span-2 h-4/5 w-full'>
                    <input className='input w-1/3 h-1/5 mb-2' 
                    placeholder='Issue Name'
                    ref={name}></input>

                    <textarea className='input'
                    placeholder='Description of Issue'
                    ref={description}>
                    </textarea>
                </div>

                <div className='w-full h-full grid grid-cols-2 place-items-center'>
                    <input className='input w-1/2 h-3/5' placeholder='Difficulty'
                    ref={difficulty}></input>
                    <input className='input w-1/2 h-3/5' placeholder='Skill'
                    ref={skill}></input>
                </div>

                <div className='w-full h-full grid grid-cols-2 
                place-items-center items-baseline'>
                    <input className='input w-1/2 h-3/5' placeholder='Language'
                    ref={language}></input>
                    <input className='input w-1/2 h-3/5' placeholder='Link to issue'
                    ref={link}></input>
                </div>

                <button className={(loading) 
                ? 'button bg-purple-900 animate-pulse'
                : 'button'}
                onClick={async () => await sendIssue()}
                disabled={loading}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default NewIssue;