import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let fixture: ComponentFixture<FormComponent>;
  let component: FormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule],  // Import FormsModule for template-driven forms
    });

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should have a name input field with correct attributes', () => {
      const nameInput = fixture.debugElement.query(By.css('input[name="name"]')).nativeElement;

      // Check if the input exists and has the correct attributes
      expect(nameInput).toBeTruthy();
      expect(nameInput.getAttribute('id')).toBe('name');
      expect(nameInput.getAttribute('name')).toBe('name');
      expect(nameInput.getAttribute('type')).toBe('text');
      expect(nameInput.getAttribute('required')).toBe('');
      expect(nameInput.getAttribute('minlength')).toBe('3');
    });

    it('should have an email input field with correct attributes', () => {
      const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;

      // Check if the input exists and has the correct attributes
      expect(emailInput).toBeTruthy();
      expect(emailInput.getAttribute('id')).toBe('email');
      expect(emailInput.getAttribute('name')).toBe('email');
      expect(emailInput.getAttribute('type')).toBe('email');
      expect(emailInput.getAttribute('required')).toBe('');
    });

    it('should have a password input field with correct attributes', () => {
      const passwordInput = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;

      // Check if the input exists and has the correct attributes
      expect(passwordInput).toBeTruthy();
      expect(passwordInput.getAttribute('id')).toBe('password');
      expect(passwordInput.getAttribute('name')).toBe('password');
      expect(passwordInput.getAttribute('type')).toBe('password');
      expect(passwordInput.getAttribute('required')).toBe('');
      expect(passwordInput.getAttribute('minlength')).toBe('6');
    });

    it('should have a submit button with correct attributes', () => {
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

      // Check if the button exists and is correctly configured
      expect(submitButton).toBeTruthy();
      expect(submitButton.getAttribute('type')).toBe('submit');
      expect(submitButton.textContent.trim()).toBe('Submit');
    });
  });
});
