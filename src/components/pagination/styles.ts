import styled from "@emotion/styled";

const PaginationArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top:12px;
  padding:24px;
  @media (max-width: 628px) {
    margin-bottom: 20px;
    padding: 8px;
  }
`;

const PaginationContainer = styled(PaginationArea)`
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (max-width: 628px) {
    width: 100%;
  }
`;

const PaginationPageNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const PaginationPrevButtonContainer = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 20px;
  @media (max-width: 628px) {
    margin-right: 27px;
  }
  @media (max-width: 512px) {
    margin-right: 8px;
  }
`;

const PaginationNextButtonContainer = styled(PaginationPrevButtonContainer)`
  margin-left:20px;
  @media (max-width: 628px) {
    margin-left: 27px;
  }
  @media (max-width: 424px) {
    margin-left: 8px;
  }
`;

const PaginationPrevIcon = styled.i`
  font-size: 16px;
  color: ${(p: any) => p.color};
`;

const PaginationPrevText = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(p: any) => p.color};
  margin-left: 7px;
`;

const PaginationPageNumber = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 8px;
  cursor: pointer;
  border: none;
  margin-right:4px;
  color: ${(p: any) => p.color};
  @media (max-width: 424px) {
    padding: 8px;
  }
`;

const PaginationContinue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const PaginationNextIcon = styled(PaginationPrevIcon)`
  color: ${(p: any) => p.color};
`;

const PaginationNextText = styled(PaginationPrevText)`
  color: ${(p: any) => p.color};
  margin-left: 0;
  margin-right: 7px;
`;

export {
	PaginationArea,
	PaginationContainer,
	PaginationContinue,
	PaginationNextButtonContainer,
	PaginationNextIcon,
	PaginationNextText,
	PaginationPageNumber,
	PaginationPageNumberContainer,
	PaginationPrevButtonContainer,
	PaginationPrevIcon,
	PaginationPrevText,
};

