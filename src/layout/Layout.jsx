import PropTypes from 'prop-types'


const Layout = (props) => {
    return (
        <div>
            <main>{props.children}</main>
        </div>
    )
}
Layout.propTypes ={
    children: PropTypes.any
}
export default Layout