import React, {useState} from "react";


import cl from "./Header.module.css"

import MyButton from "../MyButton/MyButton";
import MiniCard from "./MiniCard/MiniCard";

export enum CodeText {
    html = "<!DOCTYPE html> CODE",
    react = "create-react-app"
}

const Header = () => {

    

    const [codeVisual, setCodeVisual] = useState<string>(CodeText.html);

    return(
        <div className={cl.ChoiseDiv}>
            <div className={cl.MainText}>
                My Portfolio
            </div>

            <div className={cl.DivButtons}>
                <MyButton onClick={() => setCodeVisual(CodeText.html)}> HTML / CSS / JS </MyButton>
                <MyButton onClick={() => setCodeVisual(CodeText.react)}> React / TypeScript / Redux </MyButton>
            </div>

            <br/>
            <div>
                {
                    codeVisual == CodeText.html
                    ?
                        <MiniCard text={CodeText.html}/>
                    :
                        <MiniCard text={CodeText.react} showNPX={true}/>
                }
            </div>
        </div>
    )


}


export default Header;