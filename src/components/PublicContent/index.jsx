import Header from "../Header"
export default function PublicContent({children}){
    return(
        <>
        <Header/>
        <main className="px-4 pt-8">
            {children}
        </main>
        </>
    )
}