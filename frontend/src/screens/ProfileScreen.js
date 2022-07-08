import {useState, useEffect} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails, updateUserProfile} from '../actions/usersAction'

const ProfileScreen = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails)

    const { loading, error, user } = userDetails

    const userLogin  = useSelector(state => state.userLogin)

    const { userInfo } = userLogin

    const [success, setSuccess] = useState(false)


    useEffect(()=> {
        if(!userInfo) {
            navigate('/login')
        } else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch ,navigate, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({id: user._id, name, email, password}))
            setSuccess(true)
        }
    }

  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
    {message && <Message variant='danger'>{message}</Message>}
    {error && <Message variant='danger'>{error}</Message>}
    {success && <Message variant='success'>Profile Updated</Message>}
    {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' 
                palceholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' 
                palceholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                <Form.Label>Password Address</Form.Label>
                <Form.Control type='password' 
                palceholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

             <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' 
                palceholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Update
            </Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>
  )
}

export default ProfileScreen
