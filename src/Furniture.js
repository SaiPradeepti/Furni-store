const Furniture = ({title, image, price}) => {
    return (
        <>
            <div>
                <h4>{title}</h4>
                <img src={image} alt={title} />
                <p>$ {price}</p>
            </div>
        </>
    );
}

export default Furniture;