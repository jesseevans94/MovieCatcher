import PropTypes from 'prop-types'
import rayanImg from '../../assets/Rayan.jpg'
import jaeImg from '../../assets/Jae.jpg'
import koreyImg from '../../assets/Korey.jpg'
import SholaImg from '../../assets/Shola.jpg'


const AboutLocalApiItem = (props) => {
    let postImage = ''

    switch (props.image) {
        case 'rayan':
            postImage = rayanImg
            break;
        case 'jae':
            postImage = jaeImg
            break;
        case 'korey':
            postImage = koreyImg
            break;
        case 'shola':
            postImage = SholaImg
            break;
    }


    return (
        <li>
            <div>
                {props.name}
                {props.description}
                <img src={postImage}></img>
            </div>
        </li>
    )
}

AboutLocalApiItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}
export default AboutLocalApiItem