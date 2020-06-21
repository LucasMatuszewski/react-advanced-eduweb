import React from 'react';
// Good pattern is to import CompoundComponents as one Object:
import * as MultiStep from './MultiStep'; // it's more clear when we use it with tha same name

// Before Hooks we used Class with static function for Compound Components:
class OldCompoundComponent extends React.Component {
  // static functions could be used not only with an Object of a class but also with the class directly.
  static Page = (props) => <p>{props.children}</p>;

  render() {
    return (
      <div>
        <p>
          <strong>Old Compound Component as a Class</strong>
        </p>
        {this.props.children}
      </div>
    );
  }
}

const CompoundComponent = () => {
  return (
    <div>
      <h4 className="title is-4">
        Multi-Page Wizard as one Compound Component:
      </h4>
      <MultiStep.Wizard>
        <MultiStep.Page pageIndex={1}>Page 1</MultiStep.Page>
        <MultiStep.Page pageIndex={2}>Page 2</MultiStep.Page>
        <MultiStep.Page pageIndex={3}>Page 3</MultiStep.Page>
        <MultiStep.ProgressBar />
        <MultiStep.PageContent pageIndex={1}>
          This is a content of Page 1
        </MultiStep.PageContent>
        <MultiStep.PageContent pageIndex={2}>
          This is a content of Page 2
        </MultiStep.PageContent>
        <MultiStep.PageContent pageIndex={3}>
          This is a content of Page 3
        </MultiStep.PageContent>
        <MultiStep.Controls />
      </MultiStep.Wizard>
      <hr />
      <OldCompoundComponent>
        <OldCompoundComponent.Page>Page 1</OldCompoundComponent.Page>
        <p>Lorem ipsum dolor...</p>
      </OldCompoundComponent>
    </div>
  );
};

export default CompoundComponent;
