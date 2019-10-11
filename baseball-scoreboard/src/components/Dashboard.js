import React from 'react'

const Dashboard = (props) => {

    function strike () {
        if (props.strikes > 1) {
            props.strikeUpdate(0)
        } else {
        props.strikeUpdate(props.strikes+1)
        }
    } 

    function ball () {
        if (props.balls > 2) {
            props.ballUpdate(0)
        } else {
        props.ballUpdate(props.balls+1)
        }
    } 

    function foul () {
        if(props.strikes>1){

        } else {
            props.strikeUpdate(props.strikes+1)
        }
    }

    function hit () {
        props.strikeUpdate(0)
        props.ballUpdate(0)
        alert('Nice Hit!')
    }



    return (
        <>
        <div>
            <button onClick ={strike}>Strike</button>
            <button onClick ={ball}>Ball</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit</button>
        </div>
        </>
    )
}

export default Dashboard