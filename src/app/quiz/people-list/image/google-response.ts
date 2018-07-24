export interface GoogleResponse {
    items: GoogleResponseItem[];
}

export interface GoogleResponseItem {
    pagemap: GoogleResponsePageMap;
}

export interface GoogleResponsePageMap {
    cse_thumbnail: GoogleResponseItemThumbnail[];
}

export interface GoogleResponseItemThumbnail {
    width: number;
    height: number;
    src: string;
}