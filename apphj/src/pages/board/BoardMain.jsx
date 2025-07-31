import {Route, Routes} from 'react-router-dom'
import BoardList from './BoardList';
import BoardInsert from './BoardInsert';

const BoardMain = () => {
    return (
        <Routes>
            <Route path='/board/list' element={<BoardList/>}></Route>
            <Route path='/board/insert' element={<BoardInsert/>}></Route>
        </Routes>
    );
};

export default BoardMain;