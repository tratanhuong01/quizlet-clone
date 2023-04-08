import "./index.light.scss";
import "./index.dark.scss";
//
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">
                    <ul>
                        <li className="title">Giới thiệu</li>
                        <li>Giới thiệu về quizlet</li>
                        <li>Tuyển dụng</li>
                        <li>Quảng cáo trên Quizlet</li>
                        <li>Tin tức</li>
                        <li>Tải ứng dụng</li>
                    </ul>
                    <ul>
                        <li className="title">Dành cho học sinh</li>
                        <li>Thẻ ghi nhớ</li>
                        <li>Tuyển dụng</li>
                        <li>Học</li>
                        <li>Lời giải</li>
                        <li>Quizlet Plus</li>
                    </ul>
                    <ul>
                        <li className="title">Dành cho giáo viên</li>
                        <li>Live</li>
                        <li>Cột mốc</li>
                        <li>Blog</li>
                        <li>Quizlet Plus cho giáo viên</li>
                    </ul>
                    <ul>
                        <li className="title">Tài nguyên</li>
                        <li>Trung tâm hổ trợ</li>
                        <li>Đăng ký</li>
                        <li>Quy tắc danh dự</li>
                        <li>Nguyên tắc cộng đồng</li>
                        <li>Quyền riêng tư</li>
                        <li>Điều khoản</li>
                        <li>Chính sách quảng cáo và cookie</li>
                    </ul>
                    <ul>
                        <li className="title">Ngôn ngữ</li>
                        <li>Tiếng việt</li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom--left">
                        <ul>
                            <li><i className='bx bxl-tiktok'></i></li>
                            <li><i className='bx bxl-twitter'></i></li>
                            <li><i className='bx bxl-facebook'></i></li>
                            <li><i className='bx bxl-instagram'></i></li>
                            <li><i className='bx bxl-youtube'></i></li>
                        </ul>
                        © 2023 Quizlet, Inc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;