import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import { openPopup } from '../actions/popup'

const mapDispatchToProps = (dispatch) => ({
  onScroll() {
    dispatch(openPopup('email'))
  }
})

class ScrollContainer extends Component {
  state = {
    emailShowed: false
  }

  componentDidMount(){
    const {onScroll} = this.props
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(() => {
      onScroll()
      this.setState({emailShowed: true})
    }, 16000)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const {emailShowed, isAlowed} = this.state
    const {partners, onScroll, url, showBot} = this.props
    const subscribed = localStorage.getItem('subscribed') === null ? true : false

    // if(!emailShowed && subscribed && url === '/') {
    //   let scrollTop = document.documentElement.scrollTop
    //   let windowHiehgt = window.innerHeight
    //   let appHeight = document.getElementById('app').offsetHeight
    //   let footer = document.getElementById('footer').offsetHeight
    //   let itemTranslate = Math.min(0, scrollTop/3 - 60)
    //
    //   if((appHeight - windowHiehgt - footer - scrollTop) <= 0) {
    //     onScroll()
    //     this.setState({emailShowed: true})
    //   }
    // }
  }

  render() {
    return (
      <div class="scroll-container"></div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ScrollContainer)
