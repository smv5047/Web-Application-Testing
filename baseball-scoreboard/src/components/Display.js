import React from 'react'

const Display = ({balls, strikes}) => {

    console.log(balls)



    return (
        <>
        <div>
            <div>
                <h2>Balls</h2>
            </div>
            <div>
                {balls}
            </div>
        </div>
        <div>
            <div>
                <h2>Strikes</h2>
            </div>
            <div>
                {strikes}
            </div>
        </div>
        </>
    )
}

export default Display