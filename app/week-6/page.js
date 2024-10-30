import ItemList from "./item-list"


export default function Page(){
    return(
        <main className="bg-slate-950 h-fullscreen" >
            <h1 className=" text-white text-4xl">Shopping List</h1>
            <ItemList/>
        </main>
    )
}