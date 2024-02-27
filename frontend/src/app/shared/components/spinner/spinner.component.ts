import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  @Input() hidden: boolean = false;
  @Input() visible: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
