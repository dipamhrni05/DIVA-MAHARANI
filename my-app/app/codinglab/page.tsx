import Button from "./componen/button";

export default function CodingLab(){
    return(
        <main className="h-screen flex">
            <section className="bg-gray-600 w-72 h-screen p-5">

                <div className="flex items-center gap-4">

                    <div className="bg-purple-600 p-1 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-coinbase">
	                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M12.95 22c-4.503 0 -8.445 -3.04 -9.61 -7.413c-1.165 -4.373 .737 -8.988 4.638 -11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0 -7.354 .013a5.252 5.252 0 0 0 0 7.393a5.185 5.185 0 0 0 7.354 .013l3.349 3.367a9.887 9.887 0 0 1 -7.05 2.912" />
                        </svg>
                        
                    </div>
                    <h2 className="text-white text-xl font-bold">CodingLab</h2>

                </div>

                <div className="pt-8">
                    <h2 className="text-white font-bold text-xl">Main Menu</h2>
                    <Button imgSrc="/layout-dashboard.svg" title="Dashboard" />
                    <Button imgSrc="/file-description.svg" title="Overview"/>
                    <Button imgSrc="/chart-histogram.svg" title="Analytic"/>
                </div>
                <div className="flex items-center gap-4">
            
                </div>

                <div className="pt-8">
                    <h2 className="text-white font-bold text-xl"> General </h2>
                    <Button imgSrc="/folder.svg" title="Project"/>
                    <Button imgSrc="/users-group.svg" title="Groups"/>
                    <Button imgSrc="/flag.svg" title="Report"/>
                </div>

                <div className="pt-8">
                    <h2 className="text-white font-bold text-xl"> Account </h2>
                    <Button imgSrc="/user-circle.svg" title="Profile"/>
                    <Button imgSrc="/settings.svg" title="Settings"/>
                </div>
            </section>

            <section className="flex-1 bg-slate-700">

            </section>

        </main>
    )
}