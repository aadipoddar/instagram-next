import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div className="relative lg:hidden flex-shrink-0 w-10 h-10 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;
