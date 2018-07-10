import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserComponent } from './dialog-user.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from '../shared/services/socket.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditUserComponent', () => {
  let component: DialogUserComponent;
  let fixture: ComponentFixture<DialogUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserComponent ],
      imports: [ 
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers:[
        SocketService,
        {provide: MatDialogRef, useValue: {}},
        { provide: MAT_DIALOG_DATA, useValue: [] },

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
