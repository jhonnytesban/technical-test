import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeroComponent } from './table-hero.component';

describe('TableHeroComponent', () => {
  let component: TableHeroComponent;
  let fixture: ComponentFixture<TableHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
