import Input from "../../../components/Input";
import ItemUnitProps from "./type";
import "../../../pages/Login/index.dark.scss";
import "../../../pages/Login/index.light.scss";

const ItemUnit = ({ }: ItemUnitProps) => {
    return (
        <div className="unit__item">
            <div className="unit__item--top">
                <span>1</span>
                <ul>
                    <li className="bx bx-move"></li>
                    <li className="bx bx-trash-alt"></li>
                </ul>
            </div>
            <div className="unit__item--bottom login__form">
                <div className="">
                    <Input type="text" name="title" className="login__input"
                        placeholder="" />
                    <label htmlFor="">THUẬT NGỮ</label>
                </div>
                <div>
                    <Input type="text" name="description" className="login__input"
                        placeholder="" />
                    <label htmlFor="">ĐỊNH NGHĨA</label>
                </div>
                <div>
                    <div>
                        <div>
                            <p>
                                <i className='bx bx-image-alt' ></i>
                            </p>
                            <p>Hình ảnh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemUnit;