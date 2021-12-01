import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourNftsComponent } from './your-nfts.component';

describe('YourNftsComponent', () => {
  let component: YourNftsComponent;
  let fixture: ComponentFixture<YourNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourNftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
