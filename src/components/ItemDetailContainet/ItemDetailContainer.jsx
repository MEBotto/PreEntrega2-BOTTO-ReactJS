import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../utils/mockFetch'
import { useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  useEffect(()=>{
    mFetch(Number(pid))
    .then(resp => setProduct(resp))
    .catch(err => console.log(err))
    .finally(setLoading)
  },[])

  return (
    <>
      { loading ? <div className='mt-5 d-flex justify-content-center'><SyncLoader color="rgba(255, 0, 0, 0.84)"/></div> : 
        <ItemDetail product={product}/> }
    </> 
  )
}

export default ItemDetailContainer