import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent {
  idControl = new FormControl('');
  nameControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  
  registerForm = new FormGroup({
    id: this.idControl,
    name: this.nameControl,
    email: this.emailControl
  });

  constructor(private matDialogRef: MatDialogRef<EditUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.nameControl.setValue(this.data.usuario.name); 
    this.emailControl.setValue(this.data.usuario.email); 
  }

  save(): void{
    if(this.registerForm.valid){
      this.idControl.setValue(this.data.usuario.id);
      this.matDialogRef.close(this.registerForm.value);
    }
    else{
      this.registerForm.markAllAsTouched();
    }
  }
}
