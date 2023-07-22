import Style from './Step3.module.css'

export default function Step3() {
  return (
    <form data-phase="credit-card" >
      <h3 className={Style.formTitle}>付款資訊</h3>
      <section className={Style.formBodyItem}>
        <div className={Style.inputGroup6}>
          <div className={Style.inputLabel}>持卡人姓名</div>
          <input className={Style.inputStyle} type="text" placeholder="John Doe" />
        </div>
        <div className={Style.inputGroup6}>
          <div className={Style.inputLabel}>卡號</div>
          <input className={Style.inputStyle} type="text" placeholder="1111 2222 3333 4444" />
        </div>
        <div className={Style.inputGroup5}>
          <div className={Style.inputLabel}>有效期限</div>
          <input className={Style.inputStyle} type="text" placeholder="MM/YY" />
        </div>
        <div className={Style.inputGroup5}>
          <div className={Style.inputLabel}>CVC / CCV</div>
          <input className={Style.inputStyle} type="text" placeholder="123" />
        </div>
      </section>
    </form>
  )
}
