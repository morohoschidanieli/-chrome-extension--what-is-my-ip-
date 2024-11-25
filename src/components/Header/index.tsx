import IP2 from "components/IP2";
import {
  HeaderInformation,
  IPInformationWrapper,
  IPWrapper,
  Wrapper,
} from "./styles";
import TEXT from "constants";
import Flag from "components/Flag";

const Header = ({ publicIP, privateIP, countryCode, location }: IHeader) => {
  return (
    <Wrapper>
      <HeaderInformation>
        <div>
          <Flag countryCode={countryCode} size={20} />
          {location}
        </div>
        <div>sad</div>
      </HeaderInformation>
      <IPWrapper>
        <IP2 ip={publicIP} label={TEXT.publicIPLabel} />
        <IP2 ip={privateIP} label={TEXT.privateIPLabel} />
      </IPWrapper>
    </Wrapper>
  );
};

export default Header;
