const Furniture = ({title, image, price}) => {
    return (
        <>
            <h4>{title}</h4>
            <img src={image} alt={title} />;
            <p>$ {price}</p>
        </>
    );
}

export default Furniture;