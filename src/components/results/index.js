import { h, Component } from 'preact'

import Card from './card'

class Results extends Component {
  componentDidMount() {
    this.props.onEnter()
  }

  render({tail, isLoggedIn, partners, onOrder, onEdit, onMore}) {
    return (
      <div class="list">
        {isLoggedIn && <button class="add-card" onClick={this.handleAdd}>Добавить партнера</button>}
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
