const labelPriority = {
  big_summ: 3,
  long_term: 1,
  quick_solution: 2,
  recommend: 4
}

function sortPriority(p) {
  return p.main.special_label ? labelPriority[p.main.special_label] || 0 : 0
}

function abDiff(ap, bp, av, bv) {
  return (ap === 0 && bp === 0) ? (bv - av) : (bp - ap)
}

function sortResults(ids, partners, sortInfo) {
  if (ids) {
    return ids.sort((a, b) => {
      const aPriority = sortPriority(partners[a])
      const bPriority = sortPriority(partners[b])
      const aValue = partners[a].sortBy ? partners[a].sortBy[sortInfo.sortBy] || 0 : 0
      const bValue = partners[b].sortBy ? partners[b].sortBy[sortInfo.sortBy] || 0 : 0

      const isBGreater = sortInfo.isSorted ? (bValue - aValue)
        : abDiff(aPriority, bPriority, aValue, bValue)

      return sortInfo.isAscending ? isBGreater*(-1) : isBGreater
    })
  }
  return []
}

export default sortResults
