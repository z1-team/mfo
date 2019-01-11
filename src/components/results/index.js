import { h } from 'preact'

import Card from './card'

import style from './style.scss'

const Results = ({tail, isLoggedIn, partners, onOrder, onEdit, onMore}) => (
  <div class="list">
    {isLoggedIn && <button class={style.addNew} onClick={this.handleAdd}>Добавить партнера</button>}
    {partners.map((partner) => (
      <Card key={partner.id} item={partner}
        tail={tail} onOrder={onOrder}
        edit={isLoggedIn} onEdit={onEdit}
        dataID={partner.id} onMore={onMore}/>
    ))}
  </div>
)

export default Results
