import { h } from 'preact'
import { ThemeContext } from '../app'

import style from './style.scss'

const CardDetails = ({details}) => (
  <ThemeContext.Consumer>
    {({theme}) => (
      <div class={style.details}>
        <ul>
          {details.minSumm && <li class={`theme-${theme}-text-before`}>Минимальная сумма: <strong>{details.minSumm}</strong></li>}
          {details.maxSumm && <li class={`theme-${theme}-text-before`}>Максимальная сумма: <strong>{details.maxSumm}</strong></li>}
          {details.minPercent && <li class={`theme-${theme}-text-before`}>Минимальная процентная ставка: <strong>{details.minPercent}</strong></li>}
          {details.maxPercent && <li class={`theme-${theme}-text-before`}>Максимальная процентная ставка: <strong>{details.maxPercent}</strong></li>}
          {details.minTerm && <li class={`theme-${theme}-text-before`}>Минимальный срок: <strong>{details.minTerm}</strong></li>}
          {details.maxTerm && <li class={`theme-${theme}-text-before`}>Максимальный срок: <strong>{details.maxTerm}</strong></li>}
          {details.appProcessTime && <li class={`theme-${theme}-text-before`}>Время рассмотрения заявки: <strong>{details.appProcessTime}</strong></li>}
          {details.getMoneyTime && <li class={`theme-${theme}-text-before`}>Время получения денег: <strong>{details.getMoneyTime}</strong></li>}
          {details.paySystem && <li class={`theme-${theme}-text-before`}>Платежная система: <strong>{details.paySystem}</strong></li>}
          {details.cardType && <li class={`theme-${theme}-text-before`}>Тип карты: <strong>{details.cardType}</strong></li>}
          {details.validity && <li class={`theme-${theme}-text-before`}>Срок действия: <strong>{details.validity}</strong></li>}
          {details.maxLimit && <li class={`theme-${theme}-text-before`}>Максимальный лимит: <strong>{details.maxLimit}</strong></li>}
          {details.minLimit && <li class={`theme-${theme}-text-before`}>Минимальный лимит: <strong>{details.minLimit}</strong></li>}
          {details.interestRate && <li class={`theme-${theme}-text-before`}>Процентная ставка: <strong>{details.interestRate}</strong></li>}
          {details.maintenanceСost && <li class={`theme-${theme}-text-before`}>Стоимость обслуживания: <strong>{details.maintenanceСost}</strong></li>}
          {details.gracePeriod && <li class={`theme-${theme}-text-before`}>Льготный период: <strong>{details.gracePeriod}</strong></li>}
          {details.penalty && <li class={`theme-${theme}-text-before`}>Штраф за неуплату: <strong>{details.penalty}</strong></li>}
          {details.incomeProof && <li class={`theme-${theme}-text-before`}>Подтверждение дохода: <strong>{details.incomeProof}</strong></li>}
          {details.regionRegistr && <li class={`theme-${theme}-text-before`}>Прописка в регионе банка: <strong>{details.regionRegistr}</strong></li>}
          {details.commission && <li class={`theme-${theme}-text-before`}>Комиссия за снятие наличных: <strong>{details.commission}</strong></li>}
          {details.cashback && <li class={`theme-${theme}-text-before`}>Кэшбэк: <strong>{details.cashback}</strong></li>}
          {details.minPayment && <li class={`theme-${theme}-text-before`}>Минимальный платеж: <strong>{details.minPayment}</strong></li>}
        </ul>
        <ul>
          {details.identification && <li class={`theme-${theme}-text-before`}>Идентификация: <strong>{details.identification}</strong></li>}
          {details.age && <li class={`theme-${theme}-text-before`}>Возраст: <strong>{details.age}</strong></li>}
          {details.obtainingMethods && <li class={`theme-${theme}-text-before`}>Способы получения: <strong>{details.obtainingMethods}</strong></li>}
          {details.repaymentOptions && <li class={`theme-${theme}-text-before`}>Способы погашения: <strong>{details.repaymentOptions}</strong></li>}
          {details.considerationTime && <li class={`theme-${theme}-text-before`}>Время рассмотрения: <strong>{details.considerationTime}</strong></li>}
          {details.delivery && <li class={`theme-${theme}-text-before`}>Доставка карты: <strong>{details.delivery}</strong></li>}
          {details.deliveryTime && <li class={`theme-${theme}-text-before`}>Срок доставки: <strong>{details.deliveryTime}</strong></li>}
          {details.creditHistory && <li class={`theme-${theme}-text-before`}>Кредитная история: <strong>{details.creditHistory}</strong></li>}
          {details.creditHistoryImprovement && <li class={`theme-${theme}-text-before`}>Улучшение кредитной истории: <strong>{details.creditHistoryImprovement}</strong></li>}
          {details.schedule && <li class={`theme-${theme}-text-before`}>График работы: <strong>{details.schedule}</strong></li>}
          {details.personalArea && <li class={`theme-${theme}-text-before`}>Личный кабинет: <strong>{details.personalArea}</strong></li>}
          {details.smsInfo && <li class={`theme-${theme}-text-before`}>Смс-информирование: <strong>{details.smsInfo}</strong></li>}
          {details.chipAvailability && <li class={`theme-${theme}-text-before`}>Наличие чипа: <strong>{details.chipAvailability}</strong></li>}
          {details.contactlessPayment && <li class={`theme-${theme}-text-before`}>Бесконтактная оплата: <strong>{details.contactlessPayment}</strong></li>}
          {details.secure3D && <li class={`theme-${theme}-text-before`}>3D Secure: <strong>{details.secure3D}</strong></li>}
          {details.supplyDepartment && <li class={`theme-${theme}-text-before`}>OPC: <strong>{details.supplyDepartment}</strong></li>}
          {details.application && <li class={`theme-${theme}-text-before`}>Приложение: <strong>{details.application}</strong></li>}
          {details.internetBank && <li class={`theme-${theme}-text-before`}>Интернет-банк: <strong>{details.internetBank}</strong></li>}
        </ul>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default CardDetails
