import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEditorComponent } from './shopping-editor.component';

describe('ShoppingEditorComponent', () => {
  let component: ShoppingEditorComponent;
  let fixture: ComponentFixture<ShoppingEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
