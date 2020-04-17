import React from 'react';
import logoFull from "../Images/LogoFull2.png"
import GithubLogo from "../Images/GithubLogo.png"
import ArtstationLogo from "../Images/ArtstationLogo.png"
import LinkedinLogo from "../Images/LinkedinLogo.png"
import EmailLogo from "../Images/EmailLogo.png"

const MediaBars = () => {
    return (
        <div>
            <div className='logoFullButton'>
                <img className='logoFull' alt='' src={logoFull} />
                <p className='logoFullText' >-Click here to play the intro again (not yet inplemented)</p>
            </div>
            <div className='mediaBars'>
                <ul className="social-media-container">
                    <li className="socialMediaSingleBar" id='githubBar'>
                        <img className='socialMediaPicture' alt='' src={GithubLogo} />
                        <a className='mediaBarText' href="https://github.com/kracok" target="_blank" rel='noopener noreferrer'>
                            My Github
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='artstationBar'>
                        <img className='socialMediaPicture' alt='' src={ArtstationLogo} />
                        <a className='mediaBarText' href="https://www.artstation.com/kracok" target="_blank" rel='noopener noreferrer'>
                            My ArtStation
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='linkedinBar'>
                        <img className='socialMediaPicture' alt='' src={LinkedinLogo} />
                        <a className='mediaBarText' href="https://www.linkedin.com/in/timothy-blom/" target="_blank" rel='noopener noreferrer'>
                            My LinkedIn
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='emailBar'>
                        <img className='socialMediaPicture' alt='' src={EmailLogo} />
                        <a className='mediaBarText' href="https://www.artstation.com/kracok" target="_blank" rel='noopener noreferrer'>
                            My Email
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MediaBars;