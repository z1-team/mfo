import { h } from 'preact'
import TestimonialsCommon from 'common/components/Testimonials'

import style from './style.scss'

const Testimonials = ({id, title, logo, rating, testimonials, isLoggedIn, onDelete, onSubmit}) => (
  <TestimonialsCommon
    id={id}
    title={title}
    logo={logo}
    rating={rating}
    testimonials={testimonials}
    isLoggedIn={isLoggedIn}
    onDelete={onDelete}
    onSubmit={onSubmit}
  />
)

export default Testimonials
