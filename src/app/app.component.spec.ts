import { TestBed, async } from '@angular/core/testing';
import { BarModule } from './bar/bar.module';

import { AppComponent } from './app.component';
import { CustomDisplayComponent } from './custom-display/custom-display.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomDisplayComponent,
      ],
      imports: [BarModule]
    }).compileComponents();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
