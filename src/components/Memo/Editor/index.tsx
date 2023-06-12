import { useState} from 'react'
import styled from "styled-components"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";
import Block from "../../Block";

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  overflow: auto;
  
  & * {
    font-family: 'Noto Sans KR' !important;
    letter-spacing: -0.2px;
  }

  & .ql-container.ql-snow {
    border: 0 !important;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

const MemoEditor = () => {
  const [value, setValue] = useState('');

  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>{new Date().toLocaleString()}</MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ border: "none" }}
        modules={{
          toolbar: {
            container: "#toolbar",
          },
        }}
        formats={["bold", "size", "header", "image", "list", "link"]}
      />
    </Box>
  );
}

export default MemoEditor;