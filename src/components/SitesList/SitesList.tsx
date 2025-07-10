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
            <CardRotateEffect count={3} deg={200}>
                {[
                    <a href="/Sites/CleanSite/main.html"><Card img_path="/img_for_cards/CleanSiteCard.png" main_word_1="Clean" main_word_2="Site"/></a>,
                    <a href="/Sites/CleanSite/main.html"><Card img_path="/img_for_cards/CleanSiteCard.png" main_word_1="Clean" main_word_2="Site"/></a>,
                    <a href="/Sites/CleanSite/main.html"><Card img_path="/img_for_cards/CleanSiteCard.png" main_word_1="Clean" main_word_2="Site"/></a>, 
                ]}
            </CardRotateEffect>

            
        </div>
    )

}


export default SitesList;