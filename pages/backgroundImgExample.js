import Image from 'next/image'

const BackgroundImgExample = () => (
  <div className="wrapper">

    <div className='bgWrap'>
      <Image
        alt="Mountains"
        src="/images/mountains.jpg"
        layout="fill"
        quality={100}
      />
    </div>
    <p className='bgText'>
      Image Component
      <br />
      as a Background
    </p>
    <style>
    {
      `    
   .wrapper{ 
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50vh;
    width: 90vw;
    margin-left:auto;
    margin-right:auto;
  }
    .bgWrap{
      z-index: -1;
    }
    .bgText {
      margin: 0;
      font-size: 2rem;
      line-height: 3rem;
      text-align: center;
      text-shadow: 1px 1px 1px #3c5c5e;
    }
`

    }
  </style>
  </div>

)
export default BackgroundImgExample