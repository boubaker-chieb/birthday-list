const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <small>{age} Years old</small>
      </div>
    </article>
  );
};

export default Person;
