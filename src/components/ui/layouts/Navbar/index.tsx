import Image from 'next/image'
import React, { FC } from 'react'
import { Button } from '../../button'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <header className="px-32 py-5 flex flex-row justify-between">
            <div className="inline-flex items-center gap-12">
                <div>
                    <Image
                        src="/images/logo2.png"
                        alt="/images/logo2.png"
                        width={160}
                        height={32}
                    />
                </div>
                <div className="mt-2">
                    <span className="font-medium  text-gray-400 mr-4 cursor-pointer">
                        Find Jobs
                    </span>
                    <span className="font-medium text-gray-400 cursor-pointer">
                        Browse Companies
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <Button variant="link">Login</Button>
                <Button>Sign Up</Button>
            </div>
        </header>
    )
}

export default Navbar
