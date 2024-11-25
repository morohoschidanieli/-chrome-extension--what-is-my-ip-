import { useEffect, useState } from "react";
import { Detail, Footer, LastIps, RefreshButton } from "@components";
import { useInternalIPV4, usePublicIPV4 } from "@hooks";
import { getCurrentDate, getCurrentHour } from "@utils";
import { errorGif, loading } from "@assets";
import { IP } from "components/LastIps";
import { BqButton, BqCard, BqIcon } from "@beeq/react";
import { Flex, StyledBqButton } from "./styles";
import Flag from "components/Flag";
import Header from "components/Header";

const App = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [prevIps, setPrevIps] = useState<Array<IP>>();

  const [isLoadingInternalIPV4, internalIPV4, errorInternalIPV4] =
    useInternalIPV4();
  const [isLoadingPublicIPV4, publicIPV4, errorPublicIPV4] = usePublicIPV4();

  useEffect(() => {
    if (isLoading === false)
      if (!isLoadingInternalIPV4 && !isLoadingPublicIPV4) {
        const prevIPsJSON = localStorage.getItem("IPs");

        const prevIPs = prevIPsJSON ? JSON.parse(prevIPsJSON) : [];

        const lastIpObj: IP = {
          date: getCurrentDate(),
          hour: getCurrentHour(),
          publicIPV4: publicIPV4 as string,
          internalIPV4: internalIPV4 as string,
        };

        const updatedIPs = [lastIpObj, ...prevIPs.slice(0, 4)];

        localStorage.setItem("IPs", JSON.stringify(updatedIPs));

        setPrevIps(updatedIPs);
      }
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(
        (isLoadingInternalIPV4 as Boolean) && (isLoadingPublicIPV4 as Boolean)
      );
    }, 500);
  }, [isLoadingInternalIPV4, isLoadingPublicIPV4, isLoading]);

  const onRefreshHandler = () => {
    setIsLoading(true);
  };

  return (
    <BqCard>
      <Header
        publicIP={publicIPV4}
        privateIP={internalIPV4}
        countryCode="ro"
        location="Romania, Cluj-Napoca"
      />
      <BqCard type="minimal">
        <div style={{ display: "flex" }}>
          <BqIcon name="start" part="icon" />
        </div>
        asdasdasadassad asdas
      </BqCard>
      {/* <Flex style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <Flex direction="column">
            Your public IP:
            <StyledBqButton appearance="primary">
              111.21312..21312
            </StyledBqButton>
          </Flex>
          <Flex direction="column">
            Your Private IP:
            <StyledBqButton appearance="primary">
              111.21312..21312
            </StyledBqButton>
          </Flex>
        </div>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Flag countryCode="ro" size={40} />
          </div>
          <div>Romania, Cluj-Napoca</div>
          <div>Eastern European Time EEST UTC+2</div>
        </div>
      </Flex>
      <div>
        <BqCard type="minimal"></BqCard>
      </div> */}
    </BqCard>
  );

  // return (
  //   <>
  //     {errorInternalIPV4 && errorPublicIPV4 ? (
  //       <img
  //         className="w-full object-contain h-60"
  //         src={errorGif}
  //         alt="Loading"
  //       />
  //     ) : isLoading ? (
  //       <img
  //         className="w-full object-contain h-60"
  //         src={loading}
  //         alt="Loading"
  //       />
  //     ) : (
  //       <div className="flex flex-col justify-center align-baseline w-full h-auto bg-white p-4">
  //         <div className="flex flex-row align-middle items-center justify-end">
  //           <RefreshButton onRefresh={onRefreshHandler} />
  //         </div>

  //         <Detail title="Your Public IP:" ip={publicIPV4 as string} />

  //         {!errorInternalIPV4 && (
  //           <Detail title="Your Private IP:" ip={internalIPV4 as string} />
  //         )}

  //         {prevIps !== undefined && <LastIps lastIps={prevIps} />}
  //         <Footer>
  //           <>
  //             created with ♥ by
  //             <a
  //               className="mx-1"
  //               target="_blank"
  //               href="https://www.danieliosifmorohoschi.me"
  //             >
  //               Daniel-Iosif Morohoschi
  //             </a>
  //           </>
  //         </Footer>
  //       </div>
  //     )}
  //   </>
  // );
};

export default App;
