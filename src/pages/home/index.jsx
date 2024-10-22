import * as S from "../../styled-components/App.styles";
import { skills } from "../../js/lists/skills";

const Home = () => {

  return (
    <>
      <h1>Portfolio</h1>
      <S.CustomWrapper $maxWidth="90%" $margin="0 auto">
        <h2>Skills</h2>
      </S.CustomWrapper>
      <S.CustomContainer $margin="0 auto" $maxWidth="90%" $justify="center" $flexWrap="wrap">
        <S.CustomContainer 
        $displayType="grid" $direction="row" $justify="center" $align="center"
        className={"css-skills"}
        >
          {skills.map((skill, index) => (
              <div styles="background-color: grey;" key={index}>
                <S.SkillIcon src={skill.icon} alt={`${skill.name} Icon`} />
              </div>
          ))}
        </S.CustomContainer>
      </S.CustomContainer>
    </>
  )
}

export default Home;