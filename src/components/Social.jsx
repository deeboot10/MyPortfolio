import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Social() {
  return (
    <div className="social">
      <a href="https://github.com/deeboot10" target="_blank">
        <GitHubIcon></GitHubIcon>
      </a>
      <a href="https://www.instagram.com/krupnikovicuros/" target="_blank">
        <InstagramIcon></InstagramIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/uros-krupnikovic-12561b161/"
        target="_blank"
      >
        <LinkedInIcon></LinkedInIcon>
      </a>
    </div>
  );
}

export default Social;
