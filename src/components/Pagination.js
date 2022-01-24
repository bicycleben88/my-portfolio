import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin: 2rem 0;
  border-radius: 5px;
  border: 1px solid var(--pink);
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--pink);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--pink);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  a:last-child {
    border: none;
  }
  @media (max-width: 800px) {
    & > * {
      font-size: 0.75em;
      padding: 0.5rem;
    }
    .hide {
      display: none;
    }
  }
`

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
    <PaginationStyles>
      <Link to={`${base}/${prevPage}`} disabled={!hasPrevPage}>
        &#8592; <span className="hide">Back</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          to={`${base}/${i > 0 ? i + 1 : ""}`}
          className={currentPage === 1 && i === 0 ? "current" : ""}
          key={Math.random()}
        >
          {i + 1}
        </Link>
      ))}
      <Link to={`${base}/${nextPage}`} disabled={!hasNextPage}>
        <span className="hide">Next</span> &#8594;
      </Link>
    </PaginationStyles>
  )
}
