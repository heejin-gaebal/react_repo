import { styled } from '@mui/material/styles';

const LayoutAside = styled('aside')`
  background-color: #caecfc;
`;
const StyledDiv = styled('aside')`
  background-color: #9edac3;
  width: var(--aside-width);
  height: var(--aside-height);
  position: fixed;
  top: calc(var(--header-height) + var(--nav-height));

  background-image: url(${(props) => props.adUrl});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Aside = ({ adUrl }) => {
  return (
    <LayoutAside>
      {/* <StyledDiv adUrl={adUrl}></StyledDiv> */}
      <StyledDiv>
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=903247&template=carousel&trackingCode=AF2815384&subId=&width=150&height=740&tsource="
          width="150"
          height="615"
          frameborder="0"
          scrolling="no"
          referrerpolicy="unsafe-url"
          browsingtopics
        ></iframe>
      </StyledDiv>

      {/* 
      쿠팡 광고
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=903247&template=carousel&trackingCode=AF2815384&subId=&width=150&height=740&tsource="
        width="150"
        height="740"
        frameborder="0"
        scrolling="no"
        referrerpolicy="unsafe-url"
        browsingtopics
      ></iframe> */}
    </LayoutAside>
  );
};

export default Aside;
