import './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {
  DiscordIcon: any;
  TelegramIcon: any;
  TwitterIcon: any;
  MediumIcon: any;
}

export const Footer = ({
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
}: FooterProps) => (
  <footer>
    <div className="hr"></div>
    <div className="container">
      <div className="footer__content">
        <div className="copyrights show-md">© 2021 Scapes</div>
        <div className="follow-links">
          <a href="https://discord.gg/scapes">
            <span>
              {/* <img alt="Join our discord chanel" src={dcImage} /> */}
              <DiscordIcon />
              Join Discord
            </span>
          </a>
          <a href="https://twitter.com/scapesnft">
            <span>
              {/* <img alt="Follow us on Twitter" src={twImage} />  */}
              <TwitterIcon />
              Follow us
            </span>
          </a>
          <a href="https://t.me/scapesnft">
            <span>
              {/* <img alt="Join us on telegram channel" src={tgImage} /> */}
              <TelegramIcon />
              Join channel
            </span>
          </a>
          <a href="https://scapesnft.medium.com">
            <span>
              {/* <img alt="Read us on Medium" src={mdImage} />  */}
              <MediumIcon />
              Read
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* <Snackbar
        open={alertState.open}
        autoHideDuration={8000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar> */}
  </footer>
);

export default Footer;
