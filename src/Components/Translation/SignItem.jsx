const SignItem = ({ letter, image }) => {
  return (
    <div>
      <img src={image} alt={letter} width="40" />
    </div>
  );
};

export default SignItem;
