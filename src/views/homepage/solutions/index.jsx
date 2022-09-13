import React from "react";
import {
  Mid,
  Head2,
  Head3,
  Solution,
  SolutionBg,
  D,
  Head4,
  Yellow,
  Para3,
  G,
  Grid,
  GridColumn,
  Pera,
  Arrow,
} from "styles/solutions";
import solutionBg from "assets/images/solution-bg.png";

function Solutions() {
  return (
    <Mid>
      <Head2>We have got</Head2>
      <Head3>Solutions to Your Problems</Head3>
      <Solution>
        <SolutionBg src={solutionBg} alt="solution-bg" />
      </Solution>
      <D>
        <Head4>What are you looking for?</Head4>
        <Yellow></Yellow>
        <Para3>Question 1 of 2</Para3>
        <G>
          <Grid>
            <GridColumn>
              <Pera>
                I'd like to build a revolutionary website/app for my business.
              </Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
            <GridColumn>
              <Pera>I need to validate and transform an idea to a product</Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
            <GridColumn>
              <Pera>I'd like to create an immersive, interactive UI/UX.</Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
            <GridColumn>
              <Pera>I want to streamline operational costs</Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
            <GridColumn>
              <Pera>I am just here to explore</Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
            <GridColumn>
              <Pera>
                I want to harness the latest tech to improve my operations.
              </Pera>
              <Arrow>
                <i className="fa-solid fa-angle-right"></i>
              </Arrow>
            </GridColumn>
          </Grid>
        </G>
      </D>
    </Mid>
  );
}

export default Solutions;
