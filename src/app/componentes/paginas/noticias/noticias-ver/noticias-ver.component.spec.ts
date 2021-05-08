import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasVerComponent } from './noticias-ver.component';

describe('NoticiasVerComponent', () => {
  let component: NoticiasVerComponent;
  let fixture: ComponentFixture<NoticiasVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
