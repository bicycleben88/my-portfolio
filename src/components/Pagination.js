import { Link } from "gatsby"
import React from "react"

export default function Pagination({
  pageSize,
  skip,
  currentPage,
  base,
  totalCount,
}) {
  const totalPages = Math.ceil(totalCount / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1

  return (
    <div>
      <Link to={`${base}/${prevPage}`} disabled={!hasPrevPage}>
        &#8592; Back
      </Link>
      <Link to={`${base}/${nextPage}`} disabled={!hasNextPage}>
        Next &#8594;
      </Link>
    </div>
  )
}
