import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [FormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        // 1. Test form initialization
        it('should create the form and initialize fields correctly', () => {
            expect(component).toBeTruthy();
            const formElement = fixture.debugElement.query(By.css('form'));
            expect(formElement).toBeTruthy();
        });

        it('should mark name field as valid when it has 3 or more characters', () => {
            const nameInput = fixture.debugElement.query(By.css('input[name="name"]')).nativeElement;
            nameInput.value = 'John';
            nameInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const nameErrorMessage = fixture.debugElement.query(By.css('.text-danger'));
            expect(nameErrorMessage).toBeNull();
        });

        it('should not show error message if the email is valid', () => {
            const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
            emailInput.value = 'test@example.com'; // Valid email
            emailInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const emailErrorMessage = fixture.debugElement.query(By.css('.text-danger'));
            expect(emailErrorMessage).toBeNull();
        });

        it('should not show error message if the age is 18 or more', () => {
            const ageInput = fixture.debugElement.query(By.css('input[name="age"]')).nativeElement;
            ageInput.value = '18'; // Valid age
            ageInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const ageErrorMessage = fixture.debugElement.query(By.css('.text-danger'));
            expect(ageErrorMessage).toBeNull();
        });

        it('should not show error message if password has 6 or more characters', () => {
            const passwordInput = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;
            passwordInput.value = 'password'; // Valid password
            passwordInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const passwordErrorMessage = fixture.debugElement.query(By.css('.text-danger'));
            expect(passwordErrorMessage).toBeNull();
        });

        it('should not show error message if passwords match', () => {
            const passwordInput = fixture.debugElement.query(By.css('input[name="password"]')).nativeElement;
            const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]')).nativeElement;

            passwordInput.value = 'password123';
            confirmPasswordInput.value = 'password123';
            passwordInput.dispatchEvent(new Event('input'));
            confirmPasswordInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const confirmPasswordErrorMessage = fixture.debugElement.query(By.css('.text-danger'));
            expect(confirmPasswordErrorMessage).toBeNull();
        });
    });
});
