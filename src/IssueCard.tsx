import React, { useState } from 'react';

interface Props {
    issue: Issue;
}

interface Issue {
    id: string;
    name: string;
    description: string;
    difficulty: string;
    skill: string;
    language: string;
    link: string;
}

const IssueCard: React.FC<Props> = (props) => {
    const [liked, updateLiked] = useState(false);

    async function handleLike() {
        updateLiked(!liked);

        // senddata
    }

    return (
        <div className='IssueCard w-2/5 h-auto 
        mx-auto my-4 px-4 py-6 text-left
        bg-gray-800
        border-gray-900 border-2 rounded-md'>
            <div>
                <h2 className='text-3xl my-2 w-3/4 mr-0 inline-block'>
                    { props.issue.name }
                </h2>
                <span className='cursor-pointer'
                onClick={() => handleLike()}>
                {
                    (!liked) ?
                    <svg className='w-1/4 inline-block mb-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4C1D95" width="40px" height="40px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/></svg>
                    : <svg className='w-1/4 inline-block mb-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4C1D95" width="40px" height="40px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> 
                }
                </span>
            </div>
            <div className='h-1
            bg-gradient-to-r from-purple-800 to-purple-900'></div>
            <p className='text-gray-500 my-2 text-lg'>
                { props.issue.description }
            </p>
            <p className='my-2 text-xl'>
                Difficulty: {props.issue.difficulty}
            </p>
            <p className='my-2 text-xl'>
                Skill: {props.issue.skill.split(',').join(', ')}
            </p>
            <p className='my-2 text-xl'>
                Language: {props.issue.language.split(',').join(', ')}
            </p>
            <p className='my-2 text-xl'>
                Link: <a href={props.issue.link}
                className='text-purple-800 underline'>
                    {props.issue.link}
                </a>
            </p>
            
        </div>
    );
}
export default IssueCard;