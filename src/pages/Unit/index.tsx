import Button from "../../components/Button";
import "./index.light.scss";
import "./index.dark.scss";
import Wrapper from "../Wrapper";
import Input from "../../components/Input";
import ItemUnit from "./ItemUnit";
import "../../pages/Login/index.dark.scss";
import "../../pages/Login/index.light.scss";
//
const Unit = () => {
    return (
        <Wrapper>
            <div className="container unit">
                <div className="unit__top">
                    <p>Tạo mới học phần</p>
                    <Button type="button" className="">
                        Tạo
                    </Button>
                </div>
                <div className="unit__input login__form">
                    <label htmlFor="">TIÊU ĐỀ</label>
                    <Input type="text" name="title" className="login__input"
                        placeholder={`"Nhập tiêu đề, ví dụ "Sinh học - Chương 22: Tiến hóa"`} />
                    <label htmlFor="">MÔ TẢ</label>
                    <Input type="text" name="description" className="login__input"
                        placeholder="Thêm mô tả" />
                </div>
                <div className="unit__middle">
                    <div className="unit__middle--left">
                        <Button type="button" className="">
                            <i className="bx bx-plus"></i>
                            <span>Nhập</span>
                        </Button>
                        <Button type="button" className="">
                            <i className="bx bx-plus"></i>
                            <span>Thêm sơ đồ</span>
                            <i className="bx bx-lock-alt"></i>
                        </Button>
                    </div>
                    <ul className="unit__middle--right">
                        <li>
                            <p>Hiển thị với mọi người</p>
                            <p>Thay đổi</p>
                        </li>
                        <li>
                            <p>Chỉ tôi có chỉnh sửa</p>
                            <p>Thay đổi</p>
                        </li>
                        <li className="swap">
                            <i className='bx bx-expand-horizontal'></i>
                        </li>
                        <li className="keyboard">
                            <i className='bx bxs-keyboard' ></i>
                        </li>
                    </ul>
                </div>
                <ItemUnit />
                <ItemUnit />
                <ItemUnit />
                <ItemUnit />
                <ItemUnit />
            </div>
        </Wrapper >
    )
}

export default Unit;