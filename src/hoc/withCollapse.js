import React from 'react';

const withCollapse = (WrappedComponent) => {
  return class WithCollapse extends React.Component {
    state = {
      isCollapsed: false,
    };

    toggle = () => {
      this.setState((prevState) => ({
        isCollapsed: !prevState.isCollapsed,
      }));
    };

    render() {
      return (
        <WrappedComponent
          isCollapsed={this.state.isCollapsed}
          toggle={this.toggle}
        />
      );
    }
  };
};

export default withCollapse;
