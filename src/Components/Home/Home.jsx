import Nav from '../Nav/Nav'
import Base from '../Base/Base'
import Sec from '../sec/Sec'
import ScrollText from '../ScrollText/ScrollText'
import Page from '../Page/Page'
import Page2 from '../Page2/Page2'
import Page3 from '../Page3/Page3'
import Swipe from '../Swipe/Swipe'
import Last from '../Last/Last'

const Home = () => {
    return (
        <>
            <div className='overflow-hidden w-full bg-[#EFEAE3]'>
                <Nav />
                <Base />
                <Sec />
                <ScrollText />
                <Page />
                <Page2 />
                <Page3 />
                <Swipe />
            </div>

        </>
    )
}

export default Home