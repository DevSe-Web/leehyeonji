function Profile() {
    return (
      <div className="profile">
        <img className="profile-jpg" src="profile2.jpg" alt="profile jpg"></img>
        <ul lang="ko">
          <li>
            <span className="material-icons icon">person</span>
            <b>이름</b> 이현지
          </li> 
          <li>
            <span className="material-icons icon">cake</span>
            <b>생년월일</b> 04.02.16
          </li>
          <li>
            <span className="material-icons icon">school</span>
            <b>학력</b>
            <br />
            울산대학교 IT융합학과 
            <br /> 
            울산대학교 정보보안동아리 UNKNOWN
            <br />
            개발보안 연합동아리 DevSe
          </li> 
        </ul>
      </div>
    );
  }
  