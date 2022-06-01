import React from 'react'

const Pagination = (props) => {
  return (
    <ul id="page-numbers">
      <div className="pagination noselect">
        <div className="displayed-per-pages">
          <span>Displayed per pages</span>
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
        <div className="page-numbers-part">
          <div className="page-count"><span>Pages</span></div>
          <div className="symbol" onClick={props.prev}><span>&lt;</span></div>
          <div className="page-numbers" >
            {props.renderPageNumbers}
          </div>
          <div className="symbol" onClick={props.next}><span>&gt;</span></div>
        </div>
      </div>
    </ul>
  )
}

export default Pagination