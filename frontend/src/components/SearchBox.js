import {useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const SearchBox = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate('/')
        }
    }
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control type='text'
        name='q'
        placeholder='Search Products...'
        onChange={(e) => setKeyword(e.target.value)}
        className='mr-sm-2 ml-sm-5'></Form.Control>
        <Button type='submit' 
        variant='outline-success' className='py-2 px-3 mx-1'>
            <i className='fas fa-search fa-lg'></i>
        </Button>
    </Form>
  )
}

export default SearchBox
