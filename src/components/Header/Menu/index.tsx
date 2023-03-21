import Popover from "../../Popover";
import { useState } from "react";
import data from "./data";
const Menu = () => {
    //
    const [active, setActive] = useState(false);
    const [current, setCurrent] = useState(data[0].id);
    //
    return (
        <ul className="header__menu">
            <li>Trang chủ</li>
            <li onClick={() => setActive(!active)} className={active ? 'active' : ''}>
                <Popover width="54rem" className="sub-menu" button={<>
                    <span>Chủ đề</span>
                    <i className='bx bx-chevron-down'></i>
                </>}
                    hidden={false}
                    subFunction={() => {
                        setActive(false);
                    }}>
                    <ul className="sub">
                        {data.map((item, index) =>
                            <li onMouseEnter={() => {
                                setCurrent(item.id)
                            }} className={item.id === current ? 'active' : ''} key={item.id}>
                                <div>
                                    <img width={20}
                                        src={item.icon}
                                        alt="" />
                                    <span>{item.name}</span>
                                </div>
                                <i className='bx bx-chevron-right'></i>
                            </li>
                        )}
                    </ul>
                    <ul className="child">
                        {data.find((item, index) => item.id === current)?.sub.slice(0, 5).map((item, index) =>
                            <li key={item.id}>{item.name}</li>
                        )}
                        <li className="all">Xem tất cả</li>
                    </ul>
                </Popover>
            </li>
            <li>Lời giải chuyên gia</li>
        </ul >
    )
}

export default Menu;