import { IsNotEmpty } from 'class-validator';
export class PharmacieDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  nom : string;

  @IsNotEmpty({
    message: 'Le champ telephone est obligatoire',
  })
  telephone: string;

  @IsNotEmpty({
    message: 'Le champ commune est obligatoire',
  })
  commune: string;

  @IsNotEmpty({
    message: 'Le champ avenu est obligatoire',
  })
  communeavenu: string;

  @IsNotEmpty({
    message: 'Le champ quartier est obligatoire',
  })
  id_quartier: string;
}