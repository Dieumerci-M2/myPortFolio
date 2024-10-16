import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import Link from "next/link"

const socials = [
    {
        icon : <FiGithub />,
        path : "https://github.com/Dieumerci-M2"
    },
    {
        icon : <FiLinkedin />,
        path : "https://www.linkedin.com/in/dieumerci-muhindo-028b06232/"
    },
    {
        icon : <FiTwitter />,
        path : "https://x.com/MdDieumerci"
    },
]

const Social = ({iconStyles, containerStyles} : any) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index)=>{
                return(
                    <Link href={social.path} target="_blank" key={index} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social

            