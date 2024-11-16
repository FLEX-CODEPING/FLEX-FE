import {
  doubleRightAngle,
  leftAngle,
  rightAngle,
} from '@/app/constants/iconPath';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Icons from './Icons';

interface PaginationProps {
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    onPageChange(selectedItem);
  };

  const handleNextFivePages = () => {
    const nextPage = Math.min(currentPage + 4, totalPages - 1);
    setCurrentPage(nextPage);
    onPageChange({ selected: nextPage });
  };

  const handlePrevFivePages = () => {
    const prevPage = Math.max(currentPage - 4, 0);
    setCurrentPage(prevPage);
    onPageChange({ selected: prevPage });
  };

  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= totalPages - 1;

  return (
    <div className="flex-center h-[40px] w-full gap-3 text-gray-1">
      <button
        type="button"
        onClick={handlePrevFivePages}
        className="translate rotate-180"
        disabled={isAtStart}
      >
        <Icons
          name={{
            ...doubleRightAngle,
            fill: isAtStart ? '#ccc' : doubleRightAngle.fill,
          }}
        />
      </button>

      <ReactPaginate
        className="flex-center h-[40px] gap-3"
        previousLabel={
          <Icons
            name={{
              ...leftAngle,
              fill: isAtStart ? '#ccc' : leftAngle.fill,
            }}
          />
        }
        nextLabel={
          <Icons
            name={{
              ...rightAngle,
              fill: isAtEnd ? '#ccc' : rightAngle.fill,
            }}
          />
        }
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        activeClassName="active text-main-1 font-semibold"
        breakLabel="..."
        renderOnZeroPageCount={null}
      />

      <button type="button" onClick={handleNextFivePages} disabled={isAtEnd}>
        <Icons
          name={{
            ...doubleRightAngle,
            fill: isAtEnd ? '#ccc' : doubleRightAngle.fill,
          }}
        />
      </button>
    </div>
  );
};

export default Pagination;
