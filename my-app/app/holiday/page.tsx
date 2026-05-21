export default function holiday () {
    return (
        <div className="bg-gray-200 h-screen flex gap-4 justify-center items-center flex-col">
            <div className="bg-white h-110 w-72 flex flex-col justify-between p-2 rounded-4xl">

                <div>
                    <img src= "san fransisco.jpg" className="w-70 h-65 rounded-4xl"/>
                </div>

                <div>
                    <h1 className="text-2xl font-bold gap-4 mt-6">San Francisco</h1>
                    <p className="text-sm text-gray-500">Premium economy</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className=" flex gap-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-400 icon icon-tabler icons-tabler-outline icon-tabler-tag"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" /></svg>
                        <p className="text-sm font-bold">from $240</p>
                    </div>

                    <div className=" flex gap-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-400 icon icon-tabler icons-tabler-outline icon-tabler-plane-tilt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5" /></svg>
                        <p className="text-sm font-bold">SFO</p>
                    </div>
                </div>

                <div className="flex justify-between gap-2 pt-2 pb-2">
                    <button className="rounded-4xl bg-black text-white p-2 w-">
                        <p className="text-sm font-bold">Search Flight</p>
                    </button>
                    <button className="rounded-full bg-white p-2 border-2 border-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                    </button>
                </div>

            </div>
        </div>
)}; 