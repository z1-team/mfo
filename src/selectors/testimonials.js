export const getUnpublishedTestimonials = ({testimonials, partners}) => (
  testimonials.unpublished.map(id => {
    const testimonial = testimonials.data[id]
    const partner = partners.data[testimonial.partner]
    return {...testimonial, title: partner.main.title}
  })
)

export const getTestimonials = ({testimonials}) => (
  testimonials.selected.map(id => testimonials.data[id])
)

export const getSelectedPartner = ({partners}, id) => (
  partners.data[id] || null
)
