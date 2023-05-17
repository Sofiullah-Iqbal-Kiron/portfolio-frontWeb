import '../stylesheets/skill.css'

interface Props {
    name: string,
    logo: string,
    description: string,
    homepage: string,
}

export function Skill({name, logo, description, homepage}: Props) {
    return (
        <div className="card d-flex flex-column justify-content-between text-center m-3 bg-body bg-opacity-10 bg-gradient rounded-3 shadow" style={{width: "18rem"}}>
            <div className='align-self-center'>
                <img src={logo} width={100} height={100} className="card-img-top my-2" alt={name}/>
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <h4 className="card-title">{name}</h4>
                <p style={{fontFamily: 'helvatica'}} className="card-text py-1 text-lowercase">{description}</p>
                <a href={homepage} className='btn btn-sm text-primary mx-auto card-more-link'>Learn more</a>
            </div>
        </div>
    );
}