import React from 'react'

const Pagination = (props) => {
  const itemsPerPage = [5, 10, 15, 20]
  const pageNo = [1, 2, 3, 4, 5, 6, 7, 8, 9]


  return (
    <div className="pagination">
      <div className="displayed-per-pages"><span>Displayed per pages</span>
        <div className="pages" onClick={props.onSort} >
          {
            itemsPerPage.map((item, index) => {
              return (
                <span className={props.data.length === item ? "active px-2" : "px-2"} key={index}>{item}</span>
              )
            })
          }
        </div>
      </div>
      <div className="page-numbers">
        <div className="page-count">Pages</div>
        <span className="symbol">&lt;</span>
        <div className="" >
          {
            pageNo.map((page, index) => {
              return (
                <span className={"px-2"} key={index}>{page}</span>
              )
            })
          }
        </div>
        <span className="symbol">&gt;</span>
      </div>
    </div>
  )
}

export default Pagination