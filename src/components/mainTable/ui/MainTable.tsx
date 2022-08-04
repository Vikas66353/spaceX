import { Root } from "../../../typescript/launchedHistoryTS";
import "antd/dist/antd.css";
import { Table, Tag } from "antd";
import { useState } from "react";
import "./mainTable.scss";
import Modal from "./modal";
type Props = {
  tableData: Root[];
  loading: boolean;
};

const MainTable = ({ tableData, loading }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rowID, setRowID] = useState<string>();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Launched (UTC)",
      dataIndex: "launchDate",
      key: "id",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "id",
      
    },
    {
      title: "Mission",
      dataIndex: "missionName",
      key: "id",
    },
    {
      title: "Orbit",
      dataIndex: "orbit",
      key: "id",
    },
    {
      title: "Launch Status",
      dataIndex: "status",
      key: "id",
      render: (record: any) => (
          <Tag
            className={record.toLowerCase()}
            style={{ borderRadius: 20,
            width:"58px",
            height:"21px",
            fontWeight:500,
            fontSize:"12px",
            lineHeight:"13px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:"4px , 12px, 4px ,12px"
           }}
          >
            {record}
          </Tag>
      ),
    },
    {
      title: "Rocket",
      dataIndex: "rocketName",
      key: "id",
    },
  ];

  let locale = {
    emptyText: "No results found for the specifide filter",
  };

  return (
    <main>
      <Table className="mainTable" 
        onRow={(record) => {
          return {
            onClick: (event) => {
              setRowID(record.id)
              showModal();
            },
          };
        }}
        locale={locale}
        loading={loading}
        dataSource={tableData}
        columns={columns}
      />
      ;
      {rowID && (
        <Modal
        showModal={showModal}
          rowID={rowID}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
      )}
    </main>
  );
};

export default MainTable;
