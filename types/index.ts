export interface ICategory{
    id: number;
    attributes: ICategoryAttribute;
}

export interface IImageData{
    data:{
        attributes: {
            url: string;
            formats:{
                small:{
                    url: string;
                };
            };
        };
    };
}

export interface ICategoryAttribute{
    Title: string;
    Slug: string;
    Image: IImageData;
}

export interface IMobilesAttribute{
    Title: string;
    Slug: string;
    Image: IImageData;
}

export interface IPagination{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta{
    pagination: IPagination;
}


export interface ICollectionResponse<T>{
        data: T;
        meta: IResourceMeta;
}

export interface IMobile{
    id: number;
    attributes: IMobilesAttribute;
}

export interface IQueryOptions {
    filters: any;
    populate: any;
    
}