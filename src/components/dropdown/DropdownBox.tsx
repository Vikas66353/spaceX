import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Menu, message, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import "./dropdown.scss"
import Main_Table from '../mainTable/Main_Table';
import {GetLaunchedHistory} from "../../graphql/quries/launchesPast"
import {useLazyQuery} from '@apollo/client'
import {Root,limit} from "../../typescript/launchedHistoryTS"
import { Spin } from 'antd';

const DropdownBox = () => {
  const [tableData,setTableData]=useState<Root>()
  const [getLaunchData,{data,loading}]=useLazyQuery<Root,limit>(GetLaunchedHistory,{variables:{limit:109}});
  var id=0;
  useEffect(()=>{
    getLaunchData();
    if(loading===false && data){
    setTableData(data);
    }
  },[loading,data])

  const updateTableData=()=>{
    if(loading===false && data){
      setTableData(data);
      }
  }


  const onClick: MenuProps['onClick'] = ({ key }) => {
    if(key==="1"){
      updateTableData();
      id=1;
      
    }
    if(key==="2"){
      updateTableData();
      setTableData((tableData)=>{  return {
        ...tableData,launchesPast:tableData?.launchesPast?.filter((launch)=>launch.upcoming===true)
      }})
      id=2;
    }
    if(key==="4"){
      updateTableData();
      setTableData((tableData)=>{ return {
        ...tableData,launchesPast:tableData?.launchesPast?.filter((launch)=>launch.launch_success===false)
      }})
      id=4;
      
    }
    if(key==="3"){
      updateTableData();
      setTableData((tableData)=>{return {
        ...tableData,launchesPast:tableData?.launchesPast?.filter((launch)=>launch.launch_success===true)
      }})
      id=3;
    }
  };

  const menu = (
    <Menu className='menu-items'
    style={{
      width:"170px",
      background:"#F4F5F7"
    }}
      onClick={onClick}
      items={[
        {
          label: 'All Launches',
          key: '1',
        },
        {
          label: 'Upcoming Launches',
          key: '2',
        },
        {
          label: 'Successfull Lanches',
          key: '3',
        },
        {
          label: 'Failed Lanuches',
          key: '4',
        },
      ]}
    />
  );
  return (
    <div className='main-container'>
    <div className="drop-box">
    <Dropdown  overlay={menu}>
    <a onClick={e => e.preventDefault()}>
      <Space > 
        <div className='dropBox-head'>
        <img src="/Assets/Vector.svg" alt="" /> All Launches
        </div>
        <DownOutlined  style={{color:"#4B5563"}}/>
      </Space>
    </a>
  </Dropdown>
    </div>
    <div className='table'>
    {tableData&&<Main_Table loading={loading}  tableData={tableData}/>}
    </div>
  </div>
  )
}

export default DropdownBox