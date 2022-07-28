import React, {useState} from 'react'
import {GetLaunchedHistory} from "../../graphql/quries/launchesPast"
import {useQuery } from '@apollo/client'
import {Root,limit} from "../../typescript/launchedHistoryTS"
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';
import Navbar from '../navbar/Navbar';
import "./mainTable.scss"
import LaunchDetails from "../LaunchDetails/LaunchDetails"


const Main_Table = () => {
    const {data,loading,error}=useQuery<Root,limit>(GetLaunchedHistory,{variables:{limit:109}});
    var color;

    // data?.launchesPast.map((launch)=>{
    //   console.log(launch)
    // })

    console.log(data?.launchesPast.length)

    // for (var i=data?.launchesPast.length;i>=0;i--)

    const columns = [
      {
        title: 'No.',
        dataIndex: 'id',
        key: 'id',


      },
      {
        title: 'Launched (UTC)',
        dataIndex: 'launch_date_local',
        key: 'id',
      },
      {
        title: 'Location',
        dataIndex: 'launch_site',
        key: 'id',
        render: (item: { [x: string]: any; }):any => item["site_name"]
      },
      {
        title: 'Mission',
        dataIndex: 'mission_name',
        key: 'id',
      },
      {
        title: 'Orbit',
        dataIndex: 'rocket',
        key: 'id',
        render: (item: { [x: string]: any; }):any => item["second_stage"]["payloads"][0]["orbit"]
      },
      {
        title: 'Launch Status',
        dataIndex: 'launch_success',
        key: 'id',
        render: (text: boolean, record:any) => (
          <>
              <Tag className={record.upcoming?"upcoming_text": text?"success_text":"failed_text"} style={{borderRadius:20}} color={record.upcoming?"#FEF3C7":text?color="#DEF7EC":"#FDE2E1"} key={record.upcoming?"Upcoming": text?"Success":"Failed"}>    
              {record.upcoming?"Upcoming": text?"Success":"Failed"}
              </Tag>
          </>
        )
      },
      {
        title: 'Rocket',
        dataIndex: 'rocket',
        key: 'id',
        render: (item: { [x: string]: any; }):any => item["rocket_name"]
      },
    ];

    let locale={
      emptyText:"No results found for the specifide filter"
    }

  return (
    <div>
      <Navbar/>
      <main>
      <div className="table_container">
      <Table  rowClassName="main_table_row" onRow={(record)=>{return { onClick:event=>{}}}} locale={locale} loading={loading} dataSource={data?.launchesPast} className='main_table'  columns={columns} />; 
      </div>
      <LaunchDetails/>
      </main>
    </div>
  )
}

export default Main_Table