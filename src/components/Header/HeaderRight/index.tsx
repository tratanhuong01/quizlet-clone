import { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";
import ModalFolder from "../../Modal/ModalFolder";
import Popover from "../../Popover";
import Login from "../../../pages/Login";
import Modal from "../../Modal/Modal";

const HeaderRight = () => {
    //
    const [active, setActive] = useState<Number>(-1);
    const handleActiveModal = () => {
        setActive(-1);
    };
    const ModalManager = () => {
        return <>
            <ModalFolder closeModal={handleActiveModal} className="modal__folder" isOpen={active === 1} closeButton />
            <Modal closeModal={handleActiveModal} className="modal__folder" isOpen={active === 2 || active === 3} >
                <Login closeModal={handleActiveModal} isRegister={active === 3} setActive={setActive} />
            </Modal>
        </>
    }
    //  
    return (
        <div className="header__right">
            <Input
                classNameParent="header__right--search"
                type="text"
                placeholder="Học phần, sách giáo khoa, câu hỏi"
                name="hsearch"
                search="innerLeft"
                clearText
            />
            <ul className="header__right--items">
                <li>
                    <Popover width="24rem" hidden={false} button={<Button type="button">
                        <i className="bx bx-plus"></i>
                    </Button>}>
                        <ul>
                            <li>
                                <i className="bx bx-copy"></i>
                                <span>Học phần</span>
                            </li>
                            <li onClick={() => {
                                setActive(1);
                            }}>
                                <i className="bx bx-folder"></i>
                                <span>Thư mục</span>
                            </li>
                            <li>
                                <i className="bx bx-group"></i>
                                <span>Lớp</span>
                            </li>
                        </ul>
                    </Popover>
                </li>
                <li>
                    <Button type="button" handleClick={() => {
                        setActive(2);
                    }}>Đăng nhập</Button>

                </li>
                <li>
                    <Button type="button" handleClick={() => {
                        setActive(3);
                    }}>Đăng kí</Button>
                </li>
            </ul>
            <ModalManager />
        </div >
    );
};

export default HeaderRight;
