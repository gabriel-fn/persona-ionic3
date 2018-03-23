import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Key } from './../../interfaces/key';
import { Persona } from './../../interfaces/persona';
import { TotalPoints } from './../../interfaces/total-points';

import { PersonaProvider } from '../../providers/persona/persona';
import { KeysProvider } from './../../providers/keys/keys';
import { HelperProvider } from './../../providers/helper/helper';

@IonicPage()
@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {

  forms: FormGroup;
  persona: Persona;
  totalPoints: TotalPoints;
  bonusPoints: any;
  abilityKeys: Key[];
  combatKeys: Key[];
  savingKeys: Key[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private helperProvider: HelperProvider,
              private keysProvider: KeysProvider,
              private personaProvider: PersonaProvider ) {
    this.abilityKeys = this.keysProvider.abilityKeys;
    this.combatKeys = this.keysProvider.combatKeys;
    this.savingKeys = this.keysProvider.savingKeys;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

  ngOnInit() {
    this.persona = this.navParams.data;
    this.totalPoints = this.personaProvider.getTotalPoints(this.persona);
    this.bonusPoints = this.personaProvider.getBonusPoints(this.persona);
    this.forms = this.formBuilder.group({
      id : [this.persona.id],
      name : [ this.persona.name,
        [ Validators.required,
          Validators.min(4),
          Validators.max(8)] ],
      np : [this.persona.np, Validators.required],
      forca : [ this.persona.forca, Validators.required],
      destreza : [this.persona.destreza, Validators.required],
      constituicao : [this.persona.constituicao, Validators.required],
      inteligencia : [this.persona.inteligencia, Validators.required],
      sabedoria : [this.persona.sabedoria, Validators.required],
      carisma : [this.persona.carisma, Validators.required],
      dano : [this.persona.dano, Validators.required],
      ataque : [this.persona.ataque, Validators.required],
      defesa : [this.persona.defesa, Validators.required],
      vida : [this.persona.vida, Validators.required],
      iniciativa : [this.persona.iniciativa, Validators.required],
      resistencia : [this.persona.resistencia, Validators.required],
      reflexo : [this.persona.reflexo, Validators.required],
      fortitude : [this.persona.fortitude, Validators.required],
      vontade : [this.persona.vontade, Validators.required],
    });
    this.forms.valueChanges.subscribe(
      (persona) => {
        this.totalPoints = this.personaProvider.getTotalPoints(persona);
        this.bonusPoints = this.personaProvider.getBonusPoints(persona);
      } 
    );
  }

  savePersona() {
    if (this.forms.invalid) {
      this.helperProvider.persistAlert('Formulário invalido! Tente novamenteou refaça.');
    } else {
      this.personaProvider.savePersona(this.forms.value)
      .subscribe(
        (data) => {
          this.helperProvider.timeAlert('Salvo com sucesso!');
          this.navCtrl.pop();
        },
        (erro) => {
          console.log(erro);
          this.helperProvider.persistAlert('Erro ao tentar salvar! Algo de errado não está certo.');
        }
      );
    }
  }
  
}
