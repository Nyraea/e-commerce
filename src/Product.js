import './global.css'

function Product({name, price, stock, brand, link}) {
    return (
    <div className='card w-25 mx-2 my-2 col-md-4'>
        <img src={link} className='card-img-top w-100 mx-auto' alt='...'/>
        <div class='card-body d-flex flex-column px-2'>
            <p className='d-flex text-black-50 text-sm'><b>{brand}</b></p>
            <h6 className='d-flex text-primary'>{name}</h6>
            <p className='d-flex'>{price}</p>
            <div className='d-flex justify-content-around'>
                    <a href='#' className='btn btn-light border border-1 border-dark'>Add to Cart</a>
                    <a href='#' className='btn btn-light border border-1 border-dark'>🖤</a>    
                    <a href='#' className='btn btn-light border border-1 border-dark'>View</a>
            </div>
        </div>
    </div>
    );
  }

export default Product;