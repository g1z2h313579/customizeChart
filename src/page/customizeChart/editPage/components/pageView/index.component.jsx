import React from 'react'

export default (props) => {

    function chooseShowPage (mode) {
        switch(mode) {
            case 'double' :
                return (
                    <>
                        <div>qwe</div>
                        <div>asd</div>
                    </>
                )
            case 'tri' : 
                return (
                    <>
                        <div>sfd</div>
                        <div>wer</div>
                        <div>xcv</div>
                    </>
                )
        }
    }

    return (
        <div className = 'pageView'>
            {
                chooseShowPage(props.mode)
            }

        </div>
    )
}