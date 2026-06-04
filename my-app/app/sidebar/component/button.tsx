export default function Button({
    imgSrc,
    title,
}:{
    imgSrc: string,
    title: string;
}
    
){
    return(
        <button className="flex justify-between items-center pt-4 pl-3 w-full text-white">
            <div className="flex gap-3">
                <img src={imgSrc}/>
                <p className="text-lg">{title}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
            </svg> 
        </button>
    )
}