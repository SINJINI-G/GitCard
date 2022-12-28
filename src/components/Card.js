import "./card.css"
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa"

const Card = (props) => {
    const { data } = props

    return (
        <div className="card">
            <div className="card_profile_pic">
                <img src={data.profpic} alt="prof_pic"></img>
            </div>

            <div className="card_name">
                {data.name}
                <div className="card_bio">
                    @{data.username}
                </div>
            </div>

            <div className="card_info">
                <div className="card_info_keychild">
                </div>
                <div className="card_info_valuechild">
                </div>
                <div className="card_info_keychild">
                    Repos
                </div>
                <div className="card_info_valuechild">
                    {data.repo}
                </div>
                <div className="card_info_keychild">
                    Followers
                </div>
                <div className="card_info_valuechild">
                    {data.followers}
                </div>
                <div className="card_info_keychild">
                    Location
                </div>
                <div className="card_info_valuechild">
                    {data.loc}
                </div>
                <div className="card_info_keychild">
                    Status
                </div>
                <div className="card_info_valuechild">
                    {data.status}
                </div>
            </div>

            <div className="card_icons">
                <FaTwitter />
                <FaLinkedinIn />
                <a href={data.githubUrl} target="_blank"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Card;