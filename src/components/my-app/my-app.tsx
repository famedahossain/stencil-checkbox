import { Component, Host, h, Listen, Element} from '@stencil/core';
import { MyCheckbox } from '../my-checkbox/my-checkbox';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: false,
})
export class MyApp {
  @Element() el: HTMLElement;
  @Listen('buttonClicked')
  todoCompletedHandler(event: CustomEvent<void>) {
    console.log('Received the custom todoCompleted event: ');
    const checkboxes = this.el.getElementsByTagName('my-checkbox');
    for (const checkbox of checkboxes){
      checkbox.checked = true;
    }
  }
  render() {
    return (
      <Host>
        <my-checkbox></my-checkbox>
        <br />

        <my-checkbox></my-checkbox>
        <br />

        <my-component></my-component>
        <br/>

        <checkbox-ionic></checkbox-ionic>
      </Host>
    );
  }
}
