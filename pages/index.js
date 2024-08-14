// import Box from "./components/box";
// import Round from "./components/round";

// export default function Home() {
//   return (
//     <div>
//       <Box />
//       <Round />
//       <Box />
//       <Box />
//       <Round />
//       <Box />
//     </div>
//   );
// }

import Input from "./components2/Input";
import Background from "./components2/background";
import Button from "./components2/button";

const Home = () => {
  return (
    <div>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <Input placeholder="Fist name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Button />
      <Background />
    </div>
  );
};
export default Home;
