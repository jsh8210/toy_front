import { createSlice } from "@reduxjs/toolkit";

const initialMemberState = {
    isLogined: false,
    memberInfo: {
        webId: '',
        memberCode: '',
        memberName: '',
        nickName: '',
    }
}

const memberSlice = createSlice({
    name: 'member',
    initialState: initialMemberState,
    reducers: {
        login: (state, action) => {
            state.isLogined = true;
            state.memberInfo.webId = 'test1234';
            state.memberInfo.memberCode = '1';
            state.memberInfo.memberName = '홍길동';
            state.memberInfo.nickName = 'hong';
        },
        logout: (state) => {
            state.isLogined = false;
        }
    },
})
export const memberActions = memberSlice.actions;
export default memberSlice.reducer;
