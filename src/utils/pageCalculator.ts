export const pageCalculator = (
  totalCount: number,
  pageSize: number
): number => {
  if (!totalCount) {
    return 0
  }

  const pageCount: number = Math.ceil(totalCount / pageSize)
  return pageCount
}
