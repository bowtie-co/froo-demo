
import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-input-item',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }
  ]
})
export class InputComponent implements ControlValueAccessor, OnChanges {
  propagateChange:any = () => {};

  @Input() id: string;
  @Input() name: string;
  // @Input() model: NgModel;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input('inputValue') _inputValue:any;

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(val) {
    this._inputValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    this.propagateChange(this.inputValue);
  }

  writeValue(value) {
    if (value) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
  constructor() { }

  ngOnInit() {
  }

}

// import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
// import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


// export function createCounterRangeValidator(maxValue, minValue) {
//   return (c: FormControl) => {
//     let err = {
//       rangeError: {
//         given: c.value,
//         max: maxValue || 10,
//         min: minValue || 0
//       }
//     };

//   return (c.value > +maxValue || c.value < +minValue) ? err: null;
//   }
// }

// @Component({
//   selector: 'counter-input',
//   template: `
//     <button (click)="increase()">+</button> {{counterValue}} <button (click)="decrease()">-</button>
//   `,
//   providers: [
//     { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
//     { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
//   ]
// })
// export class CounterInputComponent implements ControlValueAccessor, OnChanges {

//   propagateChange:any = () => {};
//   validateFn:any = () => {};
  
//   @Input('counterValue') _counterValue = 0;
//   @Input() counterRangeMax;
//   @Input() counterRangeMin;

//   get counterValue() {
//     return this._counterValue;
//   }
  
//   set counterValue(val) {
//     this._counterValue = val;
//     this.propagateChange(val);
//   }

//   ngOnChanges(inputs) {
//     if (inputs.counterRangeMax || inputs.counterRangeMin) {
//       this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
//       this.propagateChange(this.counterValue);
//     }
//   }

//   writeValue(value) {
//     if (value) {
//       this.counterValue = value;
//     }
//   }

//   registerOnChange(fn) {
//     this.propagateChange = fn;
//   }

//   registerOnTouched() {}

//   increase() {
//     this.counterValue++;
//   }

//   decrease() {
//     this.counterValue--;
//   }

//   validate(c: FormControl) {
//     return this.validateFn(c);
//   }
// }