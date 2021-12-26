import React from "react"

export default function Pagination({
  pageSize,
  skip,
  currentPage,
  base,
  totalCount,
}) {
  console.log(pageSize, skip, currentPage, base, totalCount)
  return <div>I'm a pagination station</div>
}
