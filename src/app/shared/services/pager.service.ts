const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export class PagerService {
    private pageSize = 10;

    public getPager(totalPages: number, currentPage = 0) {
      let startPage = 0;
      let endPage = 0;
      if (totalPages > 0) {
        startPage = 1;
        endPage = totalPages < this.pageSize ? totalPages : this.pageSize;
        currentPage = 0;
      }

      const pages = range(startPage, endPage, 1);

      return {
        currentPage,
        totalPages,
        startPage,
        endPage,
        pages,
      };
    }

    public getNextPageSet(totalPages: number, currentPage = 0, startPage = 0, endPage = 0) {
      if (totalPages > endPage) {
        currentPage = endPage;
        startPage = endPage + 1;
        endPage = endPage + this.pageSize > totalPages ? totalPages : endPage + this.pageSize;
      }

      const pages = range(startPage, endPage, 1);

      return {
        currentPage,
        totalPages,
        startPage,
        endPage,
        pages,
      };
    }

    public getPrevPageSet(totalPages: number, currentPage = 0, startPage = 0, endPage = 0) {
      if (totalPages > 0 && startPage > 1) {
        endPage = startPage - 1;
        startPage = startPage - this.pageSize;
        currentPage = startPage - 1;
      }

      const pages = range(startPage, endPage, 1);

      return {
        currentPage,
        totalPages,
        startPage,
        endPage,
        pages,
      };
    }

    public getFirstPage(totalPages: number, currentPage = 0, startPage = 0, endPage = 0) {
      if (totalPages > 0) {
        startPage = 1;
        endPage = totalPages < this.pageSize ? totalPages : this.pageSize;
        currentPage = 0;
      }

      const pages = range(startPage, endPage, 1);

      return {
        currentPage,
        totalPages,
        startPage,
        endPage,
        pages,
      };
    }

    public getLastPage(totalPages: number, currentPage = 0, startPage = 0, endPage = 0) {
      if (totalPages >= this.pageSize ) {
        startPage = Math.floor((totalPages-1) / this.pageSize) * this.pageSize + 1;
        endPage = totalPages;
        currentPage = totalPages - 1;
      }
      else {
        startPage = 1;
        endPage = totalPages;
        currentPage = totalPages - 1;
      }

      const pages = range(startPage, endPage, 1);

      return {
        currentPage,
        totalPages,
        startPage,
        endPage,
        pages,
      };
    }
}
