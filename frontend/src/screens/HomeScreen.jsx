import { useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { listProducts } from '../actions/productAction'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Pagenit from '../components/Pagenit'
import ProductsCarousel from '../components/ProductsCarousel'
import Meta from '../components/Meta'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const keyword = params.keyword
  const pageNumber = params.pageNumber || 1

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(()=> {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
    <Meta />
    {!keyword ? <ProductsCarousel /> 
    : <Link to='/'  className='btn btn-kight'>Go Back</Link>}
      <h1>Latest Products</h1>
      {loading 
      ? <Loader /> 
      : error 
      ? <Message variant='danger'>{error}</Message> 
      : <>
      <Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
            </Col> 
        ))}
      </Row>
      <Pagenit page={page} 
      pages={pages} 
      keyword={keyword ? keyword : ''} />
      </>
      }
    </>
  )
}

export default HomeScreen
