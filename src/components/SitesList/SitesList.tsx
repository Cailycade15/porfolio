import React from "react"
import cl from "./SitesList.module.css"

import Card from "../Card/Card"
import CardRotateEffect from "../CardRotateEffect/CardRotateEffect"

interface SitesList {
    list: any[]
}

// {list}: SitesList
const SitesList = () => {

    return(
        <div className={cl.conteiner}>

            {/* <CardRotateEffect count={3} deg={200}>
                {[
                    <Card/>,
                    <Card/>,
                    <Card/>,
                ]}
            </CardRotateEffect> */}

            
        </div>
    )

}


export default SitesList;