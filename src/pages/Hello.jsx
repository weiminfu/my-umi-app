import React from 'react';
import Styles from './Hello.less'
import LeftDrawer from '@/pages/LeftDrawer';

function Hello() {
  return (
    <div className={Styles.divBox}>
      <p className="hello">hello world</p>
      <span>哈哈大笑</span>
      {/* 左侧栏 */}
      <div className="leftDiv">
        <span>标题3</span>
        <p className="pDiv">文字内容</p>
        <div className="myBg">这里给它加一个背景，宽度高度</div>
      </div>
      <LeftDrawer/>
    </div>
  );
}


export default Hello;
