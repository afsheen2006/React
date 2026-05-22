export const Parent= ()=>{
    return(
        <div>
            <h1>Parent Component</h1>
            <Childcomponent data="ReactJs" />
        </div>
    );
};
const Childcomponent=(props)=>{
    return(
        <div>
            <h2>Child Component</h2>
            <GrandChild data={props.data}/>
            </div>
    );
};
const GrandChild=(props)=>{
    return(
        <div>
            <h3>GrandChild Component</h3>
            <GrandGrandChild data={props.data}/>
        </div>
    );
};
const GrandGrandChild=(props)=>{
    return(
        <div>
            <h4>GrandGrandChild Component</h4>
            <p>Data from GrandChild: {props.data}</p>
        </div>
    );
};

export default Parent;