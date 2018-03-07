import React from 'react';

import MarkDown from './MarkDown.jsx';


import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Layout } from 'antd';

const { Content } = Layout;

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


export default class Settings extends React.Component {
  render() {

    return (
    	<Layout>
    		<Content style={{ margin: '24px 16px 0', height: 'auto' }}>
		        <div style={{ padding: 24, background: '#fff', height: '100%' }}>
		        	<Form onSubmit={this.handleSubmit}>
				        <FormItem
				 
				          label="E-mail"
				        >
				            <Input />
				        </FormItem>
				        <FormItem
				     
				          label="Password"
				        >
				         
				            <Input type="password" />

				        </FormItem>
				        <FormItem
				    
				          label="Confirm Password"
				        >
				          
				            <Input type="password"  />
			
				        </FormItem>
				       
				        <FormItem>
				          <Button type="primary" htmlType="submit">Сохранить</Button>
				        </FormItem>
				      </Form>
		        	

		        	

		        </div>
		    </Content>
		    <MarkDown />
    	</Layout>
      
    );
  }
}