import styled from "styled-components"
import MemoList from "../components/Memo/List"
import MemoToolBar from "../components/Memo/Toolbar"
import MemoEditor from "../components/Memo/Editor"

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