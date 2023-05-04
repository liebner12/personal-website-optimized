import { THEMES } from 'data';
import { theme } from 'tailwind.config';

export const getCurrentTheme = (path: string) => {
  switch (true) {
    case /^(?=.{1,1}$)[/]*$/.test(path):
      return { color: theme.colors.home, theme: THEMES.home };
    case /\/about.*/.test(path):
      return { color: theme.colors.about, theme: THEMES.about };
    case /\/blog.*/.test(path) ||
      /\/privacy.*/.test(path) ||
      /\/newsletter.*/.test(path):
      return { color: theme.colors.blog, theme: THEMES.blog };
    case /\/contact.*/.test(path):
      return { color: theme.colors.contact, theme: THEMES.contact };
    case /\/projects.*/.test(path):
      return { color: theme.colors.projects, theme: THEMES.projects };
    default:
      return { color: theme.colors.error, theme: THEMES.error };
  }
};
