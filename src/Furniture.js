const Furniture = ({title, image, price}) => {
    return (
        <>
            <div className="item">                
                <div className="item-title">
                    <h4>{title}</h4>
                    <div className="underline"></div>              
                </div>
                <div className="price" onClick={() => alert(`Item ${title.toUpperCase()} Added`)}> <strong> $ {price} </strong>| Add Item</div>
                <div>
                    <img src={image} alt={title} />
                </div>
            </div>
        </>
    );
}

export default Furniture;