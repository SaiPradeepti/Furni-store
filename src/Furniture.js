const Furniture = ({title, image, price}) => {
    return (
        <>
            <div className="item">
                <h4>{title}</h4>
                <button>$ {price}</button>
                <div>
                    <img src={image} alt={title} />
                </div>
            </div>
        </>
    );
}

export default Furniture;