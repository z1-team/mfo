import { h, Component } from 'preact'

import Card from './card'

import style from './style.scss'

class Results extends Component {
  componentDidMount() {
    this.props.onEnter()
    window.addEventListener('scroll', this.handleScroll)
  }

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScroll = () => {
		const {cards, cardsCount, hasMore, onScroll} = this.props

		if(hasMore) {
			if( this.results.clientHeight + this.results.getBoundingClientRect().top - window.innerHeight - 100  <= 0) {
				onScroll()
			}
		}
	}

  render({tail, isLoggedIn, isFetching, partners, onOrder, onEdit, onMore, onAdd}) {
    return (
      <div ref={ref => {this.results = ref}} class="list">
        {isLoggedIn && <button class={style.addNew} onClick={onAdd}>Добавить партнера</button>}
        {isFetching ? <div className={style.loading}></div>
          : partners.map((partner) => (
          <Card key={partner.id} item={partner}
            tail={tail} onOrder={onOrder}
            edit={isLoggedIn} onEdit={onEdit}
            dataID={partner.id} onMore={onMore}/>
        ))}
      </div>
    )
  }
}

export default Results
