export function Testcomponent({details, handleLoading}) {
    return <div>
        <p>{details.title} </p>
        <p>{details.description}</p>
        <button onClick={handleLoading}>{details.buttonText}</button>
    </div>
}