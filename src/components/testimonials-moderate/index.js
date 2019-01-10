import { h } from 'preact'

import style from './style.scss'

const TestimonialsModerate = ({testimonials, onDelete, onPublic}) => (
  <div class={style.wrTestimonials}>
    <div class="container">
      <div class={`${style.testimonials} ${style.moderate}`}>
        {!testimonials.length && <h2>Нет отзывов для модерации.</h2>}
        {testimonials.map((item) => (
          <TestiModerate
            key={item.id}
            item={item}
            text={item.text}
            user={item.name}
            rating={item.rating}
            onDelete={onDelete}
            onPublic={onPublic}
            />
        ))}
      </div>
    </div>
  </div>
)

export default TestimonialsModerate
