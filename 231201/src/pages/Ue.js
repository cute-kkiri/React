import Timer from './hook/useEffect/Timer';
import Cul from './hook/useEffect/Cul';

function Ue() {
    return (
        <>
            <h1>useEffect</h1>
            <p>
                구성 요소의 부작용을 수행할 수 있다.<br />
                몇 가지 예로 데이터 가져오기, DOM에 직접 업데이트 및 타이머
                useEffect는 두 가지 인수를 허용합니다.
                {/* useEffect(<function>, <dependency>) dependency는 선택사항 */}
                <br />
                아래의 예시를 통하여 알아봅니다.<br />
            </p>
            <Timer />
            <hr />
            <Cul />
        </>
    )
}

export default Ue;