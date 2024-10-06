import * as S from "../../styled-components/App.styles";
import { skills } from "../../js/lists/skills";

const Home = () => {
  
  console.log(skills);
  return (
    <>
      <h1>Portfolio</h1>
      <S.CustomContainer $margin="0 auto" $maxWidth="90%" $justify="center">
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => {
          return (
          <svg key={index} xmlns={skill.icon} width={50} height={50} viewBox="0 0 24 24" />
          )
        })}
      </div>
      </S.CustomContainer>
    </>
  )
}

export default Home;