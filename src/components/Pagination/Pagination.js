import React, { Component } from "react";

class Pagination extends Component {
  pageNumbers = [];
  maxTabs = 5;
  totalPages = 0;
  totalButtonPages = 0;
  currentTab = 1;
  pages = this.totalPages;
  state = {
    pageNumbers: []
  };

  componentDidMount() {
    this.totalPages = Math.ceil(this.props.totalPosts / this.props.postPerPage);
    this.totalButtonPages = Math.ceil(this.totalPages / this.maxTabs);
    this.currentTab = 1;
    this.pages = this.totalPages;
    this.fillTabs(true);
  }

  fillTabs = flag => {
    let lastNumber = 1;
    if (flag) {
      lastNumber =
        this.pageNumbers.length > 0
          ? this.pageNumbers[this.pageNumbers.length - 1] + 1
          : 1;
    } else {
      lastNumber = this.pageNumbers.length > 0 ? this.pageNumbers[0] : 1;
      lastNumber -= this.maxTabs;
    }
    this.pageNumbers = [];
    if (this.totalButtonPages > 1 && this.currentTab > 1) {
      this.pages = this.totalPages - (this.currentTab - 1) * this.maxTabs;
    } else {
      this.pages = this.maxTabs;
    }

    if (this.currentTab < this.totalButtonPages) {
      for (let i = lastNumber; i < lastNumber + this.maxTabs; i++) {
        this.pageNumbers.push(i);
      }
    } else {
      for (let i = lastNumber; i < lastNumber + this.pages; i++) {
        this.pageNumbers.push(i);
      }
    }
    this.setState({
      pageNumbers: this.pageNumbers
    });
  };

  previousTabPage = () => {
    this.currentTab -= 1;
    console.log(this.currentTab);
    this.fillTabs(false);
  };

  nextTabPage = () => {
    this.currentTab += 1;
    console.log(this.currentTab);
    this.fillTabs(true);
  };
  render() {
    return (
      <nav className="">
        <ul className="pagination">
          {this.currentTab === 1 ? null : (
            <li className="page-item">
              <button
                className="page-link text-white text-center"
                onClick={() => {
                  this.previousTabPage();
                }}
              >
                {"<<"}
              </button>
            </li>
          )}
          {this.state.pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button
                style={{ width: 40 }}
                onClick={() => {
                  this.props.paginate(number);
                }}
                className="page-link text-white text-center"
              >
                {number}
              </button>
            </li>
          ))}
          {this.state.pageNumbers.length < this.maxTabs ? null : (
            <li className="page-item">
              <button
                className="page-link text-white text-center"
                onClick={() => {
                  this.nextTabPage();
                }}
              >
                {">>"}
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
