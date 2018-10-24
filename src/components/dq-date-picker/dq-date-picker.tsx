import { Component, Prop, State } from '@stencil/core';
import moment from 'moment/moment';

@Component({
  shadow: true,
  styleUrl: 'dq-date-picker.css',
  tag: 'dq-date-picker',
})
export class DqDatePicker {

  static setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '')  + expires + '; path=/';
  }
  static getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    // tslint:disable-next-line
    Array.from(Array(ca.length)).forEach((_x, i) => {
      let c = ca[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    });
    return null;
  }
  @Prop() action: string;
  @State() startDate: string;
  @State() endDate: string;
  defaultDates() {
    if (!DqDatePicker.getCookie('start-date') || !DqDatePicker.getCookie('end-date')) {
      const today = new Date();
      this.endDate = moment(today).format('YYYY-MM-DD');
      this.startDate = moment(today).subtract(90, 'day').format('YYYY-MM-DD');
    } else {
      this.startDate = DqDatePicker.getCookie('start-date');
      this.endDate = DqDatePicker.getCookie('end-date');
    }
    DqDatePicker.setCookie('start-date', this.startDate, 2);
    DqDatePicker.setCookie('end-date', this.endDate, 2);
  }
  resetDates() {
    DqDatePicker.setCookie('start-date', '', -1);
    DqDatePicker.setCookie('end-date', '', -1);
    this.defaultDates();
    // TODO request current path again to update data
  }
  dateChange(event) {
    const name: string = event.target.name;
    const value: string = event.target.value;
    DqDatePicker.setCookie(name, value, 2);
    console.log(name, ' ', value);
    switch (name) {
      case 'start-date': {
        this.startDate = value;
        break;
      }
      case 'end-date': {
        this.endDate = value;
        break;
      }
      default: {
        alert('Unknown change happened please refresh page');
      }
    }
  }

  // componentDidUnload() {
  //   this.setCookie('start-date',"",-1);
  //   this.setCookie('end-date',"",-1);
  // }
  render() {
    if (!this.startDate || !this.endDate) { this.defaultDates(); }
    return (
      <div class='container notification'>
        <form id='form' class='form' method='post' action={this.action}>
          <input id='start-date' class='input' type='date' value={this.startDate} name='start-date'
                 onChange={ (event: UIEvent) => this.dateChange(event)}/>
          <input id='end-date' class='input' type='date' value={this.endDate} name='end-date'
                 onChange={ (event: UIEvent) => this.dateChange(event)}/>
          <input id='submit' type='submit' value='Query date' name='query' class='button is-info'/>
          <i class='fas fa-sync-alt is-pulled-right icon' onClick={ () => this.resetDates()}/>
        </form>
      </div>
    );
  }
}
