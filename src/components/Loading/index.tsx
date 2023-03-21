import "./index.scss";
//
type LoadingProp = {
    loading?: boolean,
    backgroundColor: "black" | "white",
    style?: object
}
//
const Loading = ({ loading, backgroundColor, style }: LoadingProp) => {
    return (
        loading ? <div className={`loading ${backgroundColor}`} style={style}>
            <i className="fa-solid fa-circle-notch rotate-360"></i>
        </div> : <></>
    )
}

export default Loading