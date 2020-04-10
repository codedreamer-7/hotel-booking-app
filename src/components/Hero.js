import React from 'react'

export default function Hero({children, hero, image}) {
    return (
       <header className={hero} style={ image ? {background:`url(${image})`} : null}>
           {children}
       </header>
    )
}

Hero.defaultProps = {
    children:"",
    hero:"homePage"
}
