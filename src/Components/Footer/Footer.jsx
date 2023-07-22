import Icon from '../assets/icons/icon'
import Style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.wrapper}>
        <Icon.Logo />
        <div className={Style.footerSection}>
          <p className={Style.title}>客戶服務</p>
          <div className={Style.content}>
            <a href="#" className={Style.contentLink}>運送說明</a><br />
            <a href="#" className={Style.contentLink}>退換貨相關</a><br />
            <a href="#" className={Style.contentLink}>付款資訊</a><br />
            <a href="#" className={Style.contentLink}>FAQ</a><br />
          </div>
        </div>
        <div className={Style.footerSection}>
          <p className={Style.title}>關於我們</p>
          <div className={Style.content}>
            <a href="#">品牌故事</a><br />
            <a href="#">媒體聯繫</a><br />
            <a href="#">Press Kit</a><br />
          </div>
        </div>
        <div className={Style.footerSection}>
          <p className={Style.title}>資訊</p>
          <div className={Style.content}>
            <a href="#">隱私權政策</a><br />
            <a href="#">Cookie</a><br />
            <a href="#">GDPR</a><br />
          </div>
        </div>
        <div className={Style.footerSection}>
          <p className={Style.title}>追蹤ALPHA SHOP</p>
          <div className={Style.content}>
            <p>+886 02123-45678</p>
            <div className={Style.media}>
              <a href="#"><Icon.Facebook /></a>
              <a href="#"><Icon.Instagram /></a>
              <a href="#"><Icon.Whatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}