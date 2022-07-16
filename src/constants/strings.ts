export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Puiku!', 'Sveikiname!', 'Šaunu!']
export const GAME_COPIED_MESSAGE = 'Žaidimo duomenys nukopijuoti į iškarpinę'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Per mažai raidžių'
export const WORD_NOT_FOUND_MESSAGE = 'Žodis nerastas'
export const HARD_MODE_ALERT_MESSAGE =
    'Pasunkinimas gali būti pasirinktas prieš žaidimą!'
export const HARD_MODE_DESCRIPTION =
    'Visos atverstos užuominos turi būti panaudotos'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Kontrastingos spalvos'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
    `Parinktas žodis buvo ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
    `${guess} turi būti panaudota ${position} pozicijoje`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
    `Spėjime privalu įtraukti ${letter}`
export const ENTER_TEXT = 'PATEIKTI'
export const DELETE_TEXT = '⌫'
export const STATISTICS_TITLE = 'Pasiekimai'
export const GUESS_DISTRIBUTION_TEXT = 'Sėkmingi spėjimai'
export const NEW_WORD_TEXT = 'Naujas žodis už'
export const SHARE_TEXT = 'Dalintis'
export const MIGRATE_BUTTON_TEXT = 'Perkelti pasiekimus'
export const MIGRATE_DESCRIPTION_TEXT =
    'Paspauskite norėdami perkelti savo pasiekimus į kitą įrenginį'
export const TOTAL_TRIES_TEXT = 'Sužaista'
export const SUCCESS_RATE_TEXT = 'Sėkmė'
export const CURRENT_STREAK_TEXT = 'Atspėta iš eilės'
export const BEST_STREAK_TEXT = 'Ilgiausia eilė'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
    "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
