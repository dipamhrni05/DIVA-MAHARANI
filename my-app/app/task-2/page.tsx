export default function TaskPage2() {
    return (
    <div className="bg-white h-screen flex gap-4 justify-center items-center flex-col">

        <div className="flex gap-5 justify-center">
            <div className="bg-cyan-50 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-900">
            
                <div className=" flex gap-2">
                    <img src= "/palette.svg" className="w-4 h-4"/>
                    <p className="text-sm">Design</p>
                </div>


                <div >
                    <h1 className="text-2xl font-bold">Adobe Photoshop</h1>
                    <div className="flex justify-between pt-2">
                        <p className="text-sm">in 3 days</p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/tiara.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                            <img src="/vanesa.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                            <img src="/ziva.jpg" className="w-6 h-6 rounded-full border-2 border-white" />

                            <div className="flex items-center w-6 h-6 rounded-full bg-blue-100 p-1.5 text-xs scale-90">
                            +3
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-green-50 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-green-900">
        
                <div className="flex justify-between items-center" >
                    <div className="flex gap-2">
                        <img src= "/terminal-2.svg" className="w-4 h-4"/>
                        <p className="text-sm">AI</p>
                    </div>
                    <img src= "/star.svg" className="w-4 h-4"/>
                </div>
        

                <div>
                    <h1 className="text-2xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>

                    <div className="flex justify-between pt-2">
                        <p className="text-sm">in 5 days</p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/keisya.jpg" className="w-6 h-6 rounded-full border-2 border-white" />
                            <img src="/lyodra.jpg" className="w-6 h-6 rounded-full border-2 border-white"/>
                            <img src="/mahalini.jpg" className="w-6 h-6 rounded-full border-2 border-white"/>

                            <div className="flex items-center w-6 h-6 rounded-full bg-green-100 p-1.5 text-xs scale-90">
                            +3
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div className="flex gap-5 justify-center">

            <div className="bg-purple-50 h-62 w-63 flex flex-col justify-between p-8 rounded-4xl text-pruple-900">
            
                <div className=" flex gap-2">
                    <img src= "/palette.svg" className="w-4 h-4"/>
                    <p className="text-sm">Design</p>
                </div>


                <div >
                    <h1 className="text-2xl font-bold">Figma</h1>
                    <div className="pt-2">
                        <p className="text-sm">8 hours ago</p>
                    </div>
                </div>

            </div>

            <div className="bg-orange-50 h-62 w-63 flex flex-col justify-between p-8 rounded-4xl text-orange-900">
            
                <div className=" flex gap-2">
                    <img src= "/code.svg" className="w-4 h-4"/>
                    <p className="text-sm">Codding</p>
                </div>


                <div >
                    <h1 className="text-2xl font-bold">Python</h1>
                    <div className="pt-2">
                        <p className="text-sm">2 days ago</p>
                    </div>
                </div>

            </div>

            <div className="bg-pink-100 h-62 w-63 flex flex-col justify-between p-8 rounded-4xl text-pink-900">
            
                <div className=" flex gap-2">
                    <img src= "/palette.svg" className="w-4 h-4"/>
                    <p className="text-sm">Design</p>
                </div>


                <div >
                    <h1 className="text-2xl font-bold">Sketch</h1>
                    <div className="pt-2">
                        <p className="text-sm">4 days ago</p>
                    </div>
                </div>

            </div>

        </div>


    </div>
)};