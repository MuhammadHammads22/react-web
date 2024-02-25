import React from "react";

const ProfileCard = ({ profileObject }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        className="w-full h-48 object-cover object-center"
        src={profileObject.picture}
        alt={profileObject.user.username}
      />
      <div className="py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {profileObject.user.username}
        </h1>
        <p className="text-sm text-gray-600 mb-2">
          {profileObject.profession}
        </p>
        <p className="text-gray-700 text-base">{profileObject.intro}</p>
        <p className="text-gray-700 text-base">{profileObject.slogan}</p>
        <p className="text-gray-700 text-base">{profileObject.cur_add}</p>
        <p className="text-gray-700 text-base">{profileObject.cat}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
