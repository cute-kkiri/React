// 불편한 방법
import Old from './hook/useContext/Old';
// 두 번째 방법(덜 불편한 방법)
import Ucon from './hook/useContext/Ucon';

function Uc() {
    return (
        <>
        <h1>프롭드릴링</h1>
        <Old />
        <h1>useContext</h1>
        <Ucon />
        </>
    )
}

export default Uc;
