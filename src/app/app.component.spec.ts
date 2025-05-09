import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> master
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'fronted-parking' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fronted-parking');
=======
  it(`should have as title 'Parking-Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Parking-Frontend');
>>>>>>> master
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, fronted-parking');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Parking-Frontend');
>>>>>>> master
  });
});
