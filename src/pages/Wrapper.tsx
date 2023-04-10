//
import { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
//
type WrapperProps = {
  children?: ReactNode
}
//
const Wrapper = ({ children }: WrapperProps) => {
  //
  //
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Wrapper