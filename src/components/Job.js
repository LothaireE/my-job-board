const Job = (props) => {
    return <div Job className={`itemJob ${props.className}`}>
        
    <h2>{props.title}</h2>
    <div>
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
    </div>    
</div>;
}

export default Job;