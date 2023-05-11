export default function Pagina(props: any) {
    return (
        <div className={`
        flex flex-col justify-center items-center
        w-screen h-screen text-white
        bg-[url('https://images.unsplash.com/photo-1683695948101-fd31df8697b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')]
        bg-no-repeat bg-cover`}>
            <div className={`
            flex flex-col items-center justify-center w-full h-full
            bg-black bg-opacity-75`}>

                {props.children}
            </div>
        </div>
    )
}