import React from 'react'

const Pagination = (props) => {
  return (
    <ul id="page-numbers">
      <div className="pagination">
        <div className="displayed-per-pages"><span>Displayed per pages</span>
          <div className="pages" onClick={props.onSort} >
            {
              props.itemsPerPage.map((item, index) => {
                return (
                  <span className={props.datas.length === item ? "active px-2" : "px-2"} key={index}>{item}</span>
                )
              })
            }
          </div>
        </div>
        <div className="page-numbers">
          <div className="page-count">Pages</div>
          <span className="symbol" onClick={props.prev}>&lt;</span>
          <div className="" >
            {props.renderPageNumbers}
          </div>
          <span className="symbol" onClick={props.next}>&gt;</span>
        </div>
      </div>
    </ul>
  )
}

export default Pagination