



export const msgAuto = (AutoMsg) => {
    return (dispatch) => {
        setTimeout(() => dispatch({ type: 'printMessage', payload: AutoMsg }), 2000)
        // console.log(AutoMsg)
    }
}