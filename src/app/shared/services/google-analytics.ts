import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    [key: string]: any;
  }
}

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
  private gaId = 'G-MK6FFR60SQ';
  private scriptLoaded = false;

  public loadScript(): void {
    if (this.scriptLoaded) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
    script.async = true;
    document.head.appendChild(script);
    this.scriptLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  public initGA(): void {
    // Inicializar configuración
    if (!window.gtag) return; // script aún no cargado
    window.gtag('js', new Date());
    window.gtag('config', this.gaId);
    window['ga-disable-' + this.gaId] = false; // habilitar GA si estaba bloqueado
  }

  public enableGA(): void {
    this.loadScript();
    this.initGA();
  }

  public disableGA(): void {
    window['ga-disable-' + this.gaId] = true;

    //  limpiar eventos en cola
    if (window.dataLayer) {
      window.dataLayer.length = 0;
    }

    // eliminar script del DOM
    const script = document.getElementById('ga-script');
    if (script) {
      script.remove();
      this.scriptLoaded = false;
    }

    // Reiniciar gtag para evitar llamadas posteriores
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}
