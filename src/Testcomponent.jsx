export function Testcomponent({details, setDetails}) {
    return <div>
        <p>{details.title} </p>
        <p>{details.description}</p>
        <button onClick={() => setDetails(prev => {
            return {
                ...prev, 
                title: prev.title + '...',
            }
        })}>{details.buttonText}</button>
    </div>
}