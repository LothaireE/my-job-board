const Title = (props) => {
    console.log(props);
    return <h1 className="headerTitleCss">
        {props.headerTitle}
    </h1>; 
};


export default Title;