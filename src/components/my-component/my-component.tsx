import { Component, h, State, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
 
export class MyComponent {
  @State() clickity: string = "";
  onClickHandler() {
    this.clickity = "on";
    this.buttonClicked.emit();
  }
  //@event holds on to the fact that the button was clicked
  @Event() buttonClicked: EventEmitter;

  render() {
    return (
      <div>
        <button class={this.clickity} onClick={this.onClickHandler.bind(this)}>
          <label>Submit</label>
        </button>
      </div>
      //output event > index file set the input for checkbox
      );
  }
}


