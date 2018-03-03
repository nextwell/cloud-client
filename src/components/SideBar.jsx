import React from 'react';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class SideBar extends React.Component {
  // submenu keys of first level

  render() {
    return (
      <Menu
        mode="inline"
        style={{ height: "100%" }}
        defaultSelectedKeys={['1']}
      >
          <Menu.Item key="1">
              <Icon type="home" />
              Все файлы
          </Menu.Item>
          <Menu.Item key="2">
              <Icon type="folder" />
              Папка 1
          </Menu.Item>
          <Menu.Item key="3">
              <Icon type="folder" />
              Папка 2
          </Menu.Item>
          <Menu.Item key="4">
              <Icon type="folder" />
              Папка 3
          </Menu.Item>
          <Menu.Item key="5">
              <Icon type="folder" />
              Папка 4
          </Menu.Item>
          <Menu.Item key="6">
              <Icon type="folder" />
              Папка 5
          </Menu.Item>
          <Menu.Item key="7">
              <Icon type="setting" />
              Настройки
          </Menu.Item>
          <Menu.Item key="8">
              <Icon type="logout" />
              Выйти
          </Menu.Item>
      </Menu>
    );
  }
}

export { SideBar };