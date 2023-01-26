import config from "../../../endfield.config";

export default function Footer() {
  const icp = config.footer?.icp;

  return (
    <footer
      className="h-24 max-h-24 fixed left-0 right-0 bottom-0 bg-no-repeat bg-cover text-center"
      style={{ backgroundImage: "url(/assets/img/footer_bg.png)" }}
    >
      <a
        className="relative top-16"
        target="_blank"
        href="https://beian.miit.gov.cn/"
      >
        {icp}
      </a>
    </footer>
  );
}
