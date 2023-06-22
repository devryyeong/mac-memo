// slice pattern ??
import { nanoid, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { useInjectReducer } from "redux-injectors";
import { MemoState } from "./types";
import { saveMemoData, loadMemoData } from '../localStorage';

export const initialState: MemoState = {
  search: '',
  memolist: loadMemoData(),
};

const slice = createSlice({
  name: "memo",
  initialState: initialState,
  reducers: {
    addMemo: {
      reducer: (state, action: PayloadAction<MemoItem>) => {
        state.memolist.push(action.payload);
        for (const memo of state.memolist) {
          if (memo.id === action.payload.id) continue;
          if (memo.selected) memo.selected = false;
        }
        saveMemoData(state.memolist);
      },
      prepare: (content: string, preview: string) => {
        const id = nanoid();
        return {
          payload: {
            id,
            content,
            preview: preview,
            selected: true,
            created_at: new Date().toString(),
          },
        };
      },
    },
    selectMemo(state, action: PayloadAction<{ id: string }>) {
      // payload 안에 있는 값을 불러와주기
      const id = action.payload.id;

      for (const memo of state.memolist) {
        if (memo.id === id) continue;
        if (memo.selected) memo.selected = false;
      }

      const memo = state.memolist.find((memo) => memo.id === id);
      if (memo) memo.selected = true;
      saveMemoData(state.memolist);
    },
    saveMemo(
      state,
      action: PayloadAction<{ content: string; preview: string }>
    ) {
      const content = action.payload.content;
      const preview = action.payload.preview;
      // 선택한 memo를 불러와서
      const memo = state.memolist.find((memo) => memo.selected);
      if (memo) {
        memo.content = content;
        memo.preview = preview;
        memo.created_at = new Date().toString();
      }
      saveMemoData(state.memolist);
    },
    deleteMemo(state, action: PayloadAction) {
      const filteredMemos = state.memolist.filter((memo) => !memo.selected);
      state.memolist = filteredMemos;

      // 메모를 삭제한 경우 자동으로 맨 위에 있는 메모가 selected 상태로 되어야 함
      const sortedMemos = [...state.memolist].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      // memo가 1개 이상 있다면
      if (sortedMemos.length > 0) {
        const memo = state.memolist.find(memo => memo.id === sortedMemos[0].id);
        if (memo) memo.selected = true;
      }
      saveMemoData(state.memolist);
    },
    searchMemo(state, action: PayloadAction<{ search: string }>) {
      state.search = action.payload.search;
    }
  },
});

export const { actions: MemoActions } = slice;

export const useMemoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { MemoActions: slice.actions };
};
// prepare로 준비된 payload가 reducer로 넘어옴
// state.memolist.push()로 payload 안의 데이터를 state에 넣어준다.
// for문으로 memoList에 있는 모든 memo를 돌며 selected인 경우 false로 만들어준다.