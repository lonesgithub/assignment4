const ProfileHeader = ({ username }) => {
  return (
    <header className="mt-5 mb-5">
      <h2 className="headerh2">Welcome to your personal space, {username}!</h2>
    </header>
  );
};

export default ProfileHeader;
