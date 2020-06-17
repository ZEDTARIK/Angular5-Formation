import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms"
import { Directive } from "@angular/core";

@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectedRequiredValidatorDirective,
        multi: true
    }]
})

export class SelectedRequiredValidatorDirective implements Validator {

    // @Input('appSelectValidator') defaultValue: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    }

}