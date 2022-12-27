import "./card.css"
import{
    FaTwitter,
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa"

const Card = () => {
    return (
        <div className="card">
            <div className="card_profile_pic">
                <img src="https://dummyimage.com/94x91.png" alt="prof_pic"></img>
            </div>

            <div className="card_name">
                Sinjini Ghosh
                <div className="card_bio">
                    @SINJINI-G
                </div>
            </div>

            <div className="card_info">
                <div className="card_info_keychild">
                    Repositories
                </div>
                <div className="card_info_valuechild">
                    24
                </div>
                <div className="card_info_keychild">
                    Followers
                </div>
                <div className="card_info_valuechild">
                    10k
                </div>
                <div className="card_info_keychild">
                    Location
                </div>
                <div className="card_info_valuechild">
                    India
                </div>
                <div className="card_info_keychild">
                    Status
                </div>
                <div className="card_info_valuechild">
                    Open to work
                </div>
            </div>

            <div className="card_icons">
                <FaTwitter/><FaLinkedinIn/><FaGithub/> 
            </div>
        </div>
    )
}

export default Card;