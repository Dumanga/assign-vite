import "./ASG_2025_02_17_1.css";
import dp from "../assets/dp.jpg";

const Assignment22 = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="user-details-box">
          <div className="profile-image">
            <img src={dp} alt="Lucia Alvarez" />
          </div>
          <h1 className="profile-name">Lucia Alvarez</h1>
          <h2 className="profile-occupation">Photographer</h2>
          <div className="profile-details">
            <div className="detail-row">
              <span className="detail-label">Age</span>
              <div className="detail-bar age-bar"></div>
            </div>
            <div className="detail-row">
              <span className="detail-label">Education</span>
              <div className="detail-bar education-bar"></div>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <div className="detail-bar location-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="user-overview">
          <div className="overview-card">
            <div className="card-header">
              <h3>Bio</h3>
            </div>
            <div className="card-body">
              {/* <p>Sample text</p> */}
              <div className="overview-bar"></div>
              <div className="overview-bar"></div>
              <div className="overview-bar"></div> 
              <div className="overview-bar"></div>
            </div>
          </div>
          <div className="overview-card">
            <div className="card-header">
              <h3>Goals</h3>
            </div>
            <div className="card-body">
              {/* <p>Sample text</p> */}
              <div className="overview-bar"></div>
              <div className="overview-bar"></div>
              <div className="overview-bar"></div> 
              <div className="overview-bar"></div>
            </div>
          </div>
        </div>
        <div className="user-overview">
          <div className="overview-card">
            <div className="card-header">
              <h3>Motivations</h3>
            </div>
            <div className="card-body">
              {/* <p>Sample text</p> */}
              <div className="overview-bar"></div>
              <div className="overview-bar"></div>
              <div className="overview-bar"></div> 
              <div className="overview-bar"></div>
            </div>
          </div>
          <div className="overview-card">
            <div className="card-header">
              <h3>Concerns</h3>
            </div>
            <div className="card-body">
              {/* <p>Sample text</p> */}
              <div className="overview-bar"></div>
              <div className="overview-bar"></div>
              <div className="overview-bar"></div> 
              <div className="overview-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment22;