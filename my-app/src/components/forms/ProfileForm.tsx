'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import useGetUserSB from "@/components/hooks/useGetUserSB";

export const ProfileForm = () => {
  const res = useGetUserSB();
  const email = res.userInfo?.session?.user?.email || "Not Available";
  const avatarUrl = res.userInfo?.session?.user?.user_metadata?.avatar_url || "";
  const userName = res.userInfo?.session?.user?.user_metadata?.user_name || "Not Available";
  const userFullName = res.userInfo?.session?.user?.user_metadata?.full_name || "Not Available";

  return (
    <div>
      <div className="flex items-center gap-5 justify-center m-10">
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-blue-300">AVATAR</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Email:</h3>
          <p className="text-sm">{email}</p>
          <h3 className="font-bold">Full Name:</h3>
          <p className="text-sm">{userFullName}</p>
        </div>
      </div>
    </div>
  );
};
