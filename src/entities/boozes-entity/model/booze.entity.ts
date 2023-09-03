export interface BoozeEntity {
  profileId: string;
  startTime: Date;
  stopTime: Date;
  stageId: string;
  currentProMille: number;
  selectedDrinkIds: string[];
}
