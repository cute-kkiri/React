import { toBeEnabled } from '@testing-library/jest-dom/matchers';
import '../css/Hanja.css';

function Hanja(props) {
    return (
        <table className='hanja'>
            <tr>
                <td className='td'>{props.h}</td>
                <td className='td2' rowspan='2'>{props.t}</td>
            </tr>
            <tr>
                <td className='td'>{props.k}</td>
            </tr>
        </table>
    );
}

export default Hanja;
