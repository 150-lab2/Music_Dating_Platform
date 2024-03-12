import "./style.css"; // Make sure this path is correct

export const SignUpComponent = ({ onClose, text}) => {

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container" onClick={stopPropagation}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          <h2>{text}</h2>
          <div className="input-container">
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="submit-button">{text}</button>
        </div>
      </div>
    </div>
  );
};
