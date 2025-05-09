import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> master
=======
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
      imports: [AppComponent],
=======
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> master
=======
      imports: [AppComponent],
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
  it(`should have the 'fronted-parking' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fronted-parking');
<<<<<<< HEAD
=======
  it(`should have as title 'Parking-Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Parking-Frontend');
>>>>>>> master
=======
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, fronted-parking');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Parking-Frontend');
>>>>>>> master
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, fronted-parking');
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
  });
});
