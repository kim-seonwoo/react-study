import { useParams } from "react-router-dom";

const data = {
  kim: {
    name: "seon-woo",
    job: "student",
  },
  jobs: {
    name: "steve",
    job: "CEO",
  },
};

//data에 kim과 jobs에 대한 정보를 담음

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <h2>{profile.job}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
