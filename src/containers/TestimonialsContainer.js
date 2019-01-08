import { h, Component } from 'preact'
import Testimonials from '../components/testimonials'

class TestimonialsContainer extends Component {
  handleDelete = (id) => {
    console.log(id)
  }

  handleSubmit = (item) => {
    console.log(item)
  }

  render() {
    return (
      <Testimonials partner={[]} testimonials={[]} onDelete={this.handleDelete} onSubmit={this.handleSubmit} />
    )
  }
}

export default TestimonialsContainer
