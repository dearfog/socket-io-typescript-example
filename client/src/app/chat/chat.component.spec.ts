import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from './shared/services/socket.service';
import { MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatComponent , DialogUserComponent],
      imports:[MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers:[
        SocketService,         
        {provide: MatDialogRef, useValue: {}},
      ]
    })
  .overrideModule(BrowserDynamicTestingModule, {
    set: {
      entryComponents: [DialogUserComponent]
    }
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
