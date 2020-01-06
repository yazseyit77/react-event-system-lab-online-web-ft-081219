// Code Keypad Component Here
export default class Keypad extends React.Component {

    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyup={this.handleKeyUp} type="text" name="" id="" />
            </div>
        )
    }
}