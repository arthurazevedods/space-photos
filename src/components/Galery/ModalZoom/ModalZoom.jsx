import { styled } from "styled-components";

import Image from "../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/* eslint react/prop-types: 0 */

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const ContainerDialog = styled.dialog`
  position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button{
            position: relative;
            top: 20px;
            right: 40px;
            background-color: transparent;
            border: none;
        }
        
        
    }

`;

export default function ModalZoom({ photo, onClose, onFavorite }) {


    return (
        <>
            {photo && (
                <>
                    <Overlay onClick={onClose} />
                    <ContainerDialog open={!!photo}>
                        <Image photo={photo} expandida={true} onFavorite={onFavorite} />
                        <form method="dialog">
                            <button>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    onClick={onClose}
                                    style={{ color: "#ffffff", width: "24px", height: "24px" }}
                                    
                                />
                            </button>

                        </form>
                    </ContainerDialog>
                </>
            )}
        </>
    );
}
