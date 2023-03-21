import Logo from "../components/Header/Logo";
import yellow_login from "../assets/images/yellow-login.png";
import Input from "../components/Input";
import Button from "../components/Button";
const Login = () => {
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
                    <li>
                        Đăng ký
                    </li>
                    <li className="active">
                        Đăng nhập
                        <img src={yellow_login} alt="" />
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
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/512/1216/1216931.png?w=740&t=st=1679389720~exp=1679390320~hmac=1dd305fed21b405515c980610f5cd3c4c7d273af1c40dcb8d588f9efcff79a7c" alt="" />
                        <span>Đăng nhập bằng Apple</span>
                    </li>
                </ul>
                <p style={{ textAlign: "center", margin: "4rem 0rem", fontSize: "1.3rem", fontWeight: "700", opacity: 0.8 }}>HOẶC EMAIL</p>
                <form action="" className="login__form">
                    <Input type="text" name="emailOrUsername" className="login__input" placeholder="Nhập email hoặc tên người dùng của bạn" />
                    <label htmlFor="">EMAIL</label>
                    <Input type="password" name="password" className="login__input" placeholder="Nhập mật khẩu" />
                    <label htmlFor="">MẬT KHẨU</label>
                    <p className="forget">Bạn quên rồi à?</p>
                    <p className="note">Khi đăng nhập, bạn chấp thuận
                        <b> Điều khoản dịch vụ </b>
                        và
                        <b> Chính sách quyền riêng tư </b>
                        của Quizlet.</p>
                    <Button type="submit">Đăng nhập</Button>
                </form>
            </div>
            <span className="login__close">&times;</span>
        </div>
    )
}

export default Login;