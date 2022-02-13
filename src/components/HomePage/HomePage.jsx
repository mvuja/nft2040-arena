import React, {useContext} from "react";
import Hero from '../Hero/Hero.jsx'
import Concept from '../Concept/Concept.jsx'
import Benefits from '../Benefits/Benefits.jsx'
import Crate from '../Crate/Crate.jsx'
// import Timeline from '../Timeline/Timeline.jsx'
import Cards from '../Cards/Cards.jsx'


const HomePage = props => {
    return (
        <>
            <Hero />
            <Concept />
            <Benefits />
            <Crate />
            {/* <Timeline /> */}
            <Cards newsId={props.newsId} setNewsId={props.setNewsId} />
        </>
    )
}

export default HomePage