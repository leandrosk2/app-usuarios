import { Component } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent {
<<<<<<< HEAD
  mensagem: String = 'Página Inicial';
=======
   mensagem: string = "Página Inicial.";
>>>>>>> 4c1fecf6ffe08be611c69c9cd55eabcce64361f6
}
