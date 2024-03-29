import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gcs-theme-switch',
  templateUrl: './theme-switch.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent implements OnInit {
  darkThemeToggleControl = new FormControl(false, []);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.darkThemeToggleControl.valueChanges.subscribe((value) => {
      if (value) this.document.body.classList.add('dark');
      else this.document.body.classList.remove('dark');

      localStorage.setItem('theme', value ? 'dark' : 'light');
    });

    const persistedTheme = localStorage.getItem('theme');
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;

    /*
    * If we previously saved the theme as Dark, 
    * Or If we havent saved, but user OS is in dark mode 
    */
   
    if (
      (persistedTheme && persistedTheme === 'dark') ||
      (!persistedTheme && prefersDarkTheme)
    ) {
      this.darkThemeToggleControl.patchValue(true, {
        emitEvent: true,
        emitModelToViewChange: true,
        emitViewToModelChange: true,
      });
    }
  }

}
