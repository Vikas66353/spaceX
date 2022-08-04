import { Spin, Modal } from "antd";
import "antd/dist/antd.css";
import "./modal.scss";
import { Root } from "../../../../../typescript/findLaunchDetailsTS";
import { useQuery } from "@apollo/client";
import { FindLaunchDetail } from "../../../../../graphql/quries/findLunchDetails";
import { useLaunchQuery } from "../../../../../generated/graphql";
import convertInFlatObjec from "../../../../../helper/mainTableModalObjFlat";
import { useEffect, useState } from "react";
interface Props {
  rowID: string;
  handleCancel: () => void;
  isModalVisible: boolean;
  showModal:()=>void
}

const MainTableModal = ({ rowID, handleCancel, isModalVisible,showModal }: Props) => {


  const { data, loading } = useLaunchQuery({ variables: { id: rowID } });
  const [modalData, setModalData] = useState<Root>();
  const [testData, setTestData] = useState("hello");


  useEffect(()=>{
    if (loading === false && data) {
      let temp=convertInFlatObjec(data)
      setModalData(temp)
      }
  },[data,loading])
  console.log(modalData)

  if (loading) {
    return <Spin />;
  } else {
    return (
      <div className="container">
        <Modal
        className="tableModal"
          confirmLoading={loading}
          onCancel={handleCancel}
          footer={null}
          bodyStyle={{ height: "500px", width: "544px" }}
          title={
            <div className="nav-container">
              <div className="modal_logo_container" style={{ display: "flex" }}>
                <div className="logo">
                  <img
                    className="logo_img"
                    style={{ height: "72px", width: "72px" }}
                    src="/Assets/satellite.svg"
                    alt=""
                  />
                </div>
                <div className="logo_content" style={{ marginLeft: "15px" }}>
                  <div style={{ display: "flex", margin: "0", padding: "0" }}>
                    <div className="heading">{modalData?.messionName}</div>
                    <div
                      className={`status-container ${
                        modalData?.status.toLowerCase()
                      }`}
                    >
                      {modalData?.status}
                    </div>
                  </div>
                  <div>
                    <h5 className="rocketNameNav">{modalData?.rocketName}</h5>
                  </div>
                  <div>
                    <a href="#">
                      <img src="/Assets/NASA.svg" alt="" />
                    </a>
                    <a href={modalData?.wikipediaLink}>
                      <img src="/Assets/wikipedia.svg" alt="" />
                    </a>
                    <a href={modalData?.videoLink}>
                      <img src="/Assets/youtube.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
          visible={isModalVisible}
        >
          <div>
            <div className="desc">
              <p className="descPara">
                {modalData?.desc}
                <a href={modalData?.wikipediaLink}>wikipedia</a>
              </p>
            </div>
            <div className="info_container">
              <div className="info">
                <label className="infoDetail">Flight Number</label>
                <span className="infoDetail">{modalData?.flightNo}</span>
              </div>
              <div className="info">
                <label className="infoDetail">Mission Name</label>
                <span className="infoDetail">{modalData?.messionName}</span>
              </div>
              <div className="info">
                <label className="infoDetail">Rocket Type</label>
                <span className="infoDetail">{modalData?.rocketType}</span>
              </div>
              <div className="info">
                <label className="infoDetail">Rocket Name</label>
                <span className="infoDetail">{modalData?.rocketName}</span>
              </div>
              <div className="info">
                <label className="infoDetail">Manufacturer</label>
                <span className="infoDetail">
                  {modalData?.manufacturer}
                </span>
              </div>
              <div className="info">
                <label className="infoDetail">Nationality</label>
                <span className="infoDetail">
                  {modalData?.nationality}
                </span>
              </div>
              <div className="info">
                <label className="infoDetail">Launch Date</label>
                <span className="infoDetail">{modalData?.launchDate}</span>
              </div>
              <div className="info">
                <label className="infoDetail">Payload Type</label>
                <span className="infoDetail">
                  {modalData?.payloadType}
                </span>
              </div>
              <div className="info">
                <label className="infoDetail">Orbit</label>
                <span className="infoDetail">
                  {modalData?.orbit}
                </span>
              </div>
              <div className="info">
                <label className="infoDetail">Launch Site</label>
                <span className="infoDetail">{modalData?.launchSite}</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default MainTableModal;
