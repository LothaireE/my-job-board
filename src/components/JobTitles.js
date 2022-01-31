const JobTitle = (props) => {
    console.log(props);
    return <h1 className="jobTitleCss" >
        {props.title}
    </h1>; 
};


export default JobTitle;