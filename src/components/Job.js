import JobTitle from "./JobTitles";
import JobContractType from "./JobContractTypes"
import JobCountry from "./Countries";
import JobCity from "./Cities";

const Job = (props) => {
    return (
        <div className="Job">
            <div className="Top">
            <JobTitle title={props.title} />
            </div>

            <div className="Bottom">
            <JobContractType contractType={props.contractType} />
            <JobCountry country={props.country} />
            <JobCity city={props.city} />
            </div>


           
            
        </div>
    )
}

export default Job;