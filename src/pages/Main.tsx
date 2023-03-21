import { ReactNode } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Wrapper from "./Wrapper";

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

const Main = () => {
    return (
        <Wrapper>
            <Banner />
            <div className="container">
                <p className="title__top">90% học sinh sử dụng Quizlet cho biết họ đã cải thiện được điểm số.</p>
                <ItemMain title="Ghi nhớ nhanh hơn, miễn phí" description="Nghiên cứu cho thấy việc tự kiểm tra bằng thẻ ghi nhớ sẽ hiệu quả hơn việc đọc lại ghi chú của bạn.
                            Từ toán học, y học đến ngôn ngữ hiện đại, Quizlet được học sinh sử dụng trong hơn 100 chủ đề khác nhau."
                    image="https://images.prismic.io/quizlet-prod/130dc509-6919-47bc-b27d-17f600a41b0c_IntlFirstSlice.png?auto=compress,format"
                    buttonName="Bắt đầu"
                >
                </ItemMain>
                <ItemMain title="Thời gian đi lại   hôm qua,hôm nay lại là buổi học" description="Học ở mọi nơi – ngay cả khi ngoại tuyến – với ứng dụng iOS và Android của chúng tôi.
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
                </ItemMain>
            </div>
        </Wrapper >
    )
}

export default Main;