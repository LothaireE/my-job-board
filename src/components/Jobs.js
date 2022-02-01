import Job from "./Job";

const Jobs = (props) => {
    console.log(props);
    return  <div className="jobs">
        <Job className="red" title = "Full Time Sales Associate - Sydney Boutique" contractType= "CDI" country="Australie" city="Sydney" />
        <Job className="green" title = "Agent de Sécurité - Pantin" contractType= "CDI" country="France" city="Pantin" />
        <Job className="blue" title = "Responsable d'Atelier (H/F)" contractType= "CDD" country="France" city="Paris" />
        <Job className="yellow" title = "Chef de Projets" contractType= "CDD" country="France" city="Paris" />
        <Job className="red" title = "Développeur React.js" contractType= "CDI" country="France" city="Paris" />
        <Job className="green" title = "Sales Associate Stockholm" contractType= "CDI" country="Suède" city="Stockholm" />
        <Job className="blue" title = "Vendeur/se - Crans Montana" contractType= "CDI" country="Suisse" city="Crans-Montana" />
        <Job className="yellow" title = "CRM and Data Quality Analyst" contractType= "CDI" country="USA" city="New-York" />
        <Job className="red" title = "Infirmier(H/F)" contractType= "CDI" country="France" city="Pantin" />
    </div>
    

    
}

export default Jobs;