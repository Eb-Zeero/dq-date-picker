/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DqDatePicker {
    'action': string;
  }
  interface DqDatePickerAttributes extends StencilHTMLAttributes {
    'action'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DqDatePicker': Components.DqDatePicker;
  }

  interface StencilIntrinsicElements {
    'dq-date-picker': Components.DqDatePickerAttributes;
  }


  interface HTMLDqDatePickerElement extends Components.DqDatePicker, HTMLStencilElement {}
  var HTMLDqDatePickerElement: {
    prototype: HTMLDqDatePickerElement;
    new (): HTMLDqDatePickerElement;
  };

  interface HTMLElementTagNameMap {
    'dq-date-picker': HTMLDqDatePickerElement
  }

  interface ElementTagNameMap {
    'dq-date-picker': HTMLDqDatePickerElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}