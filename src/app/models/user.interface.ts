export interface USER {
    name: string;
    phone: string;
    email: string;
    website?: string;
}

export interface MODAL_USER {
    name?: string;
    phone?: string;
    email?: string;
    website?: string;
    type: string;
}