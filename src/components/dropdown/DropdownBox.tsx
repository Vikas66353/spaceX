import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Menu, Space } from "antd";
import { useEffect, useState } from "react";
import "./dropdown.scss";
import Main_Table from "../mainTable/Main_Table";
import { GetLaunchedHistory } from "../../graphql/quries/launchesPast";
import { useLazyQuery } from "@apollo/client";
import { Root } from "../../typescript/launchedHistoryTS";
import { Spin } from "antd";
import convertInFlatObject from "../../helper/FlatMainTableObject";
import {useLaunchesPastLazyQuery,Query} from "../../generated/graphql";

const DropdownBox = () => {
  // const [getLaunchData, { data, loading }] = useLazyQuery<Root, limit>(
  //   GetLaunchedHistory,
  //   { variables: { limit: 109 } }
  // );

  const [getLaunchData,{ data, loading}] = useLaunchesPastLazyQuery({variables: {limit: 109},});

  const [tableData, setTableData] = useState<Root[]>();
  const [tempData,setTempData]=useState<Root[]>();

  // convertInFlatObject();
  
  useEffect(() => {
    getLaunchData();
    // console.log(data?)
    
    if (loading === false && data) {
      let temp=convertInFlatObject(data);
      setTempData(temp); 
      setTableData(temp);
    }
    console.log(tableData)
  }, [loading, data]);


  const updateTableData = () => {
    if (loading === false && data) {
      setTableData(tempData);
    }
  };

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      updateTableData();
    }
    if (key === "2") {
      updateTableData();
      setTableData((tableData)=>{
        return tableData?.filter((data)=>data.status==="Upcoming");
      });
    }
    if (key === "4") {
      updateTableData();
      setTableData((tableData)=>{
        return tableData?.filter((data)=>data.status==="Failed");
      });
    }
    if (key === "3") {
      updateTableData();
      setTableData((tableData)=>{
        return tableData?.filter((data)=>data.status==="Success");
      });
    }
  };

  const menu = (
    <Menu
      className="menu-items"
      style={{
        width: "170px",
        background: "#F4F5F7",
      }}
      onClick={onClick}
      items={[
        {
          label: "All Launches",
          key: "1",
        },
        {
          label: "Upcoming Launches",
          key: "2",
        },
        {
          label: "Successfull Lanches",
          key: "3",
        },
        {
          label: "Failed Lanuches",
          key: "4",
        },
      ]}
    />
  );

  if (loading === true) {
    return (
      <div className="spin">
        <Spin size="large" />
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <div className="drop-box">
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="dropBox-head">
                  <img src="/Assets/Vector.svg" alt="" /> All Launches
                </div>
                <DownOutlined style={{ color: "#4B5563" }} />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="table">
          {tableData && <Main_Table loading={loading} tableData={tableData} />}
        </div>
      </div>
    );
  }
};

export default DropdownBox;
