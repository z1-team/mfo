import { h, Component } from 'preact'

import Card from './card'

import style from './style.scss'

class Results extends Component {
  componentDidMount() {
    this.props.onEnter()
  }

  render({tail, isLoggedIn, partners, onOrder, onEdit, onMore, onAdd}) {
    return (
      <div class="list">
        {isLoggedIn && <button class={style.addNew} onClick={onAdd}>Добавить партнера</button>}
        {partners.map((partner) => (
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
