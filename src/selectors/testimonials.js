export const getTestimonials = ({testimonials}) => (
  testimonials.unpublished.map(id => testimonials.data[id])
)
