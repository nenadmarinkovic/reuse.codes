import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1132px;
  margin: 0 auto;
  width: 100%;
  min-height: 60vh;
  padding-bottom: 170px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const DetailsTitle = styled.div`
  font-weight: 800;
  font-size: 35px;
  padding: 90px 0;
  width: 70%;
  color: #3994C1;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 960px) {
    padding: 90px 0 70px 0;
    font-size: 30px;
  }
  @media (max-width: 750px) {
    padding: 80px 0 40px 0;
    width: 80%;
  }

  @media (max-width: 512px) {
    width: 100%;
    font-size: 23px;
  }
`;

const FlexItem = styled.div`
  width: 30%;
  @media (max-width: 750px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const ItemTitle = styled.div`
  color: #3994C1;
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
`;

const ItemText = styled.div`
  color: #717780;
  line-height: 1.7;
`;

function Details() {
  return (
    <Container>
      <DetailsTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </DetailsTitle>
      <FlexHeader>
        <FlexItem>
          <svg
            width="28"
            height="33"
            viewBox="0 0 28 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 1.61914H24V7.6333H4V1.61914Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7.6333V25.6748"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M4 25.6748V19.6609C4 19.1292 4.21071 18.6193 4.58579 18.2434C4.96086 17.8675 5.46957 17.6563 6 17.6562H22C22.5304 17.6563 23.0391 17.8675 23.4142 18.2434C23.7893 18.6193 24 19.1292 24 19.6609V25.6748"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M1 28.6816C1 29.0765 1.0776 29.4675 1.22836 29.8323C1.37913 30.1971 1.6001 30.5286 1.87868 30.8078C2.15726 31.087 2.48797 31.3085 2.85195 31.4596C3.21593 31.6107 3.60603 31.6885 4 31.6885C4.39397 31.6885 4.78407 31.6107 5.14805 31.4596C5.51203 31.3085 5.84274 31.087 6.12132 30.8078C6.3999 30.5286 6.62087 30.1971 6.77164 29.8323C6.9224 29.4675 7 29.0765 7 28.6816C7 28.2868 6.9224 27.8958 6.77164 27.531C6.62087 27.1662 6.3999 26.8347 6.12132 26.5555C5.84274 26.2763 5.51203 26.0548 5.14805 25.9037C4.78407 25.7526 4.39397 25.6748 4 25.6748C3.60603 25.6748 3.21593 25.7526 2.85195 25.9037C2.48797 26.0548 2.15726 26.2763 1.87868 26.5555C1.6001 26.8347 1.37913 27.1662 1.22836 27.531C1.0776 27.8958 1 28.2868 1 28.6816V28.6816Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M11 28.6816C11 29.0765 11.0776 29.4675 11.2284 29.8323C11.3791 30.1971 11.6001 30.5286 11.8787 30.8078C12.1573 31.087 12.488 31.3085 12.8519 31.4596C13.2159 31.6107 13.606 31.6885 14 31.6885C14.394 31.6885 14.7841 31.6107 15.1481 31.4596C15.512 31.3085 15.8427 31.087 16.1213 30.8078C16.3999 30.5286 16.6209 30.1971 16.7716 29.8323C16.9224 29.4675 17 29.0765 17 28.6816C17 28.2868 16.9224 27.8958 16.7716 27.531C16.6209 27.1662 16.3999 26.8347 16.1213 26.5555C15.8427 26.2763 15.512 26.0548 15.1481 25.9037C14.7841 25.7526 14.394 25.6748 14 25.6748C13.606 25.6748 13.2159 25.7526 12.8519 25.9037C12.488 26.0548 12.1573 26.2763 11.8787 26.5555C11.6001 26.8347 11.3791 27.1662 11.2284 27.531C11.0776 27.8958 11 28.2868 11 28.6816V28.6816Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M21 28.6816C21 29.0765 21.0776 29.4675 21.2284 29.8323C21.3791 30.1971 21.6001 30.5286 21.8787 30.8078C22.1573 31.087 22.488 31.3085 22.8519 31.4596C23.2159 31.6107 23.606 31.6885 24 31.6885C24.394 31.6885 24.7841 31.6107 25.1481 31.4596C25.512 31.3085 25.8427 31.087 26.1213 30.8078C26.3999 30.5286 26.6209 30.1971 26.7716 29.8323C26.9224 29.4675 27 29.0765 27 28.6816C27 28.2868 26.9224 27.8958 26.7716 27.531C26.6209 27.1662 26.3999 26.8347 26.1213 26.5555C25.8427 26.2763 25.512 26.0548 25.1481 25.9037C24.7841 25.7526 24.394 25.6748 24 25.6748C23.606 25.6748 23.2159 25.7526 22.8519 25.9037C22.488 26.0548 22.1573 26.2763 21.8787 26.5555C21.6001 26.8347 21.3791 27.1662 21.2284 27.531C21.0776 27.8958 21 28.2868 21 28.6816V28.6816Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
          </svg>
          <br></br>
          <ItemTitle>Free and open-source</ItemTitle>

          <ItemText>
            Manage code snippets using your GitHub profile, or clone this
            repository and customize it to suit your needs.
          </ItemText>
        </FlexItem>
        <FlexItem>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0005 23.001C15.0005 25.1227 15.8433 27.1575 17.3436 28.6578C18.8439 30.1581 20.8788 31.001 23.0005 31.001C25.1222 31.001 27.1571 30.1581 28.6573 28.6578C30.1576 27.1575 31.0005 25.1227 31.0005 23.001C31.0005 20.8792 30.1576 18.8444 28.6573 17.3441C27.1571 15.8438 25.1222 15.001 23.0005 15.001C20.8788 15.001 18.8439 15.8438 17.3436 17.3441C15.8433 18.8444 15.0005 20.8792 15.0005 23.001Z"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M26.5365 23.001H23.0005V19.4663"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M13.9924 30.8675C11.2213 30.4931 8.61004 29.3515 6.45328 27.5718C4.29653 25.792 2.68015 23.4448 1.78657 20.7951C0.892994 18.1455 0.75779 15.2988 1.39622 12.5763C2.03465 9.85391 3.42129 7.3641 5.39966 5.38792C7.37803 3.41174 9.86937 2.02785 12.5925 1.39244C15.3156 0.757022 18.1622 0.895376 20.8109 1.79188C23.4595 2.68839 25.8049 4.30737 27.5823 6.4661C29.3597 8.62482 30.4984 11.2374 30.8698 14.0089"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M12.3858 30.5621C10.3578 27.5861 9.00049 22.1781 9.00049 16.0008C9.00049 9.82345 10.3578 4.41679 12.3858 1.43945"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M1.03369 15.001H13.731"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M3.99902 7.00098H28.0004"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M2.7312 23.001H11.0005"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M19.615 1.43945C21.3333 4.34295 22.381 7.59371 22.6817 10.9541"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
          </svg>
          <br></br>
          <ItemTitle>Fast in every sense</ItemTitle>

          <ItemText>
            Using GraphQL in combination with React is fast in every way that
            matters. See results immediately after uploading .mdx files.
          </ItemText>
        </FlexItem>
        <FlexItem>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 13C7.716 13 1 10.3133 1 7C1 3.68667 7.716 1 16 1C24.284 1 31 3.68533 31 7C31 8.56533 29.5 9.99067 27.044 11.06"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M31 13.9347V7"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M1 7V15C1 17.6107 5.17067 19.832 10.992 20.6573"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M1 15V23C1 25.756 5.648 28.0787 11.98 28.7813"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M15 23C15 25.1217 15.8429 27.1566 17.3431 28.6569C18.8434 30.1571 20.8783 31 23 31C25.1217 31 27.1566 30.1571 28.6569 28.6569C30.1571 27.1566 31 25.1217 31 23C31 20.8783 30.1571 18.8434 28.6569 17.3431C27.1566 15.8429 25.1217 15 23 15C20.8783 15 18.8434 15.8429 17.3431 17.3431C15.8429 18.8434 15 20.8783 15 23V23Z"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
            <path
              d="M26.5654 20.6733L22.6921 25.8387C22.606 25.9532 22.4962 26.0479 22.3704 26.1164C22.2445 26.1849 22.1054 26.2256 21.9624 26.2357C21.8194 26.2459 21.676 26.2252 21.5417 26.1751C21.4074 26.125 21.2855 26.0466 21.1841 25.9453L19.1841 23.9453"
              stroke="#323F4B"
              strokeWidth="2"
              strokeLinecap="round"
         
            />
          </svg>
          <br></br>
          <ItemTitle>Secure by default</ItemTitle>
          <ItemText>
            All your code snippets are stored on the GitHub repository, so no
            need to worry about security issues.
          </ItemText>
        </FlexItem>
      </FlexHeader>
    </Container>
  );
}

export default Details;
