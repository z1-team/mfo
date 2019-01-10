import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Testimonials from '../components/testimonials'
import { sendTestimonial, deleteTestimonial,
  fetchTestimonials } from '../actions/testimonials'
import { getTestimonials, getSelectedPartner } from '../selectors/testimonials'

const mapStateToProps = (state, {id}) => ({
  partner: getSelectedPartner(state, id),
  testimonials: getTestimonials(state)
})

const mapDispatchToProps = (dispatch) => ({
  onEnter(id) {
    dispatch(fetchTestimonials(id))
  },

  onDelete(id) {
    dispatch(deleteTestimonial(id))
  },

  onSubmit(testimonial) {
    dispatch(sendTestimonial(testimonial))
  }
})

class TestimonialsContainer extends Component {
  compontentDidMount() {
    const {id, onEnter} = this.props
    onEnter(id)
  }

  render({partner, testimonials, onDelete, onSubmit}) {
    return (
      <Testimonials
        partner={partner}
        testimonials={testimonials}
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
