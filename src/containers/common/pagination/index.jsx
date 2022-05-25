import React from 'react'

const Pagination = (props) => {
  const pages = [5, 10, 15, 20]


  return (
    <div className="pagination">
      <div className="displayed-per-pages"><span>Displayed per pages</span>
        <div className="pages" onClick={props.onSort} >
          {
            pages.map((page, index) => {
              return (
                <span className={props.data.length === page ? "active px-2" : "px-2"} key={index}>{page}</span>
              )
            })
          }
        </div>
      </div>
      <div className="page-numbers">
        <div className="page-count">Pages</div>
        <span className="symbol">&lt;</span>
        <div className="" >
          <span className="px-2">
            {props.data[props.data.length-1].id ===20 ? "hello":"not hello"}
          </span>
        </div>
        <span className="symbol">&gt;</span>
      </div>
    </div>
  )
}

export default Pagination