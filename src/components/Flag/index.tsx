const Flag = ({ countryCode, size = 40 }: IFlag) => {
  const url = `https://flagcdn.com/h${size}/${countryCode}.png`;

  return (
    <span>
      <img src={url} alt="Country flag" />
    </span>
  );
};

export default Flag;
