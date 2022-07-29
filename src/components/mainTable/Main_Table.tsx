import {Root} from "../../typescript/launchedHistoryTS"
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';
import { useState } from "react";
import "./mainTable.scss"
import Modal from "./modal/MainTableModal"
type Props={
  tableData:Root,
  loading:boolean,
}

const Main_Table = ({tableData,loading}:Props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rowID,setRowID]=useState<number>();
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    

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
              <Tag className={record.upcoming?"upcoming_text": text?"success_text":"failed_text"} style={{borderRadius:20}} color={record.upcoming?"#FEF3C7":text?"#DEF7EC":"#FDE2E1"} key={record.upcoming?"Upcoming": text?"Success":"Failed"}>    
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
      <main>
      <Table  rowClassName="main_table_row" onRow={(record)=>{return { onClick:event=>{setRowID(record.id);showModal()}}}} locale={locale} loading={loading} dataSource={tableData?.launchesPast} className='main_table'  columns={columns} />; 
      {rowID&&<Modal rowID={rowID} handleCancel={handleCancel} isModalVisible={isModalVisible}/>}
      </main>
  )
}

export default Main_Table
