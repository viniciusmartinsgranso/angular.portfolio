import { ApplicationRef, ComponentRef, createComponent, inject, Injectable, Injector } from '@angular/core';
import { ModalInterface } from "../modules/interfaces/modal.interface";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //#region Injectable Properties

  private readonly injector: Injector = inject(Injector);

  private readonly appRef: ApplicationRef = inject(ApplicationRef);

  //#endregion

  //#region Private Properties

  private modalRef?: ComponentRef<any>;

  private modalContainer?: HTMLDivElement;

  //#endregion

  //#region Public Properties

  //#endregion


  //#region Public Methods

  public create(options: ModalInterface): void {
    if (this.modalRef) {
      this.destroy();
    }

    this.modalContainer = document.createElement('div');
    this.modalContainer.className = 'modal-backdrop';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close-button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => this.destroy());
    modalContent.appendChild(closeButton);

    this.modalRef = createComponent(options.component, {
      environmentInjector: this.appRef.injector,
    });

    if (options.inputs) {
      Object.entries(options.inputs).forEach(([key, value]) => {
        this.modalRef!.instance[key] = value;
      });
    }

    this.appRef.attachView(this.modalRef.hostView);

    // Adiciona classe para ativar a animação
    modalContent.style.animation = 'modalFadeIn 0.5s ease-out';
    modalContent.appendChild((this.modalRef.hostView as any).rootNodes[0]);
    this.modalContainer.appendChild(modalContent);

    // Adiciona a modal ao DOM
    document.body.appendChild(this.modalContainer);
  }

  public destroy(): void {
    if (this.modalRef) {
      // Inicia a animação de saída
      const modalContent = this.modalContainer?.querySelector('.modal-content') as HTMLElement;
      if (modalContent) {
        modalContent.style.animation = 'modalFadeOut 0.5s ease-in';
      }

      setTimeout(() => {
        this.appRef.detachView(this.modalRef!.hostView);
        this.modalRef!.destroy();
        this.modalRef = undefined;

        if (this.modalContainer) {
          this.modalContainer.remove();
          this.modalContainer = undefined;
        }
      }, 500); // Tempo da animação
    }
  }

  //#endregion

}
