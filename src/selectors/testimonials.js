export const getUnpublishedTestimonials = ({testimonials}) => (
  testimonials.unpublished.map(id => testimonials.data[id])
)

export const getTestimonials = ({testimonials}) => (
  testimonials.selected.map(id => testimonials.data[id])
)

export const getSelectedPartner = ({partners}, id) => (
  partners.data[id] || null
)
