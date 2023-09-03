export interface UpdateProfileDto {
  id: string
  accountId?: string;
  name: string;
  age: number;
  weight: number;
  gender: boolean;
}
