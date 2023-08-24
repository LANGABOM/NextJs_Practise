import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from './css.jpg'

export const Navbar: React.FC<any> = () => {

    return (
        <>
            <div>
                <nav>
                    <Image src={Logo} alt={"logo"} width={70} quality={100} placeholder="blur" />
                    <Link href="/">Dashnoard</Link>
                    <Link href="/tickets">Tickets</Link>
                </nav>
            </div>

        </>
    )
}


export default Navbar;