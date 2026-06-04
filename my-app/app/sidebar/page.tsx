import Button from "./component/button"

export default function Sidebar(){
    return(
        <main className="h-screen flex">
            <section className="bg-gray-500 w-72 h-screen p-4">
                <div className="flex justify-between items-center">
                    
                    <div className="flex gap-3 items-center">
                        <div className=" bg-blue-600 flex items-center justify-center p-3 rounded-lg">
                            <img src="/award.svg" className="w-5 h-5"  />
                            
                        </div>
                        <div className="text-white">
                            <h2 className="text-xl font-bold">Acmne Inc</h2>
                            <p>Enterprise</p>
                        </div>
                    </div> 


                    <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            className=" text-white icon icon-tabler icons-tabler-outline icon-tabler-selector">
	                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                        <path d="M8 9l4 -4l4 4" />
	                        <path d="M16 15l-4 4l-4 -4" />
                        </svg>
                    </div>
                </div>

                <div className="pt-8 ">
                    <h2 className="font-bold text-gray-300">Platform</h2>
                    <Button imgSrc ="/app-window.svg" title ="playground"/>
                    <Button imgSrc ="/bot-id.svg" title ="models"/>
                    <Button imgSrc ="/book.svg" title ="documentatiton"/>
                    <Button imgSrc ="/adjustments-horizontal.svg" title ="settings"/>
                    
                </div>
            </section>

            <section className="flex-1 flex bg-gray-700"></section>
        </main>
    )
}