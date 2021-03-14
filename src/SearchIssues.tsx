import React, { useState, useRef } from 'react';

import IssueCard from './IssueCard';

interface APIResponse {
    results: Issue[];
}

interface Issue {
    name: string;
    description: string;
    difficulty: string;
    skill: string;
    language: string;
    link: string;
}

const SearchIssues: React.FC = () => {
    const [searching, updateSearching] = useState(false);
    const [issues, updateIssues] = useState([] as Issue[]);
    
    // Refs for inputs
    const language = useRef<HTMLInputElement>(null);
    const proficiency = useRef<HTMLInputElement>(null);
    const skill = useRef<HTMLInputElement>(null);

    async function searchIssues() {
        updateSearching(true);

        const url = 'https://handy-os.herokuapp.com/api/getissues';

        const data = {
            language: (language.current as HTMLInputElement).value,
            difficulty: (proficiency.current as HTMLInputElement).value,
            skill: (skill.current as HTMLInputElement).value,
        }
        
        
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

        const issuesData:Promise<APIResponse> = await response.json();
        const issues: Issue[] = (await issuesData).results;

        updateIssues(issues);
        updateSearching(false);
    }

    return (
        <div className='SearchIssues w-2/3 h-auto overflow-y-auto
        mx-auto mt-6 mb-4 text-center
        border-gray-900 border-2 rounded-md
        hover:bg-gray-900 transition duration-300 ease-in-out'>
            <h2 className='text-3xl my-4'>
                Tell Us About Yourself
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

                <button className={(searching) ? 
                'button bg-purple-900 animate-pulse' : 
                'button'}
                onClick={async () => await searchIssues()}
                disabled={searching}>
                    Find Issues
                </button>
            </div>

            <div className='w-2/5 h-2 mx-auto my-8 rounded
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