import Button from '../components/Button.jsx'
import { GoBell, GoHomeFill, GoLaw, GoRocket, GoZap } from 'react-icons/go'
// import { AiFillLike } from "react-icons/ai";

function ButtonPage() {

    const handleClick = () => {
        console.log('button clicked')
    }

    // const icon = <span className="text-2xl mx-3 text-gray-400 text-yellow-400"><AiFillLike /></span>

    return (
        <>
            <h1 className="font-medium text-2xl flex p-3 mx-80 py-10 text-yellow-400">
                Reusable Buttons
                {/* {icon} */}
            </h1>
            <div>
                <Button
                    className='mb-5 mx-80'
                    success
                    rounded
                    outline
                    onClick={handleClick}
                >
                    <GoBell />
                    Success
                </Button>
            </div>
            <div>
                <Button
                    className='mb-5 mx-60'
                    danger
                    outline
                    onClick={handleClick}
                >
                    <GoHomeFill />
                    Danger
                </Button>
            </div>
            <div>
                <Button
                    className='mb-5 mx-40'
                    warning
                    onClick={handleClick}
                >
                    <GoLaw />
                    Warning
                </Button>
            </div>
            <div>
                <Button
                    className='mb-5 mx-20'
                    secondary
                    onClick={handleClick}
                >
                    <GoRocket />
                    Secondary
                </Button>
            </div>
            <div>
                <Button
                    primary
                    rounded
                    className='mb-5'
                    onClick={handleClick}
                >
                    <GoZap />
                    Primary
                </Button>
            </div>
        </>
    )
}

export default ButtonPage