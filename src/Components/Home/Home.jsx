import Nav from '../Nav/Nav'
import Base from '../Base/Base'
import Sec from '../sec/Sec'
import ScrollText from '../ScrollText/ScrollText'
import Page from '../Page/Page'
import Page2 from '../Page2/Page2'
import Page3 from '../Page3/Page3'
import Swipe from '../Swipe/Swipe'
import Last from '../Last/Last'
import { useResponse } from '../../Hooks/useResponse'


const Home = () => {

    const { close } = useResponse();

    return (
        <>
            <div className='overflow-hidden w-full bg-[#EFEAE3]'>
                <Nav close={close} />
                <Base close={close} />
                <Sec close={close} />
                <ScrollText close={close} />
                <Page close={close} />
                <Page2 close={close} />
                <Page3 close={close} />
                <Swipe close={close} />
            </div>

        </>
    )
}

export default Home