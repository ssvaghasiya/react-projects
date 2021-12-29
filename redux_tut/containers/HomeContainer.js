import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeToCart } from '../Services/Actions/action'

const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


// export default Home;