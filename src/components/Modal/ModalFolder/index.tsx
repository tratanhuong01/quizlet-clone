import Input from "../../Input";
import Modal from "../Modal";
import ModalProps from "../type";
import "./index.light.scss";
import "./index.dark.scss";
import "../../../pages/Login/index.dark.scss";
import "../../../pages/Login/index.light.scss";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required("Tiêu đề không được để trống!"),
    description: yup.string(),
}).required();
//
const ModalFolder = (props: ModalProps) => {
    //
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });
    const onSubmit = (data: any) => {
        console.log(data)
    }
    //
    return (
        <Modal {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="modal__folder--title">
                    Tạo thư mục mới
                </p>
                <Input type="text" placeholder="Nhập tiêu đề" name="title" register={register} errors={errors} className="login__input" />
                <Input type="text" placeholder="Nhập mô tả (tùy chọn)" register={register} name="description" className="login__input" />
                <br />
                <hr />
                <br />
                <div className="modal__folder--footer">
                    <Button type="submit" disabled={!isValid}>
                        Tạo thư mục
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default ModalFolder;