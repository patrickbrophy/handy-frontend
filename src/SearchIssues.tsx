import React from 'react';
import { useState } from 'react';

import IssueCard from './IssueCard';

interface Issue {
    title: string;
    description: string;
    difficulty: string;
    skills: string;
    languages: string;
    link: string;
}

const SearchIssues: React.FC = () => {
    const [issues, updateIssues] = useState([] as Issue[]);

    function searchIssues() {
        console.log('searched!');
        // DATA WILL COME FROM API, THIS IS FOR TESTING
        const testdata: Issue = {
            title: 'Memory Leak in C Game',
            description: 'Running into an issue where there is a massive memory leak whenever a player jumps into the pipe',
            difficulty: 'Intermediate',
            skills: 'Memory,Algorithms',
            languages: 'C,C++',
            link: 'ayylmao.gov',
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
            <span className='text-gray-500'>
                (please separate list items by comma)
            </span>
            <div className='grid grid-rows-4 grid-cols-1
            h-1/3
            mx-auto place-items-center'>
                <input className='row-span-1 input w-1/4' placeholder='Languages'></input>
                <input className='row-span-1 input w-1/4' placeholder='Proficiency'></input>
                <input className='row-span-1 input w-1/4' placeholder='Skills'></input>
                <button className='button'
                onClick={() => searchIssues()}>
                    Find Issues
                </button>
            </div>

            <div>
                {
                    issues.map(issue => {
                       return <IssueCard issue={issue}></IssueCard> 
                    })
                }
            </div>
        </div>
    );
}
export default SearchIssues;