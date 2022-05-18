import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  public classWorking: string = 'working';

  constructor() {
    this.setTheme();
  }

  private getUrlTheme(value: string): string {
    return './assets/css/colors/' + value + '.css';
  }

  private setTheme(): void {
    const date = new Date();
    let theme = './assets/css/colors/default.css';
    if (date.getHours() >= 17) theme = './assets/css/colors/default-dark.css';

    const url = localStorage.getItem('theme');
    this.linkTheme?.setAttribute('href', url || theme);
  }

  public changeTheme(theme: string): void {
    const url = this.getUrlTheme(theme);

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  public checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');
    links.forEach((item: Element) => {
      item.classList.remove(this.classWorking);

      const btnTheme = item.className.split('selector')[1].split('-theme')[0];
      const btnThemeUrl = this.getUrlTheme(btnTheme);
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) item.classList.add(this.classWorking);
    });
  }
}
