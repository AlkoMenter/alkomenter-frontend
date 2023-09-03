export interface BoozeDto {
  profileId: string;
  startTime?: string;
  stopTime?: string;
  stageId: string;
  currentProMille: number;
  selectedDrinkIds: string[] | null;
}
