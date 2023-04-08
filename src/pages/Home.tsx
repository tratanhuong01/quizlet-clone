import { ReactNode } from "react"
import Banner from "../components/Banner";
import Button from "../components/Button";
//
type ItemMainProps = {
    image: string,
    title: string,
    description: string,
    isImageLeft?: boolean,
    children?: ReactNode,
    buttonName?: string
}

const ItemMain = ({ image, title, description, isImageLeft, children, buttonName }: ItemMainProps) => {
    return (
        <div className="main__item">
            {isImageLeft ? <>
                <img src={image} alt="" />
                <div className="main__item--content">
                    <p>{title}</p>
                    <p>{description}</p>
                    {children}
                    {buttonName && <Button type="button">{buttonName}</Button>}
                </div>
            </> : <>
                <div className="main__item--content">
                    <p>{title}</p>
                    <p>{description}</p>
                    {children}
                    {buttonName && <Button type="button">{buttonName}</Button>}
                </div>
                <img src={image} alt="" />
            </>}
        </div>
    )
}
const Home = () => {
    return <>
        <Banner />
        <div className="container">
            <p className="title__top">90% học sinh sử dụng Quizlet cho biết họ đã cải thiện được điểm số.</p>
            <ItemMain title="Ghi nhớ nhanh hơn, miễn phí" description="Nghiên cứu cho thấy việc tự kiểm tra bằng thẻ ghi nhớ sẽ hiệu quả hơn việc đọc lại ghi chú của bạn.
                            Từ toán học, y học đến ngôn ngữ hiện đại, Quizlet được học sinh sử dụng trong hơn 100 chủ đề khác nhau."
                image="https://images.prismic.io/quizlet-prod/130dc509-6919-47bc-b27d-17f600a41b0c_IntlFirstSlice.png?auto=compress,format"
                buttonName="Bắt đầu"
            >
            </ItemMain>
            <ItemMain title="Thời gian đi lại hôm qua,hôm nay lại là buổi học" description="Học ở mọi nơi – ngay cả khi ngoại tuyến – với ứng dụng iOS và Android của chúng tôi.
                            Tiến trình của bạn được đồng bộ hóa giữa điện thoại và máy tính."
                image="https://images.prismic.io/quizlet-prod/1d359d1f-be06-481d-af18-30a4d93b3b0f_commute-image.png?auto=compress,format&rect=0,0,1001,1000&w=1001&h=1000"
                isImageLeft
            >
            </ItemMain>
            <ItemMain title="Sẵn sàng cho ngày thi với Học và Kiểm tra" description="Biến thẻ ghi nhớ của bạn thành các bài kiểm tra thử có thể tùy chỉnh. Vượt qua sự ghi nhớ
                        thông thường với các loại câu hỏi thách thức khả năng của bạn."
                image="https://images.prismic.io/quizlet-prod/01bf881f-92f2-450a-9466-0678bde12074_LearnandTestINTL-mobile.gif?auto=compress,format"
                buttonName="Khám phá lời giải miễn phí"
            >
                <ul className="list">
                    <li>
                        <img src="https://prismic-io.s3.amazonaws.com/quizlet-prod/8ec0178c-1b86-4698-b547-bcbe3e5172d4_learn.svg"
                            alt="" />
                        <div>
                            <p>Ôn luyện bằng chế độ Học</p>
                            <p>Nhận phản hồi tức thì trong khi thực hành với các câu hỏi trắc nghiệm, đúng hoặc sai, tự luận và hơn thế nữa.</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://prismic-io.s3.amazonaws.com/quizlet-prod/69eba793-2788-47dd-a8a7-e89d723edbe7_Test.svg" alt="" />
                        <div>
                            <p>Làm bài kiểm tra</p>
                            <p>Học tập hiệu quả với các bài kiểm tra thử để bạn sẵn sàng cho kỳ thi.</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://prismic-io.s3.amazonaws.com/quizlet-prod/5364d9dd-a28d-41ca-a5d1-308c49aa0f49_Smart+Grading.svg" alt="" />
                        <div>
                            <p>Truy cập chấm điểm thông minh</p>
                            <p>Tính năng chấm điểm thông minh của Quizlet đảm bảo bạn không bị chấm sai vì những lỗi nhỏ.</p>
                        </div>
                    </li>
                </ul>
            </ItemMain>
        </div>
    </>
}

export default Home;