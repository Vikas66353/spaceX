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
}

const MainTableModal = ({ rowID, handleCancel, isModalVisible }: Props) => {
  // const { data, loading } = useQuery<Root, id>(FindLaunchDetail, {
  //   variables: { id: rowID },
  // });

  const { data, loading } = useLaunchQuery({ variables: { id: rowID } });
  const [modalData, setModalData] = useState<Root|{}>();
  const [testData, setTestData] = useState("hello");


  useEffect(()=>{
    if (loading === false && data) {
      // setModalData(convertInFlatObjec(data))
      // console.log(modalData)
    }
  },[data,loading])
  

  if (loading) {
    return <Spin />;
  } else {
    return (
      <div className="container">
        {/* <Modal
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
                    <h5>{modalData?.rocketName}</h5>
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
              <p>
                {modalData?.desc}
                <a href={modalData?.wikipediaLink}>wikipedia</a>
              </p>
            </div>
            <div className="info_container">
              <div className="info">
                <label>Flight Number</label>
                <span>{modalData?.flightNo}</span>
              </div>
              <div className="info">
                <label>Mission Name</label>
                <span>{modalData?.messionName}</span>
              </div>
              <div className="info">
                <label>Rocket Type</label>
                <span>{modalData?.rocketType}</span>
              </div>
              <div className="info">
                <label>Rocket Name</label>
                <span>{modalData?.rocketName}</span>
              </div>
              <div className="info">
                <label>Manufacturer</label>
                <span>
                  {modalData?.manufacturer}
                </span>
              </div>
              <div className="info">
                <label>Nationality</label>
                <span>
                  {modalData?.nationality}
                </span>
              </div>
              <div className="info">
                <label>Launch Date</label>
                <span>{modalData?.launchDate}</span>
              </div>
              <div className="info">
                <label>Payload Type</label>
                <span>
                  {modalData?.payloadType}
                </span>
              </div>
              <div className="info">
                <label>Orbit</label>
                <span>
                  {modalData?.orbit}
                </span>
              </div>
              <div className="info">
                <label>Launch Site</label>
                <span>{modalData?.launchSite}</span>
              </div>
            </div>
          </div>
        </Modal> */}
      </div>
    );
  }
};

export default MainTableModal;
