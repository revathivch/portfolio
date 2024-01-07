import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton, LinkedInButton, ProfileContainer } from './HeroStyle'
import ProfileImg from '../../images/profile_pic.png'
import Typewriter from 'typewriter-effect';
import { Biodata } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        {/* <Title>Hi, I am <br /> {Biodata.name}</Title> */}
                        <Title> <br /> {Biodata.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Biodata.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Biodata.description}</SubTitle>
                        {/* <ResumeButton href={Biodata.resume_link} target='display'>Check Resume</ResumeButton> */}
                        <ProfileContainer>
                            <ResumeButton href={Biodata.resume_link} target='display'>Check Resume</ResumeButton>
                            {/* <LinkedInButton href={Biodata.linkedin_link} target='display'>Check LinkedIn</LinkedInButton> */}
                            <SocialMediaIcons> 
                                <SocialMediaIcon href={Biodata.linkedin_link} target="display"><LinkedInIcon fontSize="large" /></SocialMediaIcon> 
                            </SocialMediaIcons>
                        </ProfileContainer>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={ProfileImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection