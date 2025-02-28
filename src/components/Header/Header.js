import React from 'react'

const Header = () => {
    return (
        <header>
            <title>Little Lemon</title>
            <meta name='description' content='Little Lemon is a family-owned restaurant with delicious Mediterranean food.' />
            <meta name='og:title' content='Little Lemon' />
            <meta name='og:description' content='Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.' />
            <meta name='og:image' content='logo.png' />

            {/* required og meta tags  */}
            {/* <meta property='og:title' content='Little Lemon'/> */}
            {/* <meta property='og:type' content='website'/> */}
            {/* <meta property='og:image' content='logo.png'/> */}
            {/* <meta property='og:url' content='https://www.littlelemon.com'/> */}

            {/* <!-- Optional Open Graph meta tags --> */}
            {/* <meta property="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."> */}
            {/* <meta property="og:locale" content="en_US"> */}
            {/* <meta property="og:site_name" content="Little Lemon"> */}
                    </header>
                    )
}

                    export default Header
