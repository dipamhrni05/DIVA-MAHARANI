export default function Button({
    imgSrc,
    title,
}:{
    imgSrc: string,
    title: string;
}){

    return(
        <button className="flex items-center gap-4 pt-4 pl-3 w-full text-white">
            <div className=" flex-gap 4"></div>
            <img src={imgSrc} className="w-6 h-6"/>

            <p className="]text-lg">
                {title}
            </p>
        </button>
    )
}