import Style from './StepProgress.module.css'

export default function StepProgress() {
  return (
    <>
      <h2 className={Style.title}>結帳</h2>
      {/* 結帳進度 */}
      <section className={Style.container}>
        <span className={Style.group} data-phase="address">
          <span className={Style.icon}>
            <span className={Style.text}>1</span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className={Style.bar} data-order={1} />
        <span className={Style.group} data-phase="shipping">
          <span className={Style.icon}>
            <span className={Style.text}>2</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className={Style.bar} data-order={2} />
        <span className={Style.group} data-phase="credit-card">
          <span className={Style.icon}>
            <span className={Style.text}>3</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section>
    </>
  )
} 