import React, { useState, useRef } from 'react';

import IssueCard from './IssueCard';

interface Issue {
    title: string;
    description: string;
    difficulty: string;
    skill: string;
    language: string;
    link: string;
}

const SearchIssues: React.FC = () => {
    const [issues, updateIssues] = useState([] as Issue[]);
    
    // Refs for inputs
    const language = useRef<HTMLInputElement>(null);
    const proficiency = useRef<HTMLInputElement>(null);
    const skill = useRef<HTMLInputElement>(null);

    async function searchIssues() {
        // TEMPORARY
        const url = 'Sl;df';

        const data = {
            language: (language.current as HTMLInputElement).value,
            proficiency: (proficiency.current as HTMLInputElement).value,
            skill: (skill.current as HTMLInputElement).value,
        }
        
        /*
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
        
        updateIssues(response.tbd)
        */

        // DATA WILL COME FROM API, THIS IS FOR TESTING
        const testdata: Issue = {
            title: 'Memory Leak in C Game',
            description: 'Running into an issue where there is a massive memory leak whenever a player jumps into the pipe',
            difficulty: 'Intermediate',
            skill: 'Memory',
            language: 'C',
            link: 'https://www.google.com',
        }
        
        updateIssues([testdata]);
    }

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

            <div className='grid grid-rows-4 grid-cols-1
            h-1/3
            mx-auto place-items-center'>
                <input className='row-span-1 input w-1/4' placeholder='Language'
                ref={language}></input>

                <input className='row-span-1 input w-1/4' placeholder='Proficiency'
                ref={proficiency}></input>

                <input className='row-span-1 input w-1/4' placeholder='Skill'
                ref={skill}></input>

                <button className='button'
                onClick={async () => await searchIssues()}>
                    Find Issues
                </button>
            </div>

            <div className='w-2/5 h-2 mx-auto my-4 rounded
      bg-gradient-to-r from-purple-800 to-purple-900'></div>

            <div className='mt-12'>
                {
                    issues.map((issue, i) => {
                       return <IssueCard key={i} issue={issue}></IssueCard> 
                    })
                }
            </div>
        </div>
    );
}
export default SearchIssues;