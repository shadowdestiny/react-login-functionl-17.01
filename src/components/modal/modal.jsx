import React, { useState} from 'react';
import './modal.scss';

const Modal = (props) => {
    const {...other} = props;
    const [isOpen, setOpen] = useState(props.isshow)

    const child = () =>{
        return <div {...other} />;
    }

    const closeModal = () =>{
        setOpen('false');
        const {onClick} = props;
        if (!!onClick)
            onClick();
    }

    return <div className="component-modal">
        {props.isshow === 'true' && <div className="modals">
            <div className="modal-contents">
                <div className="text-right">
                    <span className={"link"} onClick={closeModal}>X</span>
                </div>
                <div className={"mt-2"}>
                    {child()}
                </div>
            </div>
        </div>}
    </div>;
}

export default Modal;
