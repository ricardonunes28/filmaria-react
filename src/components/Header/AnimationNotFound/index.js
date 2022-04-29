import Lottie from "react-lottie";
import notFound from "../../../assets/lotties/notfound.json";

export function AnimationNotFound({sizeW, sizeH}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} width={"100%"} height={"100%"} />;
}