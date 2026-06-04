export default function Button({
    imgSrc,
    title,
}:{
    imgSrc: string,
    title: string;
}
    
){
    return(
        <button className="flex justify-between items-center pt-4 w-full text-black">
            <div className="flex gap-3">
                <img src={imgSrc}/>
                <p className="">{title}</p>
            </div>

        </button>
    )
}