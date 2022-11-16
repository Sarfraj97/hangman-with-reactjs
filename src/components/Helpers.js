export function notificationPopup( setter ) {
  setter(true)
  setTimeout(() => { setter(false) },  2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win'
  word.split('').forEach((w) => {
    if(!correct.includes(w)) {
      status = ''
    }
  })
  if(wrong.length > 5) status = 'loose';
  return status
}