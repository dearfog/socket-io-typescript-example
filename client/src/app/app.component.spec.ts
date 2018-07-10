import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SocketService } from './chat/shared/services/socket.service';
import { MatDialogRef, MatDialogClose } from '@angular/material';
import { ChatModule } from './chat/chat.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
        NoopAnimationsModule,
        ChatModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        SocketService,         
        {provide: MatDialogRef, useValue: {}},
        {provide: MatDialogClose, useValue: {}},
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
