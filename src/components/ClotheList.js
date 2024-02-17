function ClotheList ({clothes}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 mx-[40px] py-10">
            {clothes.map(clothe => (
                <div key={clothe.id}>
                    
                    <img src={clothe.image} className="rounded-md h-[400px] w-[300px] "/>
                    <p><a href={`/detials/${clothe.id}`}>{clothe.name}</a></p>
                    <p>{clothe.price}</p>
                    
                 </div>
            ))}
        </div>
    )
}

export default ClotheList