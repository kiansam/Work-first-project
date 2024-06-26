// import Image from "next/image";
// import image from "../public/images/image.jpg";

// function Footer() {
//   return (
//     <div className="h-full top-0 mt-2">
//       <div className="flex w-full h-132 justify-center px-2 top-0">
//         <div className="flex justify-left mt-8 mr-1 w-full h-128 bg-slate-500"></div>
//         <div className="flex justify-right mt-8 ml-1 w-full h-128 bg-slate-500"></div>
//       </div>
//       <div className="flex w-full h-132 justify-center px-2 top-0">
//         <div className="flex justify-left mt-8 mr-1 w-full h-128 bg-slate-500"></div>
//         <div className="flex justify-right mt-8 ml-1 w-full h-128 bg-slate-500"></div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 h-ful bg-white body-font mt-1">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10"></div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Kian —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Kian
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// export default Footer;
// import styled from "styled-components";
// import Image from "next/image";
// import Link from "next/link";

// function Footer() {
//   return (
//     <Div>
//       <Container>
//         <Nav>
//           <Spotify>
//             <Logo>
//               <Link href="/">
//                 <a>
//                   {/* <Image
//                     src="/images/Spotify-logo.svg"
//                     height={100}
//                     width={180}
//                     alt="logo"
//                   /> */}
//                 </a>
//               </Link>
//             </Logo>
//           </Spotify>
//           <Columns>
//             <Col>
//               <Co>Company</Co>
//               <Links>
//                 <Link href="/">
//                   <a>About</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Jobs</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>For the Record</a>
//                 </Link>
//               </Links>
//             </Col>

//             {/* 2 */}
//             <Col>
//               <Co>Communities</Co>
//               <Links>
//                 <Link href="/">
//                   <a>For Artists</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Developers</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Advertising</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Investors</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Vendors</a>
//                 </Link>
//               </Links>
//             </Col>

//             {/* 3 */}
//             <Col>
//               <Co>Useful links</Co>
//               <Links>
//                 <Link href="/">
//                   <a>Support</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Web Player</a>
//                 </Link>
//               </Links>
//               <Links>
//                 <Link href="/">
//                   <a>Free Mobile App</a>
//                 </Link>
//               </Links>
//             </Col>
//           </Columns>

//           {/* ! */}

//           <Social>
//             <Icons>
//               <Icon>
//                 <Link href="/">
//                   <a>
//                     <InstagramI />
//                   </a>
//                 </Link>
//               </Icon>
//               <Icon>
//                 <Link href="/">
//                   <a>
//                     <TwitterT />
//                   </a>
//                 </Link>
//               </Icon>
//               <Icon>
//                 <Link href="/">
//                   <a>
//                     <FacebookF />
//                   </a>
//                 </Link>
//               </Icon>
//             </Icons>
//           </Social>

//           <Country>
//             <World1 />
//             <Place>USA</Place>
//           </Country>
//           <BLinks>
//             <Bul>
//               <Bli>
//                 <Link href="/">
//                   <a>Legal</a>
//                 </Link>
//               </Bli>
//               <Bli>
//                 <Link href="/">
//                   <a>Privacy Center</a>
//                 </Link>
//               </Bli>
//               <Bli>
//                 <Link href="/">
//                   <a>Privacy Policy</a>
//                 </Link>
//               </Bli>
//               <Bli>
//                 <Link href="/">
//                   <a>Cookies</a>
//                 </Link>
//               </Bli>
//               <Bli>
//                 <Link href="/">
//                   <a>About Ads</a>
//                 </Link>
//               </Bli>
//               <Bli>
//                 <Link href="/">
//                   <a>Additional CA Privacy Disclosures</a>
//                 </Link>
//               </Bli>
//             </Bul>
//             <Span>© 2021 Spotify</Span>
//           </BLinks>
//         </Nav>
//       </Container>
//     </Div>
//   );
// }

// export default Footer;

// const Div = styled.div`
//   display: block;
// `;

// const Container = styled.footer`
//   background: #000;
//   padding: 50px 0 20px;
//   font-size: 16px;
//   font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
//   font-weight: 400;
//   display: block;
//   color: #fff;

//   @media (min-width: 992px) {
//     padding: 80px 0 50px;
//   }
// `;

// const Nav = styled.nav`
//   width: 100%;
//   margin: 0 auto;
//   display: block;

//   @media (min-width: 768px) {
//     width: 750px;
//   }

//   @media (min-width: 992px) {
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-wrap: wrap;
//     flex-wrap: wrap;
//   }

//   @media (min-width: 992px) {
//     width: 970px;
//   }

//   @media (min-width: 1200px) {
//     width: 1170px;
//   }
// `;

// const Spotify = styled.div`
//   padding: 0 15px;
//   display: block;
//   box-sizing: border-box;

//   @media (min-width: 992px) {
//     -webkit-flex: 0 0 auto;
//     flex: 0 0 auto;
//   }

//   @media (min-width: 992px) {
//     min-height: 346px;
//   }

//   @media (min-width: 768px) {
//     width: 16.66666667%;
//   }

//   @media (min-width: 992px) {
//     width: 16.66666667%;
//   }
// `;

// const Logo = styled.div`
//   padding: 0;
//   color: #fff;
//   display: inline-block;
//   height: 27px;
//   width: 89px;

//   @media (min-width: 992px) {
//     height: 40px;
//     width: 132px;
//   }
// `;

