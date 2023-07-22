import Style from "./Header.module.css";
import Icon from "../assets/icons/icon"

export default function Header() {
  return (
    <>
      <header>
        <div className={`${Style.siteHeader}`} >
          <ul className={Style.categoryList}>
            <a href="#" >男款</a>
            <a href="#" >女款</a>
            <a href="#" >最新消息</a>
            <a href="#" >客製產品</a>
            <a href="#" >聯絡我們</a>
          </ul>
          <Icon.Logo className={Style.cursorPoint} />
          
          <div className={`${Style.iconList} ${Style.cursorPoint}`}>
            <a href="#" ><Icon.SearchIcon /></a>
            <a href="#" ><Icon.CartIcon /></a>
            <a href="#" ><Icon.MoonIcon /></a>
          </div>
        </div>
      </header>
    </>
  )
}