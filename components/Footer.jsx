import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-8 mb-20 sm:mr-8 max-sm:mr-8 max-sm:ml-8 sm:ml-8 lg:mr-20 lg:ml-20">
        <div>
          <Image src={"/hilink-logo.svg"} width={70} height={70} alt="logo" />
        </div>
        <div>
          <ul className={"space-y-3"}>
            <li className="font-bold">Learn More</li>
            <li>About Hilink</li>
            <li>Press Releases</li>
            <li>Environment</li>
            <li>Jobs</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className={"space-y-3"}>
            <li className="font-bold">Our Community</li>
            <li>Climbing xixixi</li>
            <li>Hiking hilink</li>
            <li>Hilink kinthill</li>
          </ul>
        </div>
        <div>
          <ul className={"space-y-3"}>
            <li className="font-bold">Contact Us</li>
            <li>Admin Officer: 123-456-789</li>
            <li>Email Officer: hilink@akinthil.com</li>
            <li>Hilink kinthill.com</li>
          </ul>
        </div>
        <div>
          <ul className={"space-y-3"}>
            <li className="font-bold">Social</li>
            <li className="flex space-x-3">
              <Image
                src={"/facebook.svg"}
                width={30}
                height={30}
                alt="facebook"
              />
              <Image
                src={"/instagram.svg"}
                width={30}
                height={30}
                alt="instagram"
              />
              <Image
                src={"/twitter.svg"}
                width={30}
                height={30}
                alt="twitter"
              />
              <Image
                src={"/youtube.svg"}
                width={30}
                height={30}
                alt="youtube"
              />
              <Image
                src={"/wordpress.svg"}
                width={30}
                height={30}
                alt="wordpress"
              />
            </li>
          </ul>
        </div>
      </div>
      
      <p className="text-center text-slate-500 p-12 border border-t-1 border-gray-300">
        2023 Hilink | All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
