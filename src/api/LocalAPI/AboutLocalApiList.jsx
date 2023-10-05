import PropTypes from 'prop-types'
import AboutLocalApiItem from './AboutLocalApiItem'



const AboutLocalApiList = (props) => {
    return (
        <ul className=''>
            {props.bioList.map((bio) => (
                <AboutLocalApiItem
                    Key={bio.id}
                    name={bio.name}
                    description={bio.description}
                    image={bio.image}
                />
            ))}
        </ul>
    )
}

AboutLocalApiList.propTypes = {
    bioList: PropTypes.any,
}
export default AboutLocalApiList