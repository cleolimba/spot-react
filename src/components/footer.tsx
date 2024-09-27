function Footer() {
    return (
      <>
        <h1>bye</h1>
        <img src="/images/logoF.png" alt="" className="flex flex-row justify-center mt-10 ml-[43rem] w-20 h-20" />

        <div className="text-center text-align: center pr-96 pl-96">
            <h2 className="font-medium">A brand that strives to inspire and push creactive culture forward.</h2>
            <p>We approach our work with the mentallity that every product made is a learding experience to improve our craft. We are practioners and purveryors of creative culture and are inspired by its various forms from art, design, fashion, music, food, and more.</p>
        </div>

        <div className="flex justify-center mt-10 gap-2">
            <img src="/images/facebook.png" alt="" className="w-8 h-8" />
            <img src="/images/instagram.png" alt="" className="w-8 h-8" />
            <img src="/images/youtube.png" alt="" className="w-8 h-8" />
            <img src="/images/tiktok.png" alt="" className="w-8 h-8" />
            <img src="/images/twitter.png" alt="" className="w-8 h-8" />
        </div>

        <div className="ml-[20rem] mt-20">
            <p>Country/region</p>
            
            <div className="flex items-center gap-[30rem]">
                <div className="flex items-center gap-4 mt-2 mb-2 w-48 h-10 border-[0.1rem] border-black rounded-lg ">
                    <p>United States (CAD $) </p>
                    <img src="/images/fleche.png" alt="" className="w-4 h-4" />
                </div>

                <img src="/images/visa.png" alt="" className="w-8 h-8" />
            </div>
            
            <div className="flex items-center mt-20">
                <img src="/images/copyright.png" alt="" className="w-4 h-4" />
                <p>2024, theme-spotlight-demo Powerd by Shopify</p>
            </div>
            
        </div>
        
        
        
      </>
    )
  }
  
  export default Footer;