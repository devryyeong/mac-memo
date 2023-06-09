import styled from 'styled-components'
import ReactQuill from "react-quill";
import SmallButton from "../../Button/SmallButton";
import { TitleText } from "../../Text";
import Block from "../../Block";
import SearchInput from "../../Input/SearchInput";
import { ReactComponent as PostDeleteIcon } from "./assets/delete_outline_black.svg";
import { ReactComponent as MakeTodoIcon } from "./assets/check_circle_outline_black.svg";
import { ReactComponent as MakeImageIcon } from "./assets/collections_black.svg";
import { ReactComponent as MakeBoldIcon } from "./assets/format_bold_black.svg";
import { ReactComponent as PostAddIcon } from "./assets/post_add_black.svg";
import { ReactComponent as MakeSizeIcon } from "./assets/text_fields_black.svg";
import { useMemoSlice } from "../../../store/memo";
import { useDispatch, useSelector } from "react-redux";
import { SearchMemoSelector } from "../../../store/memo/selectors";

const icons = ReactQuill.Quill.import('ui/icons');

icons['header'] = <MakeSizeIcon />
icons['bold'] = <MakeBoldIcon />
icons['list'] = <MakeTodoIcon />
icons['image'] = <MakeImageIcon />

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  jusify-content: space-between;
  align-items: center;
  // "!important" = 현재 지정된 스타일을 최우선으로 적용
  border: 0 !important;
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
  const { MemoActions } = useMemoSlice();
  const dispatch = useDispatch();
  const search = useSelector(SearchMemoSelector)

  return (
    <Box id="toolbar">
      <LeftMenu>
        <TitleText style={{ marginLeft: "5px" }}>MEMO</TitleText>
        <SmallButton
          onClick={() => {
            dispatch(MemoActions.deleteMemo());
          }}
          Icon={() => <PostDeleteIcon />}
        />
      </LeftMenu>
      <RightMenu>
        <SmallButton
          onClick={() => {
            dispatch(
              MemoActions.addMemo(
                "내용을 입력해 주세요",
                "내용을 입력해 주세요"
              )
            );
          }}
          Icon={() => <PostAddIcon />}
        />
        <div>
          <SmallButton
            className="ql-header"
            value="1"
            Icon={() => <MakeSizeIcon />}
          />
          <Block marginRight="5px" />
          <SmallButton className="ql-bold" Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton
            className="ql-list"
            value="check"
            Icon={() => <MakeTodoIcon />}
          />
        </div>
        <div>
          <SmallButton className="ql-image" Icon={() => <MakeImageIcon />} />
          <Block marginRight="5px" />
          <SearchInput
            search={search}
            onChange={(value) =>
              dispatch(MemoActions.searchMemo({ search: value }))
            }
          />
        </div>
      </RightMenu>
    </Box>
  );
}

export default MemoToolBar;