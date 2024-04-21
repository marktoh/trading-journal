import NextImage from "next/image";
import { ProfileAvatar } from "../profile-avatar";

type ProfilePhotoProps = {
  imgSrc?: string;
};
const ProfilePhoto = ({ imgSrc }: ProfilePhotoProps) => {
  if (imgSrc) {
    <NextImage src={imgSrc} alt="Profile Photo" />;
  }
  return <ProfileAvatar />;
};

export { ProfilePhoto };
