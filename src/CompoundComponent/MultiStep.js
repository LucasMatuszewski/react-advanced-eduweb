import React, { useState, useContext, useEffect } from 'react';

// One common context for our Compound Component:
const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {}, // mocked function
  pageIndexes: [],
  updatePageIndexes: () => {},
});

const ProgressBar = () => {
  const { pageIndexes, currentPage } = useContext(WizardContext);

  return (
    <div
      style={{
        width: `100%`,
        height: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 5,
          backgroundColor: 'grey',
          borderRadius: 10,
          transition: 'transform .5s ease-out',
          transform: `scaleX(${currentPage / pageIndexes.length})`,
          transformOrigin: '0% 50%',
        }}
      ></div>
    </div>
  );
};

const Page = ({ children, pageIndex }) => {
  const { changePage, currentPage, updatePageIndexes } = useContext(
    WizardContext
  );

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });
  return currentPage === pageIndex ? (
    <strong onClick={() => changePage(pageIndex)}>{children} </strong>
  ) : (
    <span onClick={() => changePage(pageIndex)}>{children} </span>
  );
};

const PageContent = ({ children, pageIndex }) => {
  const { changePage, currentPage } = useContext(WizardContext);

  return currentPage === pageIndex ? (
    <div onClick={() => changePage(pageIndex)}>{children} </div>
  ) : null;
};

const Controls = () => {
  const { changePage, currentPage, pageIndexes } = useContext(WizardContext);
  return (
    <div>
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pageIndexes.length}
      >
        Next
      </button>
      {currentPage === pageIndexes.length ? <button>Submit</button> : null}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = (pageIndex) => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  // First way to check number of children of Wizard component:
  // we can use React.Children.map method (quite similar to Array.map() but not the same)
  const totalPageNumber = React.Children.map(children, (child) => {
    return child.props.pageIndex ? child : null;
  }).length;
  console.log('totalPageNumber', totalPageNumber);
  // (second way is to add all indexes to context in Page component and count them)

  return (
    <WizardContext.Provider
      value={{ currentPage, changePage, pageIndexes, updatePageIndexes }}
    >
      {children}
    </WizardContext.Provider>
  );
};

// Good pattern is to export Compound Components as one object:
export { Page, ProgressBar, PageContent, Controls, Wizard };
