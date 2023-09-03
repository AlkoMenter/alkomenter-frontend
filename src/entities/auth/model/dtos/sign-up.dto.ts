export interface SignUpDto {
  login?: string | null;
  password?: string | null;
  name?: string | null;
  age?: number | null;
  weight?: number | null;
  gender: boolean;
}
