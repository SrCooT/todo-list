import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTarefasComponent } from './items-tarefas.component';

describe('ItemsTarefasComponent', () => {
  let component: ItemsTarefasComponent;
  let fixture: ComponentFixture<ItemsTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
