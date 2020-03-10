import React from 'react'

const Display = ({balls, strikes, outs}) => {

    



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
        <div>
            <div>
                <h2>Outs</h2>
            </div>
            <div>
                {outs}
            </div>
        </div>
        </>
    )
}

export default Display