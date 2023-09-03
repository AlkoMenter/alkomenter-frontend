export interface BoozeDto {
  profileId: number | undefined;
  startTime?: Date;
  stopTime?: number;
  stageId: string;
  currentProMille: number;
  selectedDrinkIds: string[] | null;
}
