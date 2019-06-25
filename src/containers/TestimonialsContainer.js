import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Testimonials from '../components/testimonials'
import { sendTestimonial, deleteTestimonial,
  fetchTestimonials } from '../actions/testimonials'
import { openPopup } from '../actions/popup'
import { getTestimonials, getSelectedPartner } from '../selectors/testimonials'

const mapStateToProps = (state, {id, theme}) => ({
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

  render({partner, testimonials, theme, onDelete, onSubmit}) {
    return (
      <Testimonials
        partner={partner}
        testimonials={testimonials}
        theme={theme}
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
