import styled from 'styled-components';

const SearchWrapper = styled.div`
  max-width: 300px;
  margin: 24px;
  position: relative;
  font-size: 14px;
`;

const SearchInput = styled.input`
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNMzEuNzEgMjkuNTlsLTYuODEtNi44MWExNCAxNCAwIDEwLTIuMTIgMi4xMmw2LjgxIDYuODFhMSAxIDAgMDAxLjQxIDBsLjcxLS43MWExIDEgMCAwMDAtMS40MXpNMyAxNGExMSAxMSAwIDExMTEgMTFBMTEgMTEgMCAwMTMgMTR6IiBmaWxsPSIjMTkxOTE5Ii8+PC9zdmc+);
  background-repeat: no-repeat;
  background-color: #efefef;
  background-size: 14px;
  background-position: 8px center;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 8px 4px 8px 32px;
  margin: 4px 0;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  transition: background-color 200ms linear;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: 0;
    background-color: #fff;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  width: calc(100% - 18px);
  padding: 8px;
  background: #fff;
  border: solid 1px #dbdbdb;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  border-radius: 3px;
  color: #8e8e8e;
`;

const SearchResultsList = styled.ul`
  list-style-type: none;
  margin: -8px;
  padding: 0;
`;

const SearchResultsListItem = styled.li`
  margin: 0;
  border-bottom: solid 1px #dbdbdb;

  &:last-child {
    border-bottom: none;
  }

  &[aria-selected='true'] {
    background-color: #efefef;
  }

  img {
    width: 32px;
    margin-right: 16px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    padding: 8px;
    color: #262626;
    text-decoration: none;
    word-break: break-word;
  }
`;

export {
  SearchWrapper,
  SearchInput,
  SearchResultsList,
  SearchResultsListItem,
  SearchResults,
};
