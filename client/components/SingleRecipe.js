import React, {Component} from 'react'

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log('SINGLE RECIPE PROPS', this.props)
    const {} = this.props
    return (
      <div />
      // <div>

      //   {this.props.directions.length ? (
      //     <div>
      //       <br />
      //       <br />
      //       <h2>Directions:</h2>
      //     </div>
      //   ) : (
      //     <div>
      //       <br />
      //     </div>
      //   )}
      //   {this.props.directions.length ? (
      //     this.props.directions[0].steps.map(steps => {
      //       return (
      //         <div key={steps.number} className="cook-instructions">
      //           <p>
      //             {steps.number}. {steps.step}
      //           </p>
      //         </div>
      //       )
      //     })
      //   ) : (
      //     <div>
      //       <br />
      //     </div>
      //   )}
      // </div>
    )
  }
}
