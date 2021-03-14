import React from 'react';

interface Props {
    issue: Issue;
}

interface Issue {
    title: string;
    description: string;
    difficulty: string;
    skills: string;
    languages: string;
    link: string;
}

const IssueCard: React.FC<Props> = (props) => {
    return (
        <div className='IssueCard'>
            <h2 className='text-3xl'>
                { props.issue.title }
            </h2>
        </div>
    );
}
export default IssueCard;