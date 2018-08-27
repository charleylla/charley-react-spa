import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import style from "./style.less";
export class Tab extends Component {
  constructor(props){
    super(props);
    this.init();
  }
  init(){
    this.tabConfig = [
      {
        title:"首页",
        path:"/",
        iconUrl:"https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIconUrl:"https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
      },
      {
        title:"订单",
        path:"/order",
        iconUrl:"https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIconUrl:"https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
      },
      {
        title:"我的",
        path:"/mine",
        iconUrl:"https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
        selectedIconUrl:"https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg",
      },
    ];
  }
  renderTabIconItem(imgUrl){
    const style = {
      width:"24px",
      height:"24px",
      background:`url(${imgUrl}) center center /  21px 21px no-repeat`,
    };
    return(
      <div style={style}></div>
    );
  }
  renderTab(){
    const TabItems = this.tabConfig.map(config => {
      return(
        <TabBar.Item
          title={config.title}
          key={config.title}
          icon={ this.renderTabIconItem(config.iconUrl) }
          selectedIcon={ this.renderTabIconItem(config.selectedIconUrl) }/>
      );
    });
    return(
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white">
        { TabItems }
      </TabBar>
    );
  }
  render(){
    const Tab = this.renderTab();
    return (
      <div className={style.tabBox}>
        { Tab }
      </div>
    );
  }
}