import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Bean } from './bean';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-update-button',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule],
  template: `
    <p-button
      icon="pi pi-pencil"
      (onClick)="startUpdate(item)"
      pTooltip="Edit the account"
      [style]="{ 'margin-right': '15px' }"
    />
  `,
})
export class StartUpdateButtonComponent<T extends Bean> {
  @Input() item!: T;
  @Input() beansName!: string;
  @Input() removed!: () => void;

  private readonly router = inject(Router);

  startUpdate(item: T): void {
    this.router.navigate([`${this.beansName}/edit`], { state: { bean: item } });
  }
}
