import { h, Component } from 'preact'
import Testi from '../testi'
import LeaveTesti from '../leave-testi'
import style from './style.scss'

class Testimonials extends Component {
  getEnding() {
    const { testimonials } = this.props
    const count = testimonials && testimonials.length
    const ending = count%10

    switch(ending) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "отзыва"
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      default:
        return "отзывов"
    }
  }

  render({partner, testimonials, onDelete, onSubmit}) {

    const rating = partner && partner.sortBy ? Math.round(partner.sortBy.rating*10)/10 : 0
    const star = partner && partner.sortBy ? Math.round(partner.sortBy.rating*20) : 0

    return (
      <div className="wr-testimonials">
        <div className="container">
          <div className="testimonials">
            <header>
              <h2>Отзывы кредита “{partner && partner.main && partner.main.title}”
                <div className="rating">
                  <div className="star-rating">
                    <ul className="highlighted" style={{width: star + '%'}}>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                  </div>
                  <p>{testimonials.length} {this.getEnding()}</p>
                  {partner && partner.sortBy && partner.sortBy.rating && <span>({rating} из 5)</span>}
                </div>
              </h2>
              <figure>
                <img src={partner && partner.main && partner.main.logo}/>
              </figure>
            </header>
            {testimonials.length ?
                testimonials.map((item) => (
                  <Testi key={item.id} testiID={item.id} text={item.text} user={item.name} rating={item.rating} onDelete={onDelete} />
                ))
              : <h3>Отзывов пока нет.</h3>
            }
            <LeaveTesti onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
