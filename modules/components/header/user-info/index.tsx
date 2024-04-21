import { ProfilePhoto } from "./profile-photo";

import "./index.css";

type UserInfoProps = {
  imgSrc?: string;
  displayName?: string;
  email?: string;
};
const UserInfo = ({ imgSrc, displayName, email }: UserInfoProps) => {
  return (
    <div className="user-info">
      <ProfilePhoto imgSrc={imgSrc} />
      <div className="user-info-detail">
        <div className="name">{displayName}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export { UserInfo };
