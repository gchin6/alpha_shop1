import Style from './Step1.module.css'
import CityData from './CityDate'


export default function Step1() {
  return (
    <form data-phase="address">
      <h3 className={Style.formTitle}>寄送地址</h3>
      <section className={Style.formBody}>
        <div className={Style.formBodyItem}>
          <div className={Style.inputGroup1}>
            <div className={Style.inputLabel}>稱謂</div>
            <div className={Style.selectContainer}>
              <select className={Style.selectStyle}>
                <option value="mr" selected>先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className={Style.inputGroup2}>
            <div className={Style.inputLabel}>姓名</div>
            <input className={Style.inputStyle} type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={Style.formBodyItem}>
          <div className={Style.inputGroup3}>
            <div className={Style.inputLabel}>電話</div>
            <input className={Style.inputStyle} type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className={Style.inputGroup2}>
            <div className={Style.inputLabel}>Email</div>
            <input className={Style.inputStyle} type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className={Style.formBodyItem}>
          <div className={Style.inputGroup1}>
            <div className={Style.inputLabel}>縣市</div>
            <div class="select-container">
              <CityData />
            </div>
          </div>
          <div className={Style.inputGroup2}>
            <div className={Style.inputLabel}>地址</div>
            <input className={Style.inputStyle} type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  )
}