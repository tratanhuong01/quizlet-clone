import Button from "../Button";
import "./index.scss";
//
const Banner = () => {
    return (
        <div className="banner" style={{
            backgroundImage: `url(https://images.prismic.io/quizlet-prod/6aa15201-1bbd-4bab-803d-93e7d2d4110e_Alt+Image+1+%281%29.png?auto=compress,format&rect=0,0,2880,1317&w=2880&h=1317)`
        }}>
            <div className="container">
                <div className="banner__content">
                    <h1>Thẻ ghi nhớ kỹ thuật số và các công cụ học tốt nhất</h1>
                    <p>Tham gia cùng hơn 60 triệu học sinh đang sử dụng các thẻ ghi nhớ dựa trên nền tảng khoa học,
                        các bài kiểm tra thử và lời giải chuyên gia của Quizlet để cải thiện điểm số và đạt được mục tiêu.</p>
                    <Button type="button">Đăng kí miễn phí</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;