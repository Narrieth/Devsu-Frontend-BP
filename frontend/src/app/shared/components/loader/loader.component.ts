import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  @Input() hidden: boolean = false;
  @Input() title: string = 'Cargando';

  constructor() { }

  ngOnInit(): void { }
}
