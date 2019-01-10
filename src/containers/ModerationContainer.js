import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import TestimonialsModerate from '../components/testimonials-moderate'
import { getTestimonials } from '../selectors/testimonials'
import { deleteTestimonial, publicTestimonial } from '../actions/testimonials'

const mapStateToProps = (state) => ({
  testimonials: getTestimonials(state)
})

const mapDispatchToProps = (dispatch) => ({
  onEnter() {
    dispatch(fetchNewTestimonials())
  },

  onPublic(testimonial) {
    dispatch(publicTestimonial(testimonial))
  },

  onDelete(id) {
    dispatch(deleteTestimonial(id))
  }
})

class ModerationContainer extends Component {
  compontentDidMount() {
    this.props.onEnter()
  }

  render({testimonials, onDelete, onPublic}) {
    return (
      <TestimonialsModerate
        onDelete={onDelete}
        onPublic={onPublic}
        testimonials={testimonials}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModerationContainer)
