import { h, Component } from 'preact'
import TestimonialsModerate from '../components/testimonials-moderate'

class ModerationContainer extends Component {
  handleDelete = (id) => {
    console.log(id)
  }

  handlePublic = (item) => {
    console.log(item)
  }

  render() {
    return (
      <TestimonialsModerate onDelete={this.handleDelete} onPublic={this.handlePublic} testimonials={[]} />
    )
  }
}

export default ModerationContainer
