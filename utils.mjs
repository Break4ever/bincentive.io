export function toAccounting(num) {
    return (parseFloat(num) || 0).toLocaleString('zh-TW');
}

export function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard successfully');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
}