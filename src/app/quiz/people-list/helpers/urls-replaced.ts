export function urlsReplaced(rule: RegExp, ...urls: string[]): boolean {
    return urls.some(url => rule.test(url));
}