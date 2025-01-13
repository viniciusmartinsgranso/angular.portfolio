import { Type } from "@angular/core";

export interface ModalInterface {
  component: Type<any>;
  inputs?: Record<string, any>;
}
