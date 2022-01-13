import React from 'react';
import Link from 'next/Link';


function Header() {
    return (
        <header className='flex flex-col px-8'>
            <nav className='flex items-center justify-between w-full pt-8 pb-8 sm:pb-16 max-w-2xl mx-auto'>
                <div>
                    {/* Need to add hidden hamburger icon */}
                    <Link href="/"><a className="pr-3 py-2 font-bold">Home</a></Link>
                    <Link href="/about"><a className="px-3 py-2">Projects</a></Link>
                    <Link href="/users"><a className="px-3 py-2">Blog</a></Link>
                    <Link href="/users"><a className="px-3 py-2">Snippets</a></Link>
                </div>
                <button>Test</button>
            </nav>
        </header>
    )
}

export default Header;
