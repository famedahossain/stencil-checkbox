import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'my-checkbox',
  styleUrl: 'my-checkbox.css',
  shadow: true,
})
export class MyCheckbox {
  //input property
  @Prop() checked: boolean;
  @Element() el!: HTMLElement;
  //on set of this prop execute ... to set the value of checkbox
  //watch, on check, activate some code
  @Watch('checked')
  watchHandler(newValue: boolean) {
    console.log('The new value of activated is: ', newValue);
    let inputs = this.el.shadowRoot.querySelector('input');
    // for (const input of inputs) {
    //   input.checked = newValue;
    // }
    inputs.checked = true;
  }
  render() {
    return (
      <Host>
        <label class="checkbox">
          <input type="checkbox" />
          <span>Check Me!</span>
        </label>
      </Host>
    );
  }
}
