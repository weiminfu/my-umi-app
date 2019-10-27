import React from 'react';
import { Drawer, Button } from 'antd';
import Styles from './He.less';


class LeftDrawer extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    return (
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
          <Drawer
            title="遮罩侧边栏"
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div className={Styles.heBox}>
              <div className="leftDiv">
                <span>标题3</span>
                <p className="pDiv">文字内容</p>
                <div className="myBg">这里给它加一个背景，宽度高度</div>
              </div>
            </div>
          </Drawer>
        </div>
    );
  }
}

export default LeftDrawer;
