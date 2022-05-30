
import React from 'react';
import getCreatedXDaysAgo from '../../../utils/getCreatedXDaysAgo';
import Pagination from "../../common/pagination";

const FrequentlyAskedQuestion = ({ datas, allData, page, onSort }) => {
    class FaqsSection extends React.Component {
        constructor() {
            super();
            this.state = {
                data: allData,
                currentPage: 1,
                dataPerPage: page
            };
            this.handleClick = this.handleClick.bind(this);
            this.next = this.next.bind(this);
            this.prev = this.prev.bind(this);
        }

        handleClick(event) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }

        next() {
            if (this.state.currentPage < (allData.length / page)) {
                this.setState({
                    currentPage: Number(this.state.currentPage) + 1
                })
            }


        }
        prev() {

            if (this.state.currentPage >1) {
                this.setState({
                    currentPage: Number(this.state.currentPage) - 1
                })
            }
        }

        render() {
            const { data, currentPage, dataPerPage } = this.state;
            const indexOfLastData = currentPage * dataPerPage;
            const indexOfFirstData = indexOfLastData - dataPerPage;
            const currentData = data.slice(indexOfFirstData, indexOfLastData);

            const renderData = currentData.map((datas, index) => {
                return (
                    <div key={index}>
                        <div className="que-ans">
                            <div className="question">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: datas.question
                                    }}
                                />
                            </div>
                            <div className="answer">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: datas.answer
                                    }}
                                />
                            </div>
                            <div className="time">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: `${getCreatedXDaysAgo(datas.time)} days ago`
                                    }}
                                />
                            </div>
                        </div>
                        <div className='divider'></div>
                    </div>
                )
            });

            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
                pageNumbers.push(i);
            }
            const itemsPerPage = [5, 10, 15, 20]
            const renderPageNumbers = pageNumbers.map(number => {
                return (
                    <span className={this.state.currentPage === number ? "active px-2" : "px-2"} key={number} onClick={this.handleClick} id={number} type="button">{number}</span>
                );
            });

            return (
                <div>
                    <Pagination onSort={onSort} itemsPerPage={itemsPerPage} datas={datas} renderPageNumbers={renderPageNumbers} prev={this.prev} next={this.next} />
                    <ul>
                        {renderData}
                    </ul>
                    <Pagination onSort={onSort} itemsPerPage={itemsPerPage} datas={datas} renderPageNumbers={renderPageNumbers} prev={this.prev} next={this.next} />
                </div>
            );
        }
    }

    return (
        <div>
            <div className="divider"></div>
            <FaqsSection />
        </div>
    )
}

export default FrequentlyAskedQuestion