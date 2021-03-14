import React from 'react';

interface Props {
    issue: Issue;
}

interface Issue {
    name: string;
    description: string;
    difficulty: string;
    skill: string;
    language: string;
    link: string;
}

const IssueCard: React.FC<Props> = (props) => {
    return (
        <div className='IssueCard w-2/5 h-auto 
        mx-auto my-4 px-4 py-6 text-left
        bg-gray-800
        border-gray-900 border-2 rounded-md'>
            <h2 className='text-3xl my-2'>
                { props.issue.name }
            </h2>
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