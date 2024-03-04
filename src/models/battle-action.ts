export interface IBattleAction {
  name?: string;
  damage?: number;
  isMelee?: boolean;
  range?: number;
}

export class BattleAction {
  name?: string;
  damage?: number;
  isMelee?: boolean;
  range?: number;
  
  constructor(config?: IBattleAction) {
    this.name = config?.name;
    this.damage = config?.damage;
    this.isMelee = config?.isMelee;
    this.range = config?.range;
  }
}