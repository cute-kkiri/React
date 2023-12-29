import axios from 'axios' // 없어도 돼

function Images(props) {
   return (
        <img src={props.url} width='100' height='100' alt={props.url} title={props.url}/>
    ); 
}

export default Images;