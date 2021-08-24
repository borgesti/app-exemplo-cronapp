window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Pessoa = window.blockly.js.blockly.Pessoa || {};

/**
 * Pessoa
 */
window.blockly.js.blockly.Pessoa.abrirMolduraArgs = [];
window.blockly.js.blockly.Pessoa.abrirMoldura = async function() {

  this.cronapi.screen.showModal("modalInfor");
  return null;
}

/**
 * Pessoa
 */
window.blockly.js.blockly.Pessoa.fecharMolduraArgs = [];
window.blockly.js.blockly.Pessoa.fecharMoldura = async function() {

  this.cronapi.screen.hideModal("modalInfor");
  return null;
}
