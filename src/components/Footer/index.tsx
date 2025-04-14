import './footer-styles.css'


function Footer() {
  
  return (
    <div className='footer'>
        {/* <p>Scale</p>
        <Slider value={recipeScale} changeValue={setRecipeScale} /> */}

        <a href="https://github.com/realpalmforest" target='_blank'>Created by PalmForest</a>
        <a href="https://github.com/realpalmforest" target='_blank'>
          <img src='./src/assets/github-mark-white.svg' style={{height: "35px", paddingTop: "5px"}} />
        </a>
    </div>
  )
}

export default Footer