export default {
  supportedLanguages: [
    { id: 'en', title: 'English' },
    { id: 'fr', title: 'Français' }
  ],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name)
}
