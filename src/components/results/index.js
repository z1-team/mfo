import { h } from 'preact'

import Card from './card'

const Results = ({tail, isLoggedIn, partners, onOrder, onEdit, onMore}) => (
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

export default Results
