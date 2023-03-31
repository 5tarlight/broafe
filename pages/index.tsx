import {
  IndexLetsGoButtonStyle,
  IndexLetsGoContainerStyle,
  IndexMainContainerStyle,
  IndexMainTitleStyle,
  IndexSubTitleStyle,
} from "@/components/index/index.style";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boafe</title>
      </Head>
      <IndexMainContainerStyle>
        <IndexMainTitleStyle>
          Boafe:
          <br />
          스트리머를 위한, 팬을 위한 모두의 공간
        </IndexMainTitleStyle>
        {/* <IndexPlatformLogoStyle>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path
              d="M5.7 0L1.4 10.985V55.88h15.284V64h8.597l8.12-8.12h12.418l16.716-16.716V0H5.7zm51.104 36.3L47.25 45.85H31.967l-8.12 8.12v-8.12H10.952V5.73h45.85V36.3zM47.25 16.716v16.716h-5.73V16.716h5.73zm-15.284 0v16.716h-5.73V16.716h5.73z"
              fill="#6441a4"
              fill-rule="evenodd"
            />
          </svg>
        </IndexPlatformLogoStyle> */}
        <IndexSubTitleStyle>
          스트리머와 트수들을 위한 전용 공간 Boafe에 어서오세요!
          <br />
          Boafe에서는 좋아하는 스트리머와, 스트리머를 좋아하는 사람들과 만날 수
          있습니다. 스트리머라면 다양한 옵션을 제공하는 개성넘치는 공간을
          간단하게 만들 수 있고 트수라면 좋아하는 스트리머의 공간에 바로 접근할
          수 있습니다.
        </IndexSubTitleStyle>

        <IndexLetsGoContainerStyle>
          <IndexLetsGoButtonStyle>Twitch로 시작하기</IndexLetsGoButtonStyle>
        </IndexLetsGoContainerStyle>
      </IndexMainContainerStyle>
    </>
  );
};

export default Index;
