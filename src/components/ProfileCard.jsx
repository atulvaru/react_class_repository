const ProfileCard = () => {
  return (
    <>
      <h1>Profile Card</h1>

      <ProfileData
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
          </div>
        }
      >
        <p>Thanks for visiting!</p>
      </ProfileData>

      <ProfileData
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, keep up the great work!</strong>
            <p>Hobbies: Gaming, Cooking</p>
            <button>Contact</button>
          </div>
        }
      >
        <p>Thanks for visiting!</p>
      </ProfileData>
    </>
  );
};

export default ProfileCard;
function ProfileData(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>

      <div>{props.greeting}</div>
      <div>{props.children}</div>
    </div>
  );
}
