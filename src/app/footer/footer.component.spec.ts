import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create footer', () => {
    expect(component).toBeTruthy();
  });

  it('should contain reserved Rights', () => {
    const de = fixture.debugElement.query(By.css('.text-muted'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('All Rights Reserved 2019 @ My Favorite Recipes');
  });
});
