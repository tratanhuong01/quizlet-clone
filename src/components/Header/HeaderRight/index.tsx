import Button from "../../Button";
import Input from "../../Input";
import Popover from "../../Popover";

const HeaderRight = () => {
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
                            <li>
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
                    <Button type="button">Đăng nhập</Button>
                </li>
                <li>
                    <Button type="button">Đăng kí</Button>
                </li>
            </ul>
        </div>
    );
};

export default HeaderRight;
