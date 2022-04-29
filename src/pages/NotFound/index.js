import "./notFound.css"
import { AnimationNotFound } from "../../components/Header/AnimationNotFound"
export default function NotFound(){
    return(
        <div className="box-notFound">
            <div className="box-animation">
                <AnimationNotFound/>
            </div>
            Essa pagina não existe!
        </div>
    )
}