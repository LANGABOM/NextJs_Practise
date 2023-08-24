import React from "react";
import Link from "next/link";

export const Navbar: React.FC<any> = () => {

    return (
        <>
            <div>
                <nav>
                    <Link href="/">Dashnoard</Link>
                    <Link href="/tickets">Tickets</Link>
                </nav>
            </div>

        </>
    )
}


export default Navbar;