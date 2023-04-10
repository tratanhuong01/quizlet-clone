import { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";
import ModalFolder from "../../Modal/ModalFolder";
import Popover from "../../Popover";
import Login from "../../../pages/Login";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import { PAGE_CREATE_UNIT } from "../../../routes/configRoutes";

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
                                <Link to={PAGE_CREATE_UNIT}>
                                    <i className="bx bx-copy"></i>
                                    <span>Học phần</span>
                                </Link>
                            </li>
                            <li onClick={() => {
                                setActive(1);
                            }}>
                                <p>
                                    <i className="bx bx-folder"></i>
                                    <span>Thư mục</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="bx bx-group"></i>
                                    <span>Lớp</span>
                                </p>
                            </li>
                        </ul>
                    </Popover>
                </li>
                {!localStorage.getItem("tokenQuiz") ? <>
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
                </> : <p>123</p>}
            </ul>
            <ModalManager />
        </div >
    );
};

export default HeaderRight;
