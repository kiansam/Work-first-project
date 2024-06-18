// function About() {
//   return (
//     <main className="">
//       <Header></Header>
//       <Introduction></Introduction>
//       <Body></Body>
//       <Footer></Footer>
//     </main>
//   );
// }
// export default About;

import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Body from "../../components/about/Body";
import Footer from "../../components/Footer";

function about() {
  return (
    <div className="">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default about;
