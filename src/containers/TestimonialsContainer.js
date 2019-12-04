import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Testimonials from '../components/testimonials'
import { sendTestimonial, deleteTestimonial,
  fetchTestimonials } from '../actions/testimonials'
import { openPopup } from '../actions/popup'
import { isLoggedIn } from '../selectors/auth'
import { getTestimonials, getSelectedPartner } from '../selectors/testimonials'

const mapStateToProps = (state, {id, theme}) => ({
  isLoggedIn: isLoggedIn(state),
  partner: getSelectedPartner(state, id),
  testimonials: getTestimonials(state),
  theme
})

const mapDispatchToProps = (dispatch) => ({
  onEnter(id) {
    console.log('Fetching testimonials')
    dispatch(fetchTestimonials(id))
  },

  onDelete(id) {
    dispatch(deleteTestimonial(id))
  },

  onSubmit(testimonial) {
    dispatch(sendTestimonial(testimonial))
    dispatch(openPopup('testimonial'))
  }
})

class TestimonialsContainer extends Component {
  componentDidMount() {
    const {id, onEnter} = this.props
    onEnter(id)
  }

  render({partner, testimonials, theme, isLoggedIn, onDelete, onSubmit}) {
    return (
      <Testimonials
        id={partner.id}
        title={partner.main.title}
        logo={partner.main.logo}
        rating={partner.sortBy.rating}
        testimonials={testimonials}
        theme={theme}
        isLoggedIn={isLoggedIn}
        onDelete={onDelete}
        onSubmit={onSubmit}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestimonialsContainer)
