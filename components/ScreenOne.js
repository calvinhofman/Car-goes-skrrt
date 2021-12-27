
export default function ScreenOne(props){
return (
    <div>
        <button onClick={() => {props.setScreenSwitch(1)}} className="button btn-4">Maak foto</button>
    </div>
)
}