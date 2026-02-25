const ProductList = ({ products }) => {
    return (
        <div className="row g-3">
            {products.map(product => (
                <div className="col-12 col-sm-6" key={product.id}>
                    <div className="card product-card h-100">

                        <img
                            src={product.imageUrl || "https://placehold.co/600x400"}
                            alt={product.name}
                            className="card-img-top product-image"
                        />

                        <div className="card-body">
                            <h6 className="card-title mb-1">{product.name}</h6>
                            <p className="card-text small text-muted mb-2">
                                {product.description}
                            </p>
                            <p className="fw-bold mb-0">
                                ${product.price}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;