import ReactPaginate from 'react-paginate';


import React, { Component } from 'react'

class Paginate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            perPage: 6,
            currentPage: 0,
        }
    }
    

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        console.log('working here')
        this.setState({
          currentPage: selectedPage,
          offset: offset
        }, () => {
        this.props.paginate();
        })
      }
    render() {
        console.log(this.state)
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
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
              </div> 
        )
    }
}

export default Paginate;
