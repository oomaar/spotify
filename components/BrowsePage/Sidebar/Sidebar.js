import { signOut } from "next-auth/react";
import {
  SidebarButton,
  SidebarContainer,
  SidebarSubContainer,
} from "./styledSidebar";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarSubContainer>
        <SidebarButton onClick={() => signOut()}>
          <i className="bx bx-log-out" />
          <p>Dummy Log Out</p>
        </SidebarButton>
        <SidebarButton>
          <i className="bx bx-home" />
          <p>Home</p>
        </SidebarButton>
        <SidebarButton>
          <i className="bx bx-search-alt-2" />
          <p>Search</p>
        </SidebarButton>
        <SidebarButton>
          <i className="bx bx-library" />
          <p>Your Library</p>
        </SidebarButton>
      </SidebarSubContainer>
      <hr />
      <SidebarSubContainer>
        <SidebarButton>
          <i className="bx bx-plus-circle" />
          <p>Create Playlist</p>
        </SidebarButton>
        <SidebarButton>
          <i className="bx bx-heart" />
          <p>Likes</p>
        </SidebarButton>
        <SidebarButton>
          <i className="bx bx-rss" />
          <p>Your episodes</p>
        </SidebarButton>
      </SidebarSubContainer>
      <hr />
      {/* Playlists: will come when we connect the spotify api */}
      <p>Playlists....</p>
    </SidebarContainer>
  );
};
