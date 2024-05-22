import InitialModel from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initalProfile } from "@/lib/initial-profile";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const SetUpPage = async () => {
  const profile = await initalProfile();

  if (profile && typeof profile === "object" && "id" in profile) {
    const server = await db.server.findFirst({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

    if (server) {
      return redirect(`/servers/${server.id}`);
    }
  } else {
    // Handle redirection
    return profile;
  }

  return <InitialModel />;
};

export default SetUpPage;
