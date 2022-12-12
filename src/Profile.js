import "./Profile.css";
export default function Profile({
  firstName,
  lastName,
  email,
  occupation,
  intrests,
  bio,
  quote,
}) {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <h2>All about {`${firstName}`}</h2>
      <div>
        <p>
          <strong>Full Name:</strong> {`${firstName} ${lastName}`}
        </p>
        <br />
        <p>
          <strong>Email:</strong> {`${email}`}
        </p>
        <br />
        <p>
          <strong>Occupation:</strong> {`${occupation}`}
        </p>
        <br />
        <p>
          <strong>Intrests:</strong> {`${intrests}`}
        </p>
        <br />
        <p>
          <strong>Bio:</strong> {`${bio}`}
        </p>
        <br />
        <p>
          <em>
            <strong>Quote:</strong> {`${quote}`}
          </em>
        </p>
      </div>
    </div>
  );
}
