export const PropsDrilling= ()=>{
    return(
        <>
        <section>
            <h1>Hi. this is parent component</h1>
            <ChildComponent data={"React js"}/>
        </section>
        </>
    )
}

const ChildComponent = (props)=>{
    return(
        <>
        <section>
            <h1>This is ChildComponent taking From parent component {props.data}</h1>
            <GrandChildComponent data={props.data}/>
        </section>
        </>
    )
}
const GrandChildComponent = (props)=>{
    return(
        <>
        <section>
            <h1>This is GrandChildComponent taking From ChildComponent {props.data}</h1>
            <GrandGrandChildComponent data={props.data}/>
        </section>
        </>
    )
}
const GrandGrandChildComponent = (props)=>{
    return(
        <>
        <section>
            <h1>This is GrandGrandChildComponent taking From GrandChildComponent {props.data}</h1>
        <p>Thanks for sharing.</p>
        </section>
        </>
    )
}