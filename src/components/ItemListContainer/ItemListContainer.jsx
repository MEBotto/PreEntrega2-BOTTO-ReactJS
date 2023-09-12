import { useEffect, useState } from 'react';
import { mFetch } from '../utils/mockFetch';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { SyncLoader } from 'react-spinners';

const ItemListContainer = () => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const {sName} = useParams()

  useEffect(()=>{
    if(sName){
      mFetch()
      .then(respuesta => setProduct(respuesta.filter(product=>sName===product.serie)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }else{
      mFetch()
      .then(respuesta => setProduct(respuesta))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [sName])

  return (
    <div className='container mt-5'>
        { loading ? <div className='d-flex justify-content-center'><SyncLoader color="rgba(255, 0, 0, 0.84)"/></div> : 
        <div className="row row-cols-4 g-4"><ItemList products={products}/></div> }  
    </div>     
    );
}

export default ItemListContainer