import "./styles/Frame.css"
import PropTypes from 'prop-types'
const Frame = ({src,close}) => {
  return (
    <div>
        
        <iframe src={src} className="frame"></iframe>
        <button className="close" onClick={close}>x</button>
        
    </div>
  )
}

export default Frame

Frame.propTypes = {
    src: PropTypes.string,
    close: PropTypes.func
}