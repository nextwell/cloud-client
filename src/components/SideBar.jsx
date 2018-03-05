import React from 'react';

import { Menu, Icon, Button } from 'antd';

class SideBar extends React.Component {

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
         
          <Menu.Item key="7">
              <Icon type="setting" />
              Настройки
          </Menu.Item>
          <Menu.Item key="8">
              <Button icon="logout" href="/logout">Выйти</Button>
          </Menu.Item>
      </Menu>
    );
  }
}

export { SideBar };