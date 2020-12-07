const Furniture = ({title, image, price}) => {
    return (
        <>
            <div className="item">                
                <div className="item-title">
                    <h4>{title}</h4>
                    <div className="underline"></div>              
                </div>
                <button>$ {price}</button>
                <div>
                    <img src={image} alt={title} />
                </div>
            </div>
        </>
    );
}

export default Furniture;