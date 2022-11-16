import aboutData from "../data/aboutData";
const About = () => {
    return (
        <div className="about">
            <h1 className="header">About</h1>
            <img src="lisa1.jpeg" alt="" className="lisa"/>
            <h5 className="lisainf">Lisa Bettany is a Canadian tech entrepreneur and one of the most influential photographers on the web.She is cofounder of the top-ranked photography iPhone app, Camera+ which has sold over 14 million copies. Her vibrant, eye-catching landscape and travel photos have been viewed millions of times in magazines, online publications & TV broadcasts.</h5>
            <br/>
            <h5 className="lisainf">Lisa was included in Huffington Post’s Top 30 Most Influential Photographers on the Web, FastCompany’s Most Creative People in Business, Forbes’ Top Female Tech Entrepreneur, Business Insider’s Most Influential People in App Development, and one of Apple app store’s Inspirational Women Developers.</h5>
            <br/>
            <h5 className="lisainf">A former competitive figure skater, with an inspiring “never say never” personality, Lisa has motivated millions to creatively capture the moments of their lives by taking great photos.</h5>
            <h5 className="lisainf">When Lisa suffered a tragic back-breaking figure skating accident at 20 years-old, she was forced to give up her Olympic dreams. Bed-ridden from her injury, a close friend loaned her a camera as a method to explore her creativity. In late 2006, Lisa started posting her adventures and photographs on her blog. Sharing her photography and connecting with an incredible blogging community ignited her passion for life and helped her heal from her back injury.</h5>
            <br/>
            <h5 className="lisainf">After experiencing the healing power of photography in her own life, Lisa was determined to bring accessible creative photography and video to everyone. She cofounded several best-selling iPhone/iPad apps including; Camera+ in 2008, MagiCam in 2014, Vee for Video in 2015 and acquired Filters in 2015.</h5>
            <br/>
            <h5 className="lisainf">Lisa is a graduate of the University of Victoria with a Bachelor’s degree in Linguistics and Journalism, and a Master’s degree in Linguistics. Her research focused on early infant speech acquisition and acoustics.</h5>
            <br/>
            <h5 className="lisainf">After living abroad for the past few years in San Francisco and New York, Lisa has returned to her home on Vancouver Island in beautiful British Columbia. She currently lives in Comox, BC with her husband, an RCAF pilot and her daughter Kate.</h5>
            <br/>
            <h5 className="lisainf">Lisa continues to passionately share her photography tips, adventures, and travels with her 3 million followers hoping to inspire them to capture beautiful memories with whatever camera they have.</h5>
            <br/>

            <h2>Select Articles:</h2>
                <ul>
                    {
                        aboutData.map((item,index)=> (
                            <div>
                                <li>{item.text}<a className="links" href={item.links}>{item.text2}</a></li>
                            </div>
                        ))
                    }
                </ul>
                <h2>Featured in:</h2>
                <h5 className="lisainf">Elle Magazine, Fast Company, DPreview, Digital Trends, OffScreen, Resource Travel Magazine, The Capital Magazine, Grazia, Venture Beat, CBS News, ABC News, Marie Clare, Wired, FastCo Exist, Apple App Store, fStoppers, Foreign Correspondent, PopSugar, BGR, Business Insider, Huffington Post,  Forbes, The Verge, Follow the Geeks, Engadget, Gizmodo, Thrillist, The New York Times, Toronto Star, Times Colonist, SALT Vancouver Island Magazine, Science News, The Globe & Mail, CNET & Lifehacker.</h5>
                <br/>
                <h2>Social Reach:</h2>
                <p><a className="links" href="https://www.facebook.com/lisabettanyphotography">Facebook</a> 480k,<a className="links" href="https://twitter.com/mostlylisa">Twitter</a> 118k,<a
                    className="links"  href="https://www.instagram.com/mostlylisa/">Instagram</a> 25k and etc.</p>

        </div>
    )
}
export default About;