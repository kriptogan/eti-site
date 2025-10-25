import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-form',
  templateUrl: './cta-form.component.html',
  styleUrls: ['./cta-form.component.css']
})
export class CtaFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      phone: ['', [Validators.required, Validators.pattern('[0-9()#&+*-=.]+')]],
      message: ['']
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);
      
      // Show success message
      alert(this.translate.instant('cta.form.success'));
      
      // Reset form
      this.contactForm.reset();
    }
  }
}
