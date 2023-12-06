import { Publisher } from "./Publisher";
import { RecordItem } from "./RecordItem";

export interface Territory {
    _id: string,
    assigned_publisher : Publisher | null,
    dirve_link : string,
    record: RecordItem[] | null,
    territory_id : string,
}