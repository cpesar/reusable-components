import Button from '../components/Button.jsx'
import { GoBell, GoHomeFill, GoLaw, GoRocket, GoZap } from 'react-icons/go'

function ButtonPage() {

    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <>
            <h1>Reusable Components v2</h1>
            <div>
                <Button
                    className='mb-5'
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
                    className='mb-5'
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
                    className='mb-5'
                    warning
                    onClick={handleClick}
                >
                    <GoLaw />
                    Warning
                </Button>
            </div>
            <div>
                <Button
                    className='mb-5'
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