import jsonData from './json.json'

function JsonData() {
   return (
        <>
            <h2>{jsonData.id}. {jsonData.name}</h2>
            <ul>
                {jsonData.history.map((item, index) => (
                    <li key={index}>{item.date}({item.item})</li>
                    )
                )}
            </ul>
        </>
    ); 
}

export default JsonData;