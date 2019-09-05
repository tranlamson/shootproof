export class TreeItem {
    id: number;
    name: string;
    thumbnail: {
        description: string;
        href: string;
    }
    parent: number;
    children?: Array<TreeItem> = [];
}