import Button from "./component/button"

export default function Navbar (){
    return (
        <main className="h-screen flex">
            <section className="bg-white -200 w-72 h-screen p-4">
                <div>
                
                    <Button imgSrc="layout-2.svg" title ="Dashboard"/>
                    <Button imgSrc="message-circle.svg" title ="Messages"/>
                    <Button imgSrc="square-check.svg" title ="Tasks"/>
                    <Button imgSrc="notes.svg" title ="Notes"/>
                    <Button imgSrc="mail.svg" title ="Emails"/>
                    <Button imgSrc="stack-2.svg" title ="Reports"/>
                    <Button imgSrc="route-scan.svg" title ="Automations"/>
                    <Button imgSrc="route-square-2.svg" title ="Workflows"/>

                </div>
                <div className=" pt-7">
                    <div className="flex gap-2 items-center">
                        <img src="/chevron-down.svg"/>
                        <p>Favorites</p>
                    </div>

                    <Button imgSrc="key.svg" title ="Key Accounts"/>
                    <Button imgSrc="chart-infographic.svg" title ="Strategic Initiatives"/>
                    <Button imgSrc="wave-sine.svg" title ="Focus Areas"/>
                    <Button imgSrc="percentage-90.svg" title ="Starred items"/>

                 

</div>
            </section>

            <section className="flex-1 flex bg-gray-200"></section>
        </main>
    )
}