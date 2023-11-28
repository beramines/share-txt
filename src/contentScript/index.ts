const url: string = window.location.href.replace(/#.*$/, '');
const textFragment: string = '#:~:text=';

document.addEventListener('keydown', (e) => {
  if (e.code === 'Period' && e.shiftKey && e.metaKey) {
    const targetText: string | undefined = document.getSelection()?.toString();
    if (!targetText) {
      return;
    }

    const shareURLText: string = url+textFragment+encodeURIComponent(targetText);
    navigator.clipboard.writeText(shareURLText).then(
      () => {
        alert(`テキストフラグメント付きURLをコピーしました！\n${shareURLText}`);
      },
      (reason) => {
        console.error(reason);
      }
    );
  }
});


