import React from 'react';
import ReactDOM from 'react-dom';
import SplitLayout from '../lib/SplitLayout';

class Example extends React.Component {
  render() {
    return (
      <SplitLayout
        onChange={this.onChange}
        initialSizes={[100, 300, 100, null]}
        minimumSizes={[100, 100, 100, 100]}
        maximumSizes={[null, null, 600, null]}>
        <div><h1>Hello</h1></div>
        <div><h1>World</h1></div>
        <div><h1>Foo</h1></div>
        <SplitLayout
          direction="horizontal"
          initialSizes={[50,50,null]}
          onChange={this.onChange}>
          <div><h1>Vertical 1</h1></div>
          <div><h1>Vertical 2</h1></div>
          <div><h1>Vertical 3</h1></div>
        </SplitLayout>
      </SplitLayout>
    );
  }

  onChange(sizes) {
    const total = sizes[0] + sizes[1]
    console.log("size = ", sizes, total)
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
