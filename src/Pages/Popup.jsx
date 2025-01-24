import PropTypes from "prop-types";
import "./styles/popup.css";
const Popup = ({ cmp, close }) => {
  return (
    <div className="popup">
      <div className="renderedCmp">
        <button onClick={close} className="close">X</button>
        {cmp}
      </div>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  cmp: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};
 