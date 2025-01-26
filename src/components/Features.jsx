import { useState ,useRef, useEffect} from 'react'
import ReactPlayer from "react-player";
export default function Features(){
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };
    
    return(
        <>
            <section className="features py-8" id='features'>
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-normal text-center mb-4">Features</h2>
                    <p className="text-center mb-8 text-gray-600">
                    Most calendars are designed for teams. 
Slate is designed for freelancers
                    </p>

                    {/* Video for mobile view */}
                    <div className="mb-8 block lg:hidden">
                        <div className='w-full h-full items-center flex justify-center'>

                        <ReactPlayer
                            className='relative'
                            onClickPreview={handlePlay}
                            url="./public/video/computer.mp4" 
                            playing={isPlaying}
                            playIcon={<img className='absolute'src='./img/play button.svg' alt='video' />}
                            controls={true}
                            width="80%"
                            light={ <img style={{height:'inherit'}} src='./img/screen.png' alt='video' />}
                            
                        />
                        </div>
                    </div>
                    {/* Video for mobile view */}
                

                    <div className="logosection grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                        <img
                        src="./img/logo1.svg"
                        alt="Logo 1"
                        className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">
                        OpenType features Variable fonts
                        </h3>
                        <p className="text-gray-600">
                        Slate helps you see how 
                            many more days you need 
                            to work to reach your 
                            financial goal.
                        </p>
                    </div>
                    <div className="text-center">
                        <img
                        src="./img/logo2.svg"
                        alt="Logo 2"
                        className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Design with real data</h3>
                        <p className="text-gray-600">
                        Slate helps you see how 
                        many more days you need 
                        to work to reach your 
                        financial goal.
                        </p>
                    </div>
                    <div className="text-center">
                        <img
                        src="./img/logo3.svg"
                        alt="Logo 3"
                        className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">Fastest way to take action</h3>
                        <p className="text-gray-600">
                        Slate helps you see how many more days you need to work to reach
                        your financial goal.
                        </p>
                    </div>
                    </div>

                    {/* Video for desktop view */}
                    <div className="hidden lg:block ">
                        <div className='w-full h-full items-center flex justify-center'>

                            <ReactPlayer
                                className='relative'
                                onClickPreview={handlePlay}
                                url="./public/video/computer.mp4" 
                                playing={isPlaying}
                                playIcon={<img className='absolute'src='./img/play button.svg' alt='video' />}
                                controls={true}
                                width="80%"
                                height="573px"
                                light={ <img src='./img/screen.png' alt='video' />}
                                
                            />
                        </div>
                    </div>
                    
                </div>
                    
            </section>
        </>
    )
}