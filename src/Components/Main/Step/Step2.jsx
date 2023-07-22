import Style from './Step2.module.css'

export default function Step2() {
  return (
    <form data-phase="shipping">

      <h3 className={Style.formTitle}>運送方式</h3>

      <section className={Style.formBody} >
        <label className={Style.radioGroup } data-price="0">
          
          <input className={Style.inputStyle} type="radio" name="shipping"  checked/>
          
          <div className={Style.radioInfo}>
            <div>
              <div className={Style.text}>標準運送</div>
              <div className={Style.price}></div>
            </div>

            <div className={Style.period}>約 3~7 個工作天</div>
          </div>
          
          <div className={Style.radioBoxBorder}>免費</div>
        </label>
        
        <label className={Style.radioGroup} data-price="500">

          <input id={Style.inputStyle} type="radio" name="shipping" />

          <div className={Style.radioInfo}>
            <div>
              <div className={Style.text}>DHL 貨運</div>
              <div className={Style.price}></div>
            </div>

            <div className={Style.period }>48 小時內送達</div>
          </div>

          <div className={Style.radioBoxBorder}>$500</div>
        </label>
      </section>
    </form>
  )
}
