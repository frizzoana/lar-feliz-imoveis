import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription} from 'rxjs';

@Component({
  selector: 'app-session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.scss']
})
export class SessionTimerComponent {

  timerObservable: Observable<number>;
  timerSubscription: Subscription;
  timePassed: number = 0;

  alertWarning: boolean = false;
  alertDanger: boolean = false;
  alertMessage: string;

constructor () {}

ngOnInit(): void {
  this.timerObservable = timer(0, 1000);

  this.timerSubscription = this.timerObservable.subscribe (() =>{
    this.timePassed++;

if (this.timePassed === 60) {
  this.handleLogout();
} else if (this.timePassed === 45) {
  this.showDanger('Você será deslogado em 15 minutos');
} else if (this.timePassed === 45) {
  this.showWarning('Sua sessão está prestes a encerrar');
}
  })
}

showWarning(mensagem: string): void {
  this.alertWarning = true;
  this.alertMessage = mensagem;
}

showDanger(mensagem: string): void {
  this.alertWarning = false;
  this.alertDanger = true;
  this.alertMessage = mensagem;
}

handleLogout(): void {
  alert('Sua sessão está encerrando...');
}

}


