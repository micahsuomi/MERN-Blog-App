import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';

const Paginate = () => {
    
    const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        console.log('working here')
        setCurrentPage(selectedPage);
        setOffset(offset);
    
      }
        return (
            <div>
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
              </div> 
        )
    
}

export default Paginate;
