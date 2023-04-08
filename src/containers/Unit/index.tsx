import Button from "../../components/Button";
import "./index.scss"
//
const Unit = () => {
    return (
        <div className="container unit">
            <div className="unit__top">
                <p>Tạo mới học phần</p>
                <Button type="button" className="">
                    Tạo
                </Button>
            </div>
        </div>
    )
}

export default Unit;