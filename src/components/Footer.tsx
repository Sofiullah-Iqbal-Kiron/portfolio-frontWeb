// react-icons
import {FaTwitterSquare} from "react-icons/fa";

// react-fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube, faTwitter, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


import {useState} from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const social_medias = {
        "facebook": {
            'icon': faFacebook,
            'link': 'https://www.facebook.com/kiron1023/',
            'beat': false,
            'beatFade': false,
            'color': 'blue',
            'fontSize': '34px'
        },
        "youtube": {
            'icon': faYoutube,
            'link': 'https://www.youtube.com/channel/UCuIv6csPBeCU0969Lq9ZV-Q',
            'beat': false,
            'beatFade': false,
            'color': 'red',
            'fontSize': '34px'
        },
        "twitter": {
            'icon': faTwitter,
            'link': 'https://twitter.com/IqbalSofiullah',
            'beat': false,
            'beatFade': false,
            'color': 'skyblue',
            'fontSize': '34px'
        },
        "instagram": {
            'icon': faInstagram,
            'link': 'https://www.instagram.com/sofiullaha/',
            'beat': false,
            'beatFade': false,
            'color': '',
            'fontSize': '34px'
        },
        "linkedin": {
            'icon': faLinkedin,
            'link': 'https://www.linkedin.com/in/sofiullah-iqbal-kiron-968a841b9/',
            'beat': false,
            'beatFade': false,
            'color': 'darkblue',
            'fontSize': '34px'
        },
        "github": {
            'icon': faGithub,
            'link': 'https://github.com/Sofiullah-Iqbal-Kiron',
            'beat': false,
            'beatFade': false,
            'color': 'white',
            'fontSize': '34px'
        }
    }
    const medias = Object.values(social_medias);

    const [bounce, setBounce] = useState(false);

    return (
        <div
            className='d-flex flex-column align-items-center mt-3 p-5 text-bg-dark bg-gradient rounded-bottom rounded-pill'>
            <a href="#header" onMouseEnter={() => setBounce(true)} onMouseLeave={() => setBounce(false)}>
                <FontAwesomeIcon icon={faCircleArrowUp} bounce={bounce} size="2xl" style={{color: "#ffffff",}}/>
            </a>

            <div className='d-flex flex-row flex-wrap justify-content-center p-5'>
                {medias.map(media =>
                    <h3 className='p-4'>
                        <a href={media.link}>
                            <FontAwesomeIcon
                                icon={media.icon}
                                beat={media.beat}
                                beatFade={media.beatFade}
                                color={media.color}
                                fontSize={media.fontSize}
                            />
                        </a>
                    </h3>)}
            </div>

            <h6 className='text-wrap'>
                <FontAwesomeIcon icon={faCopyright} fontWeight={'bold'}/> - {currentYear}, Sofiullah Iqbal Kiron
            </h6>
            {/*    todo: obtain year from any rest api as json and set year data when this component get mounted. */}
        </div>
    );
}