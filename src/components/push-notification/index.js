import { h } from 'preact'
import PushNotification from 'common/components/PushNotification'

import style from './style.scss'

const Push = ({isOpen, onAccept, onDecline}) => <PushNotification
  isOpen={isOpen}
  onAccept={onAccept}
  onDecline={onDecline}
/>

export default Push
