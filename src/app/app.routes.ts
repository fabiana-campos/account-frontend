import { Routes } from '@angular/router';
import { OwnerInsertComponent } from './owner/owner-insert.component';
import { OwnerListComponent } from './owner/owner-list.component';
import { LoginPageComponent } from './auth/login-page.component';
import { AuthGuard } from './auth/auth.guard';
import { OwnerUpdateComponent } from './owner/owner-update.component';
import { CrudBeanPageComponent } from './crud-bean-page.component';
import { CategoryListComponent } from './category/category-list.component';
import { CategoryInsertComponent } from './category/category-insert.component';
import { CategoryUpdateComponent } from './category/category-update.component';
import { AccountListComponent } from './account/account-list.component';
import { AccountInsertComponent } from './account/account-insert.component';
import { AccountUpdateComponent } from './account/account-update.component';
import { EntryListComponent } from './entry/entry-list.component';
import { EntryInsertComponent } from './entry/entry-insert.component';
import { EntryUpdateComponent } from './entry/entry-update.component';
import { EntryDetailComponent } from './entry/entry-detail.component';
import { CategoryDetailComponent } from './category/category-detail.component';
import { AccountDetailComponent } from './account/account-detail.component';
import { OwnerDetailComponent } from './owner/owner-detail.component';
import { BalanceListComponent } from './owner-equity-account-initial-value/balance-list.component';
import { BalanceDetailComponent } from './owner-equity-account-initial-value/balance-detail.component';
import { OwnerEquityAccountInitialValueUpdateComponent } from './owner-equity-account-initial-value/owner-equity-account-initial-value-update.component';
import { OwnerEquityAccountInitialValueInsertComponent } from './owner-equity-account-initial-value/owner-equity-account-initial-value-insert.component';
import { BeanDetailPanelComponent } from './bean/bean-detail-panel.component';
import { BeanListPanelComponent } from './bean/bean-list-panel.component';
import { BeanInsertPanelComponent } from './bean/bean-insert-panel.component';
import { OwnerUpdateFormGroupService } from './owner/owner-update-form-group.service';
import { CategoryUpdateFormGroupService } from './category/category-update-form-group.service';
import { AccountUpdateFormGroupService } from './account/account-update-form-group.service';
import { EntryUpdateFormGroupService } from './entry/entry-update-form-group.service';
import { BeanUpdatePanelComponent } from './bean/bean-update-panel.component';
import { OwnerEquityAccountInitialValueInsertFormGroupService } from './owner-equity-account-initial-value/owner-equity-account-initial-value-insert-form-group.service';
import { EntryInsertFormGroupService } from './entry/entry-insert-form-group.service';
import { AccountInsertFormGroupService } from './account/account-insert-form-group.service';
import { CategoryInsertFormGroupService } from './category/category-insert-form-group.service';
import { OwnerInsertFormGroupService } from './owner/owner-insert-form-group.service';
import { OwnerEquityAccountInitialValueUpdateFormGroupService } from './owner-equity-account-initial-value/owner-equity-account-initial-value-update-form-group.service';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'balances',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Balances', titleClass: 'blue' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: BalanceListComponent,
          serviceName: 'Balance',
          routerName: 'balances',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: OwnerEquityAccountInitialValueInsertComponent,
          beanInsertFormGroupService: OwnerEquityAccountInitialValueInsertFormGroupService,
          serviceName: 'OwnerEquityAccountInitialValue',
          routerName: 'ownerEquityAccountInitialValues',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: OwnerEquityAccountInitialValueUpdateComponent,
          beanUpdateFormGroupService: OwnerEquityAccountInitialValueUpdateFormGroupService,
          serviceName: 'OwnerEquityAccountInitialValue',
          routerName: 'ownerEquityAccountInitialValues',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: BalanceDetailComponent,
          serviceName: 'Balance',
          routerName: 'balances',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'creditEntries',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Credit Entries', titleClass: 'green' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: { beanListComponent: EntryListComponent, serviceName: 'CreditEntry', type: 'Credit' },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: EntryInsertComponent,
          beanInsertFormGroupService: EntryInsertFormGroupService,
          serviceName: 'CreditEntry',
          inAccountType: 'Equity',
          outAccountType: 'Credit',
          beanName: 'Credit Entry',
          routerName: 'creditEntries',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: EntryUpdateComponent,
          beanUpdateFormGroupService: EntryUpdateFormGroupService,
          serviceName: 'CreditEntry',
          inAccountType: 'Equity',
          outAccountType: 'Credit',
          beanName: 'Credit Entry',
          routerName: 'creditEntries',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: EntryDetailComponent,
          serviceName: 'CreditEntry',
          routerName: 'creditEntries',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'debitEntries',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Debit Entries', titleClass: 'red' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: { beanListComponent: EntryListComponent, serviceName: 'DebitEntry', type: 'Debit' },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: EntryInsertComponent,
          beanInsertFormGroupService: EntryInsertFormGroupService,
          serviceName: 'DebitEntry',
          inAccountType: 'Debit',
          outAccountType: 'Equity',
          beanName: 'Debit Entry',
          routerName: 'debitEntries',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: EntryUpdateComponent,
          beanUpdateFormGroupService: EntryUpdateFormGroupService,
          serviceName: 'DebitEntry',
          inAccountType: 'Debit',
          outAccountType: 'Equity',
          beanName: 'Debit Entry',
          routerName: 'debitEntries',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: EntryDetailComponent,
          serviceName: 'DebitEntry',
          routerName: 'debitEntries',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'transferEntries',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Transfer Entries', titleClass: 'blue' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: EntryListComponent,
          serviceName: 'TransferEntry',
          type: 'Transfer',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: EntryInsertComponent,
          beanInsertFormGroupService: EntryInsertFormGroupService,
          serviceName: 'TransferEntry',
          inAccountType: 'Equity',
          outAccountType: 'Equity',
          beanName: 'Transfer Entry',
          routerName: 'transferEntries',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: EntryUpdateComponent,
          beanUpdateFormGroupService: EntryUpdateFormGroupService,
          serviceName: 'TransferEntry',
          inAccountType: 'Equity',
          outAccountType: 'Equity',
          beanName: 'Transfer Entry',
          routerName: 'transferEntries',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: EntryDetailComponent,
          serviceName: 'TransferEntry',
          routerName: 'transferEntries',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'creditAccounts',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Credit Accounts', titleClass: 'green' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: AccountListComponent,
          serviceName: 'CreditAccount',
          type: 'Credit',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: AccountInsertComponent,
          beanInsertFormGroupService: AccountInsertFormGroupService,
          serviceName: 'CreditAccount',
          categoryType: 'Credit',
          beanName: 'Credit Account',
          routerName: 'creditAccounts',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: AccountUpdateComponent,
          beanUpdateFormGroupService: AccountUpdateFormGroupService,
          serviceName: 'CreditAccount',
          categoryType: 'Credit',
          beanName: 'Credit Account',
          routerName: 'creditAccounts',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: AccountDetailComponent,
          serviceName: 'CreditAccount',
          routerName: 'creditAccounts',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'debitAccounts',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Debit Accounts', titleClass: 'red' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: AccountListComponent,
          serviceName: 'DebitAccount',
          type: 'Debit',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: AccountInsertComponent,
          beanInsertFormGroupService: AccountInsertFormGroupService,
          serviceName: 'DebitAccount',
          categoryType: 'Debit',
          beanName: 'Debit Account',
          routerName: 'debitAccounts',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: AccountUpdateComponent,
          beanUpdateFormGroupService: AccountUpdateFormGroupService,
          serviceName: 'DebitAccount',
          categoryType: 'Debit',
          beanName: 'Debit Account',
          routerName: 'debitAccounts',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: AccountDetailComponent,
          serviceName: 'DebitAccount',
          routerName: 'debitAccounts',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'equityAccounts',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Equity Accounts', titleClass: 'blue' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: AccountListComponent,
          serviceName: 'EquityAccount',
          type: 'Equity',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: AccountInsertComponent,
          beanInsertFormGroupService: AccountInsertFormGroupService,
          serviceName: 'EquityAccount',
          categoryType: 'Equity',
          beanName: 'Equity Account',
          routerName: 'equityAccounts',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: AccountUpdateComponent,
          beanUpdateFormGroupService: AccountUpdateFormGroupService,
          serviceName: 'EquityAccount',
          categoryType: 'Equity',
          beanName: 'Equity Account',
          routerName: 'equityAccounts',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: AccountDetailComponent,
          serviceName: 'EquityAccount',
          routerName: 'equityAccounts',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'creditCategories',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Credit Categories', titleClass: 'green' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: CategoryListComponent,
          serviceName: 'CreditCategory',
          type: 'Credit',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: CategoryInsertComponent,
          beanInsertFormGroupService: CategoryInsertFormGroupService,
          serviceName: 'CreditCategory',
          beanName: 'Credit Category',
          routerName: 'creditCategories',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: CategoryUpdateComponent,
          beanUpdateFormGroupService: CategoryUpdateFormGroupService,
          serviceName: 'CreditCategory',
          beanName: 'Credit Category',
          routerName: 'creditCategories',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: CategoryDetailComponent,
          serviceName: 'CreditCategory',
          routerName: 'creditCategories',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'debitCategories',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Debit Categories', titleClass: 'red' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: CategoryListComponent,
          serviceName: 'DebitCategory',
          type: 'Debit',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: CategoryInsertComponent,
          beanInsertFormGroupService: CategoryInsertFormGroupService,
          serviceName: 'DebitCategory',
          beanName: 'Debit Category',
          routerName: 'debitCategories',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: CategoryUpdateComponent,
          beanUpdateFormGroupService: CategoryUpdateFormGroupService,
          serviceName: 'DebitCategory',
          beanName: 'Debit Category',
          routerName: 'debitCategories',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: CategoryDetailComponent,
          serviceName: 'DebitCategory',
          routerName: 'debitCategories',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'equityCategories',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Equity Categories', titleClass: 'blue' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: {
          beanListComponent: CategoryListComponent,
          serviceName: 'EquityCategory',
          type: 'Equity',
        },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: CategoryInsertComponent,
          beanInsertFormGroupService: CategoryInsertFormGroupService,
          serviceName: 'EquityCategory',
          beanName: 'Equity Category',
          routerName: 'equityCategories',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: CategoryUpdateComponent,
          beanUpdateFormGroupService: CategoryUpdateFormGroupService,
          serviceName: 'EquityCategory',
          beanName: 'Equity Category',
          routerName: 'equityCategories',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: CategoryDetailComponent,
          serviceName: 'EquityCategory',
          routerName: 'equityCategories',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'owners',
    component: CrudBeanPageComponent,
    canActivate: [AuthGuard],
    data: { title: 'Owners', titleClass: 'blue' },
    children: [
      {
        path: 'list',
        component: BeanListPanelComponent,
        data: { beanListComponent: OwnerListComponent, serviceName: 'Owner' },
      },
      {
        path: 'new',
        component: BeanInsertPanelComponent,
        data: {
          beanInsertComponent: OwnerInsertComponent,
          beanInsertFormGroupService: OwnerInsertFormGroupService,
          serviceName: 'Owner',
          beanName: 'Owner',
          routerName: 'owners',
        },
      },
      {
        path: 'edit',
        component: BeanUpdatePanelComponent,
        data: {
          beanUpdateComponent: OwnerUpdateComponent,
          beanUpdateFormGroupService: OwnerUpdateFormGroupService,
          serviceName: 'Owner',
          beanName: 'Owner',
          routerName: 'owners',
        },
      },
      {
        path: 'detail',
        component: BeanDetailPanelComponent,
        data: {
          beanDetailComponent: OwnerDetailComponent,
          serviceName: 'Owner',
          routerName: 'owners',
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  {
    path: 'ownerEquityAccountInitialValues/detail',
    redirectTo: 'balances/detail',
    pathMatch: 'full',
  },
  { path: 'ownerEquityAccountInitialValues', redirectTo: 'balances', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
