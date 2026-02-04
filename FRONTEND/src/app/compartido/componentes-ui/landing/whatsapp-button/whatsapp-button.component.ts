import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  @Input() telefono: string = '573000000000';
  @Input() mensaje?: string;
  @Input() position: 'fixed' | 'absolute' = 'fixed';
  @Input() bottom: string = '2rem';
  @Input() right: string = '2rem';

  constructor(private sanitizer: DomSanitizer) {}

  get whatsappUrl(): SafeUrl {
    const mensajeCodificado = this.mensaje
      ? encodeURIComponent(this.mensaje)
      : encodeURIComponent('Hola, me gustaría recibir más información sobre sus proyectos.');
    const url = `https://wa.me/${this.telefono}?text=${mensajeCodificado}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  get estiloPosicion(): { [key: string]: string } {
    return {
      position: this.position,
      bottom: this.bottom,
      right: this.right
    };
  }
}
