import "../Styles/components/RemoveModal.scss";

function RemoveModal({ toggleRemoveModal, removeFolder }){
    return(
        <div className="removeModal glass vertical gap">
            <p className="smallTitle">Are you sure you want to remove this file ?</p>
            <div className="horizontal gap removeModal__buttons">
                <button className="glass buttonPadding buttonText" onClick={ () =>{
                    toggleRemoveModal();
                    removeFolder();
                }}>Remove</button>
                <button className="glass buttonPadding buttonText" onClick={toggleRemoveModal}>Cancel</button>
            </div>
        </div>
    )
}

export default RemoveModal