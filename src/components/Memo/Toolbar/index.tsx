import styled from 'styled-components'
import SmallButton from "../../Button/SmallButton";
import { TitleText } from "../../Text";
import Block from "../../Block";
import { ReactComponent as PostDeleteIcon } from "./assets/delete_outline_black.svg";
import { ReactComponent as MakeTodoIcon } from "./assets/check_circle_outline_black.svg";
import { ReactComponent as MakeImageIcon } from "./assets/collections_black.svg";
import { ReactComponent as MakeBoldIcon } from "./assets/format_bold_black.svg";
import { ReactComponent as PostAddIcon } from "./assets/post_add_black.svg";
import { ReactComponent as MakeSizeIcon } from "./assets/text_fields_black.svg";
import SearchInput from "../../Input/SearchInput";

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  jusify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  //모바일 환경에서 MEMO 텍스트 삭제
  @media (max-width: 687px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

const MemoToolBar = () => {
  return (
    <Box>
      <LeftMenu>
        <TitleText style={{ marginLeft: "5px" }}>MEMO</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu>
        <SmallButton onClick={() => {}} Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeSizeIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeTodoIcon />} />
        </div>
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeImageIcon />} />
          <Block marginRight="5px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}

export default MemoToolBar;