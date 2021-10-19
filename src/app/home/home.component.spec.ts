import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [HomeComponent],
        imports: [
          RouterTestingModule
        ],
        providers: [
          provideMockStore({}),
        ]
      })
        .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h4').textContent).toContain('Welcome');
    });
  });
  