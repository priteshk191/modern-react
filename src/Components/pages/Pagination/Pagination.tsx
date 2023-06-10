import React, { useState, useEffect, useRef } from "react";
import styles from "./pagination.module.scss";

interface PaginationProps {
  data: { id: number; name: string }[];
  itemsPerPage: number;
  pagesToShow: number;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  itemsPerPage,
  pagesToShow,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef<HTMLUListElement>(null);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationLinks = () => {
    const links = [];
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (startPage > 1) {
      links.push(
        <li key={1}>
          <a
            href="#"
            className={currentPage === 1 ? styles.active : ""}
            onClick={() => handlePageChange(1)}
          >
            1
          </a>
        </li>
      );
      if (startPage > 2) {
        links.push(<li key="ellipsis-start">...</li>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <li key={i}>
          <a
            href="#"
            className={currentPage === i ? styles.active : ""}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        links.push(<li key="ellipsis-end">...</li>);
      }
      links.push(
        <li key={totalPages}>
          <a
            href="#"
            className={currentPage === totalPages ? styles.active : ""}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </a>
        </li>
      );
    }

    return links;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.paginationAlignment}>
      <h2>Custom Pagination</h2>

      <ul className={styles.pagination} ref={paginationRef}>
        <li>
          <a
            href="#"
            className={currentPage === 1 ? styles.disabled : ""}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &laquo;
          </a>
        </li>
        {renderPaginationLinks()}
        <li>
          <a
            href="#"
            className={currentPage === totalPages ? styles.disabled : ""}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &raquo;
          </a>
        </li>
      </ul>

      <div>
        {currentItems.map((item) => (
          <div key={item.id}>{/* Render your item data here */}</div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
