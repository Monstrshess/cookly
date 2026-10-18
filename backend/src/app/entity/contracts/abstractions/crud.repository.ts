export interface DefaultEntityRepository< // TODO: Implement this
    inDTO,
    outDTO>
{
    getElement(id: number): Promise<outDTO|null>;
    getElements(page: number, perPage: number): Promise<outDTO[]>;
    createElement(dto: inDTO): Promise<outDTO>;
    deleteElement(id: number): Promise<outDTO>|null;
    updateElement(id: number, upd: Partial<inDTO>): Promise<outDTO>;
}