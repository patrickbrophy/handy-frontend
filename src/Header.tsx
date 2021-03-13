import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='Header h-1/4 pb-0'>
            <div className='ml-6 w-1/5'>
                <a href='/'>
                    <span className="text-9xl float-left">👐</span>
                    <h1 className='text-8xl pt-14 font-header'>Handy</h1>
                </a>
                <div className='h-2 mx-auto rounded
                bg-gradient-to-r from-purple-800 to-purple-900'>
                </div>
            </div>
        </div>
    );
}
export default Header;