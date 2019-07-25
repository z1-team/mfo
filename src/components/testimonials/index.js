import { h } from 'preact'
import TestimonialsCommon from 'common/components/Testimonials'

import style from './style.scss'

const Testimonials = ({partner, testimonials, isLoggedIn, onDelete, onSubmit}) => (
  <TestimonialsCommon
    partner={partner}
    testimonials={testimonials}
    isLoggedIn={isLoggedIn}
    onDelete={onDelete}
    onSubmit={onSubmit}
  />
)

export default Testimonials
