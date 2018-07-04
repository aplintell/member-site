import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{
    static notContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return{
                notContainSpace: true
            };
        }
        return null;
    }

    //This one is example about async validator -> not used yet
    static loginIdShouldBeUnique(control: AbstractControl): Promise<ValidationErrors| null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === 't@g.g'){
                    resolve({loginIdShouldBeUnique:true});
                }else{
                    resolve(null);
                }
            },20000)
        });
    }
}