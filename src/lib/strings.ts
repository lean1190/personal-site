export function truncateString(text: string, length: number): string {
    return text.length > length ? `${text.slice(0, length)}...` : text;
}
