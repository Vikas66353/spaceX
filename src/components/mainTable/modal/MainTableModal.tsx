import { Spin, Modal } from "antd";
import "antd/dist/antd.css";
import "./modal.scss";
import {Root} from "../../../typescript/findLaunchDetailsTS"
import { useQuery } from "@apollo/client";
import { FindLaunchDetail } from "../../../graphql/quries/findLunchDetails";
import {useLaunchQuery} from "../../../generated/graphql";
import  convertInFlatObjec from "../../../helper/mainTableModalObjFlat"
interface Props {
  rowID: string;
  handleCancel: () => void;
  isModalVisible: boolean;
}

const MainTableModal = ({ rowID, handleCancel, isModalVisible }: Props) => {
  // const { data, loading } = useQuery<Root, id>(FindLaunchDetail, {
  //   variables: { id: rowID },
  // });

  const { data, loading, error } = useLaunchQuery({variables: {id:rowID},});

  if(data){
    convertInFlatObjec(data);
  }

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
                    <div className="heading">{data?.launch.mission_name}</div>
                    <div
                      className={`status-container ${
                        data?.launch.upcoming
                          ? "upcoming"
                          : data?.launch.launch_success
                          ? "success"
                          : "failed"
                      }`}
                    >
                      {data?.launch.upcoming
                        ? "Upcoming"
                        : data?.launch.launch_success
                        ? "Success"
                        : "Failed"}
                    </div>
                  </div>
                  <div>
                    <h5>{data?.launch.rocket.rocket_name}</h5>
                  </div>
                  <div>
                    <a href="#">
                      <img src="/Assets/NASA.svg" alt="" />
                    </a>
                    <a href={data?.launch.links.wikipedia}>
                      <img src="/Assets/wikipedia.svg" alt="" />
                    </a>
                    <a href={data?.launch.links.video_link}>
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
                {data?.launch.rocket.rocket.description}
                <a href={data?.launch.links.wikipedia}>wikipedia</a>
              </p>
            </div>
            <div className="info_container">
              <div className="info">
                <label>Flight Number</label>
                <span>{data?.launch.rocket.first_stage.cores[0].flight}</span>
              </div>
              <div className="info">
                <label>Mission Name</label>
                <span>{data?.launch.mission_name}</span>
              </div>
              <div className="info">
                <label>Rocket Type</label>
                <span>{data?.launch.rocket.rocket_type}</span>
              </div>
              <div className="info">
                <label>Rocket Name</label>
                <span>{data?.launch.rocket.rocket_name}</span>
              </div>
              <div className="info">
                <label>Manufacturer</label>
                <span>
                  {data?.launch.rocket.second_stage.payloads[0].manufacturer}
                </span>
              </div>
              <div className="info">
                <label>Nationality</label>
                <span>
                  {data?.launch.rocket.second_stage.payloads[0].nationality}
                </span>
              </div>
              <div className="info">
                <label>Launch Date</label>
                <span>{data?.launch.launch_date_local}</span>
              </div>
              <div className="info">
                <label>Payload Type</label>
                <span>
                  {data?.launch.rocket.second_stage.payloads[0].payload_type}
                </span>
              </div>
              <div className="info">
                <label>Orbit</label>
                <span>
                  {data?.launch.rocket.second_stage.payloads[0].orbit}
                </span>
              </div>
              <div className="info">
                <label>Launch Site</label>
                <span>{data?.launch.launch_site.site_name}</span>
              </div>
            </div>
          </div>
        </Modal> */}
      </div>
    );
  }
};

export default MainTableModal;
