import yellow_login from "../../assets/images/yellow-login.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Header/Logo";
import "./index.light.scss";
import "./index.dark.scss";
import LoginProps from "./type";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { REGEX_EMAIL, REGEX_USERNAME } from "../../config";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { PAGE_MAIN } from "../../routes/configRoutes";
//
const schemaRegister = yup.object().shape({
    email: yup.string().required("Email không được để trống!").email("Email không hợp lệ!"),
    username: yup.string().required("Tên đăng nhập không được để trống!").matches(/^[a-zA-Z0-9]+$/, "Tên đăng nhập không hợp lệ!"),
    password: yup.string().required("Password không được để trống!").min(6, 'Mật khẩu phải hơn 6 kí tự!'),
    isAgree: yup.boolean().oneOf([true], "Bạn phải đồng ý với điều khoản của quizlet!").default(false)
}).required();
const schemaLogin = yup.object().shape({
    emailOrUsername: yup.string().required("Email/Tên đăng nhập không được để trống!")
        .test("test-email-or-username", "Email/Tên đăng nhập không hợp lệ!", (value) => {
            if (!REGEX_EMAIL.test(value) && !REGEX_USERNAME.test(value)) {
                return false;
            }
            return true;
        }),
    password: yup.string().required("Password không được để trống!").min(6, 'Mật khẩu phải hơn 6 kí tự!'),
}).required();
//
const Login = ({ closeModal, isRegister, setActive }: LoginProps) => {
    //
    const { register, formState: { isValid, errors }, handleSubmit } = useForm({
        resolver: yupResolver(isRegister ? schemaRegister : schemaLogin),
        mode: 'onChange',
    });
    const navigate = useNavigate();
    useEffect(() => {

    }, [isRegister]);
    const onSubmit = async (data: any) => {
        await axios.post(`http://192.168.1.37:8080/${isRegister ? 'registration' : 'login'}`, {
            ...data, username: data.emailOrUsername
        }).then((res: AxiosResponse) => {
            if (isRegister) {
                setActive(2);
            }
            else {
                localStorage.setItem("tokenQuiz", res.data);
                navigate(PAGE_MAIN);
                closeModal();
            }
        });
    }

    //
    return (
        <div className="login">
            <div className="login__left" style={{
                backgroundImage: `url('https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light.f0832112f8d66a6.png')`
            }}>
                <p className="login__left--text">
                    Học hiệu quả mà thật thoải mái.
                </p>
                <div className="login__left--logo">
                    <Logo />
                </div>
            </div>
            <div className="login__right">
                <ul>
                    <li onClick={() => {
                        setActive(3);
                    }} className={isRegister ? 'active' : ''}>
                        Đăng ký
                        {isRegister && <img src={yellow_login} alt="" />}
                    </li>
                    <li onClick={() => {
                        setActive(2);
                    }} className={isRegister ? '' : 'active'}>
                        Đăng nhập
                        {!isRegister && <img src={yellow_login} alt="" />}
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1679389426~exp=1679390026~hmac=54c63f1d9a8299e05f5c81e9f43daf5ee323cca214a038446384c1b7e6b8c9fb" alt="" />
                        <span>Đăng nhập bằng Google</span>
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740&t=st=1679389475~exp=1679390075~hmac=2bfbb8f30a8a0b435a28c7ef0f11ec59c8f1ea9fb096c80318ac28d31e5c7ce0" alt="" />
                        <span>Đăng nhập bằng Facebook</span>
                    </li>
                    {!isRegister && <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/1216/1216931.png?w=740&t=st=1679389720~exp=1679390320~hmac=1dd305fed21b405515c980610f5cd3c4c7d273af1c40dcb8d588f9efcff79a7c" alt="" />
                        <span>Đăng nhập bằng Apple</span>
                    </li>}
                </ul>
                <p style={{ textAlign: "center", margin: "4rem 0rem", fontSize: "1.3rem", fontWeight: "700", opacity: 0.8 }}>HOẶC EMAIL</p>
                <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                    <label htmlFor="">{isRegister ? "EMAIL" : "EMAIL/TÊN ĐĂNG NHẬP"}</label>
                    <Input type="text" name={isRegister ? "email" : "emailOrUsername"} className="login__input"
                        placeholder={isRegister ? "Nhập email của bạn" : "Nhập email/tên đăng nhập của bạn"} register={register} errors={errors} />
                    {isRegister && <>
                        <label htmlFor="">TÊN NGƯỜI DÙNG</label>
                        <Input type="text" name="username" className="login__input" placeholder="Nhập tên người dùng của bạn" register={register} errors={errors} />
                    </>}
                    <label htmlFor="">MẬT KHẨU</label>
                    <Input type="password" name="password" className="login__input" placeholder="Nhập mật khẩu" register={register} errors={errors} />
                    {isRegister ? <div className="login__agree">
                        <Input type="checkbox" name="isAgree" register={register} errors={errors} />
                        <div className="agree">
                            <p>Tôi chấp nhận
                                <b> Điều khoản dịch vụ </b>
                                và
                                <b> Chính sách quyền riêng tư </b>
                                của Quizlet.</p>
                        </div>
                    </div> : <>
                        <br />
                        <p className="forget">Bạn quên rồi à?</p>
                        <p className="note">Khi đăng nhập, bạn chấp thuận
                            <b> Điều khoản dịch vụ </b>
                            và
                            <b> Chính sách quyền riêng tư </b>
                            của Quizlet.</p>
                    </>}
                    <Button loading={false} type="submit"
                        disabled={!isValid}>{isRegister ? 'Đăng kí' : 'Đăng nhập'}</Button>
                    {!isRegister && <div className="login__form--footer">
                        <span>Hãy nhớ đăng xuất trên thiết bị dùng chung</span>
                        <span>Sử dụng liên kết nhanh</span>
                    </div>}
                    <div className="login__form--create">
                        {isRegister ? 'Bạn có tài khoản rồi à?' : 'Mới sử dụng Quizlet?'}  <span onClick={() => setActive(isRegister ? 2 : 3)} >
                            {isRegister ? 'Đăng nhập' : 'Tạo tài khoản'}</span>
                    </div>
                </form>
            </div>
            <span onClick={closeModal} className="login__close">&times;</span>
        </div >
    )
}

export default Login;