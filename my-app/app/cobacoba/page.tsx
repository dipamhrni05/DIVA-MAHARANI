export default function Coba(){
    return (

        <div className="bg-gray-200 h-screen flex gap-4 justify-center items-center flex-col">

            <div className="bg-white h-86 w-72 flex flex-col justify-between p-8 rounded-2xl">
                
                <div className="flex justify-between items-center">
                    <p className="text-sm ">Client details</p>
                    <img src= "/x.svg" className="w-4 h-4"/>
                </div>

                <div className="flex gap-2 items-center ">
                    <img src= "/yuka.jpg" className="w-8 h-8 rounded-full"/>
                    <div>
                        <p className="text-sm">Cornelius Greenfelder</p>
                        <div className="bg-green-200 flex items-center rounded-full p-1 text-xs">
                            <img src= "/award.svg" className="w-3 h-3 rounded-full"/>
                            Verified 
                        </div>
                    </div>
                    
                </div>

                <div className="bg-blue-100 flex gap-2 items-center p-4 rounded-2xl">
                    <div>
                        <p className="text-sm">Projects</p>
                        
                        <div className="flex justify-between gap-10 pt-1">
                            <div className="flex items-center flex justify-between rounded-full text-xs">
                                <img src= "/hourglass.svg" className="w-3 h-3 rounded-full"/>
                                On Going 
                            </div>
                            <div className="flex items-center rounded-full text-xs">
                                <img src= "/square-check.svg" className="w-3 h-3 rounded-full"/>
                                Completed
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </div>
    
)};