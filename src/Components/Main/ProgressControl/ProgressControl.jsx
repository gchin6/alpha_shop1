import Style from './ProgressControl.module.css';
import Icon from "../../assets/icons/icon";

export default function ProgressControl() {
  return (
    <section className={Style.progressControlContainer}>
      <section className={`${Style.buttonGroup} ${Style.buttonGroup1}`} data-phase="address">
        <button className={Style.next}>
          下一步
          <Icon.RightArrow className={Style.arrowRight} />
        </button>
      </section>

      <section className={Style.buttonGroup} data-phase="shipping">
        <button className={Style.prev}>
          <Icon.LeftArrow className={Style.arrowLeft} />
          上一步
        </button>

        <button className={Style.next}>
          下一步
          <Icon.RightArrow className={Style.arrowRight} />
        </button>
      </section>

      <section className={Style.buttonGroup} data-phase="credit-card">
        <button className={Style.prev}>
          <Icon.LeftArrow className={Style.arrowLeft} />
          上一步
        </button>
        <button className={Style.next}>
          確認下單
        </button>
      </section>

    </section>
  )
}
