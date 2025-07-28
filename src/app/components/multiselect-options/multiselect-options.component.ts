import { Component, Input, Output, EventEmitter, HostListener, OnInit, inject } from '@angular/core';
import { TechnologyEnum } from "../../modules/enums/techs.enum";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect-options.component.html',
  styleUrls: ['./multiselect-options.component.scss'],
  standalone: true,
  imports: [
    TranslatePipe
  ]
})
export class MultiselectOptionsComponent implements OnInit {
  @Input() options: TechnologyEnum[] = [];
  @Input() selected: TechnologyEnum[] = [];

  @Output() selectionChange = new EventEmitter<TechnologyEnum[] | null>();

  isOpen = false;
  tempSelected: TechnologyEnum[] = [];

  private readonly translateService: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.tempSelected = [...this.selected];
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.tempSelected = [...this.selected];
    }
  }

  toggleOption(option: TechnologyEnum): void {
    const index = this.tempSelected.indexOf(option);
    if (index >= 0) {
      this.tempSelected.splice(index, 1);
    } else {
      this.tempSelected.push(option);
    }
  }

  isSelected(option: TechnologyEnum): boolean {
    return this.tempSelected.includes(option);
  }

  selectAll(): void {
    this.tempSelected = [];
    this.applySelection();
  }

  applySelection(): void {
    this.isOpen = false;

    this.tempSelected.length === 0 ? this.selectionChange.emit(null) : (this.selectionChange.emit([...this.tempSelected]));
  }

  cancelSelection(): void {
    this.tempSelected = [...this.selected];
    this.isOpen = false;
  }

  get selectedLabel(): string {
    if (this.selected.length === 0) return this.translateService.instant('SELECT');
    if (this.selected.length === 1) return this.selected[0];
    return this.translateService.instant('SELECTEDS', { count: this.selected.length });
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.cancelSelection();
    }
  }
}