// const Columns = styled.div`
//   display: -webkit-flex;
//   display: flex;
//   -webkit-flex-direction: column;
//   flex-direction: column;

//   @media (min-width: 768px) {
//     -webkit-flex-direction: row;
//     flex-direction: row;
//   }
//   @media (min-width: 992px) {
//     -webkit-flex: 0 0 auto;
//     flex: 0 0 auto;
//   }
//   @media (min-width: 992px) {
//     width: 50%;
//   }
// `;

// const Col = styled.dl`
//   padding: 0 15px;
//   margin: 0;
//   display: block;
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;

//   @media (min-width: 768px) {
//     -webkit-flex: 1 0;
//     flex: 1 0;
//   }
// `;

// const Co = styled.dt`
//   margin: 50px 0 22px;
//   color: #919496;
//   font-size: 12px;
//   font-weight: 900;
//   line-height: 1.4;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   display: block;

//   @media (min-width: 992px) {
//     margin: 20px 0;
//   }
// `;

// const Links = styled.dd`
//   margin: 0;
//   display: block;
//   /* margin-inline-start: 40px; */

//   a {
//     padding: 3px 0 15px;
//     display: inline-block;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 1.5;
//     text-decoration: none;
//     color: #fff;

//     &:hover {
//       color: #1ed760;
//     }
//   }
// `;

// const Social = styled.div`
//   margin: 120px 15px 15px;
//   display: block;

//   @media (min-width: 992px) {
//     margin: 0 15px 0 auto;
//   }
// `;

// const Icons = styled.ul`
//   margin: 20px 0 0;
//   padding: 0;
//   display: block;
//   list-style-type: disc;
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   padding-inline-start: 40px;
// `;

// const Icon = styled.li`
//   margin-right: 15px;
//   display: inline-block;
//   text-align: -webkit-match-parent;

//   a {
//     border-radius: 50%;
//     background-color: #222326;
//     display: -webkit-inline-flex;
//     display: inline-flex;
//     -webkit-align-items: center;
//     align-items: center;
//     -webkit-justify-content: center;
//     justify-content: center;
//     overflow: hidden;
//     width: 44px;
//     height: 44px;
//     color: #fff;
//     color: -webkit-link;
//     cursor: pointer;
//     text-decoration: underline;

//     @media (min-width: 992px) {
//       width: 54px;
//       height: 54px;
//     }
//   }
// `;

// const InstagramI = styled(Instagram)`
//   color: #fff;
//   padding: 1px;
//   display: block;
//   width: 36px;
//   height: 36px;

//   &:hover {
//     color: #1ed760;
//   }
// `;
// const TwitterT = styled(Twitter)`
//   color: #fff;
//   padding: 1px;
//   display: block;
//   width: 32px;
//   height: 32px;

//   &:hover {
//     color: #1ed760;
//   }
// `;
// const FacebookF = styled(Facebook)`
//   color: #fff;
//   padding: 1px;
//   display: block;
//   width: 32px;
//   height: 32px;

//   &:hover {
//     color: #1ed760;
//   }
// `;
// const Country = styled.div`
//   margin: 0 15px;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-justify-content: flex-end;
//   justify-content: flex-end;

//   @media (min-width: 992px) {
//     width: 100%;
//   }
// `;

// const Place = styled.a`
//   padding: 0;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-flex-shrink: 0;
//   flex-shrink: 0;
//   -webkit-align-items: center;
//   align-items: center;
//   white-space: nowrap;
//   font-size: 10px;
//   text-decoration: none;
//   color: #919496;
//   cursor: pointer;
//   &:hover {
//     color: #1ed760;
//   }

//   @media (min-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const World1 = styled.div`
//   color: #919496;
//   cursor: pointer;
//   width: 12;
//   height: 13;
//   margin: 0 8px 0 0;
// `;

// const BLinks = styled.div`
//   display: -webkit-flex;
//   display: flex;
//   font-size: 16px;
//   font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
//   font-weight: 400;
//   @media (min-width: 992px) {
//     width: 100%;
//   }
// `;

// const Bul = styled.ul`
//   margin: 0 45px 0 0;
//   padding: 0 0 0 15px;
//   display: block;
//   list-style-type: disc;
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   padding-inline-start: 40px;
// `;

// const Bli = styled.li`
//   display: list-item;
//   text-align: -webkit-match-parent;
//   margin-right: 24px;
//   padding: 0;
//   list-style: none;
//   display: inline-block;
//   line-height: normal;
//   letter-spacing: 0;

//   a {
//     text-align: -webkit-match-parent;
//     list-style: none;
//     display: inline-block;
//     line-height: normal;
//     letter-spacing: 0;
//     color: -webkit-link;
//     cursor: pointer;
//     text-decoration: underline;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-shrink: 0;
//     flex-shrink: 0;
//     -webkit-align-items: center;
//     align-items: center;
//     white-space: nowrap;
//     font-size: 10px;
//     text-decoration: none;
//     padding: 1em 0;
//     color: #919496;

//     &:hover {
//       color: #1ed760;
//     }

//     @media (min-width: 768px) {
//       font-size: 12px;
//     }
//   }
// `;

// const Span = styled.span`
//   margin: 0 15px 0 auto;
//   padding: 1em 0;
//   -webkit-flex-shrink: 0;
//   flex-shrink: 0;
//   font-size: 10px;
//   color: #919496;

//   @media (min-width: 768px) {
//     font-size: 12px;
//   }
// `;
