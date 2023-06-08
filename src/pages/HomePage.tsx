import React from 'react'
import styled from "styled-components"
import MemoList from "../components/List"
import MemoToolBar from "../components/Toolbar"
import MemoEditor from "../components/Editor"

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HomePage = () => {
  return (
    <div>
      <MemoToolBar />
      <FlexRow>
        <MemoList />
        <MemoEditor/>
      </FlexRow>
    </div>
  );
}

export default HomePage