import React, { createContext, useState, useContext } from "react";

type Avatar = "avatar1" | "avatar2" | "avatar3" | "avatar4";

interface AvatarContextType {
  avatar: Avatar;
  changeAvatar: (newAvatar: Avatar) => void;
}

const AvatarContext = createContext<AvatarContextType>({
  avatar: "avatar1",
  changeAvatar: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAvatar = () => useContext(AvatarContext);

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [avatar, setAvatar] = useState<Avatar>("avatar1");

  const changeAvatar = (newAvatar: Avatar) => {
    setAvatar(newAvatar);
  };

  return (
    <AvatarContext.Provider value={{ avatar, changeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export { AvatarContext };