import { Component, h } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'checkbox-ionic',
  styleUrl: 'checkbox-ionic.css',
})
export class CheckboxExample {
  render() {
    return (
      <ion-list>
        <ion-item>
          <ion-label>click here</ion-label>
          <ion-checkbox></ion-checkbox>
        </ion-item>
      </ion-list>
    );
  }
}
