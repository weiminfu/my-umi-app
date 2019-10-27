import React from 'react';
import Styles from './index.less'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={Styles.test}>
        <h1>这是标题</h1>
      </div>
    );
  }
}

export default Hello;
