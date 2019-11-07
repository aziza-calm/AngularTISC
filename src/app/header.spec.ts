import { TestBed, async } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Header
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularTISC'`, () => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AngularTISC');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AngularTISC app is running!');
  });
});
