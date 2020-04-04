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
                <img className='logoFull' src={logoFull} />
                <p className='logoFullText' >-Click here to play the intro again (not yet inplemented)</p>
            </div>
            <div className='mediaBars'>
                <ul className="social-media-container">
                    <li className="socialMediaSingleBar" id='githubBar'>
                        <img className='socialMediaPicture' src={GithubLogo} />
                        <a className='mediaBarText' href="https://github.com/kracok" target="_blank">
                            My Github
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='artstationBar'>
                        <img className='socialMediaPicture' src={ArtstationLogo} />
                        <a className='mediaBarText' href="https://www.artstation.com/kracok" target="_blank">
                            My ArtStation
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='linkedinBar'>
                        <img className='socialMediaPicture' src={LinkedinLogo} />
                        <a className='mediaBarText' href="https://www.linkedin.com/in/timothy-blom/" target="_blank">
                            My LinkedIn
                        </a>
                    </li>
                    <li className="socialMediaSingleBar" id='emailBar'>
                        <img className='socialMediaPicture' src={EmailLogo} />
                        <a className='mediaBarText' href="" target="_blank">
                            My Email
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MediaBars;