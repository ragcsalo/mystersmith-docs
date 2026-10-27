// make_actions_page.js - builds docs/api/available-actions.md ("List of available actions") from the app's
// action picker list (settings.js create_action_option_list), the device list (ble_devices.js) and the feature list
// (all_features.js). Run it again whenever the app's actions change:
//
//   node tools/make_actions_page.js [path to the app's www folder]
//
// Left out: the commented-out lines, every action (or group) with the "csakbenke" class (private), the
// if (username=="benkexxxx") block (developer only) and "no action".

var fs = require('fs');
var path = require('path');

var WWW = process.argv[2] || 'C:/Android/Appok/2024/mystersmith/platforms/android/app/src/main/assets/www';
var CEL = path.join(__dirname, '..', 'docs', 'api', 'available-actions.md');

function olvas(fajl) { return fs.readFileSync(path.join(WWW, fajl), 'utf8'); }

// ---- the action list: every add_action_option_list_element({...}) line of create_action_option_list(), with the
// if-blocks it is in
var src = olvas('settings.js');
var body = src.substring(src.indexOf('function create_action_option_list'), src.indexOf('function add_action_option_list_element'));
var akciok = [], feltetelek = [];
body.split('\n').forEach(function(sor) {
  var t = sor.trim();
  if (t.startsWith('//')) { return; }
  var m = t.match(/^add_action_option_list_element\((\{.*\})\);/);
  var nyit = (t.match(/\{/g) || []).length, zar = (t.match(/\}/g) || []).length;
  if (m) {
    var o = JSON.parse(m[1]);
    o.class = o.class || '';
    o.cond = feltetelek.slice();
    akciok.push(o);
    return;
  }
  if (/^(if|else|for)\b|^\}\s*else/.test(t) && nyit > zar) { feltetelek.push(t); }
  else if (zar > nyit && feltetelek.length) { feltetelek.pop(); }
});

// ---- devices: ['type', 'Name', 'flags']
var eszkozok = {};
var bsrc = olvas('ble_devices.js');
var blista = bsrc.substring(bsrc.indexOf('var ble_device_list'), bsrc.indexOf('];', bsrc.indexOf('var ble_device_list')));
blista.split('\n').forEach(function(sor) {
  var t = sor.trim();
  if (t.startsWith('//')) { return; }
  var m = t.match(/^\['([a-zA-Z0-9_]+)',\s*'([^']+)'(?:,\s*'([^']*)')?\]/);
  if (m && m[1] != 'title') { eszkozok[m[1]] = { nev: m[2], flags: m[3] || '' }; }
});

// ---- features: ['id', 'Name', 'add-on(s)', 'flags']
var funkciok = {};
var fsrc = olvas('all_features.js');
fsrc.split('\n').forEach(function(sor) {
  var t = sor.trim();
  if (t.startsWith('//')) { return; }
  var m = t.match(/^\['([a-z0-9_]+)',\s*'([^']+)'(?:,\s*'([^']*)')?(?:,\s*'([^']*)')?\]/);
  if (m && m[1] != 'title') { funkciok[m[1]] = { nev: m[2], addon: m[3] || '' }; }
});

var ADDON_NEVEK = {
  audioassistant: 'Audio Assistant', voicerecorder: 'Voice Recorder', dictionary_api: 'Dictionary API',
  offline_textrec_addon: 'Offline text recognition', input_addon: 'Advanced Input Methods',
  transformer_addon: 'Transformer', ai_features: 'A.I. Features', imgbuffer_addon: 'Image Buffer',
  externaldisplays: 'External Displays', api_access: 'API Access'
};

// the A.I. engines: the feature and its API key in one label
var AI_NEVEK = {
  openai: 'OpenAI (A.I. Features add-on + your API key)',
  gemini: 'Gemini (A.I. Features add-on + your API key, or free Gemini)',
  claude: 'Claude (A.I. Features add-on + your API key)',
  elevenlabs: 'ElevenLabs (A.I. Features add-on + your API key)'
};

// numeric-parameter actions (action_lists.js ACTIONLIST_NUM_SPECIALS): they ask for a #ID
var asrc = olvas('action_lists.js');
var szamos = {};
var ns = asrc.substring(asrc.indexOf('var ACTIONLIST_NUM_SPECIALS'), asrc.indexOf('};', asrc.indexOf('var ACTIONLIST_NUM_SPECIALS')));
ns.replace(/'([a-z0-9_]+)':\s*'([^']+)'/g, function(_, id, cimke) { szamos[id] = cimke.replace(/\s*#$/, ''); });

// the requirements of one action, from its classes (and its group title's classes)
function igenyek(osztalyok, felt) {
  var ki = [], platform = '';
  osztalyok.forEach(function(c) {
    var m;
    if (c == 'android') { platform = 'Android only'; }
    else if (c == 'ios') { platform = 'iOS only'; }
    else if ((m = c.match(/^(.+?)(_available|ready)$/)) && eszkozok[m[1]]) {
      var e = eszkozok[m[1]].nev + (m[1].startsWith('lumen') && m[1] != 'lumen_duo' ? ' (Lumen PRO)' : '');
      ki.push(e);
    }
    else if ((m = c.match(/^(.+)_feature_available$/)) && funkciok[m[1]]) {
      var f = funkciok[m[1]];
      var addon = f.addon.split(',').filter(Boolean).map(function(a) { return ADDON_NEVEK[a] || a; });
      ki.push(AI_NEVEK[m[1]] || (f.nev + (addon.length && addon.indexOf(f.nev) < 0 ? ' (' + addon.join(' + ') + ' add-on)' : (addon.length ? ' add-on' : ''))));
    }
    else if (c == 'printeres' || c == 'printers_available') { ki.push('Printers add-on'); }
    else if (c == 'advinput') { ki.push('Advanced Input Methods add-on'); }
    else if (c == 'openaikeyes') { ki.push(AI_NEVEK.openai); }
    else if (c == 'geminiapikeyes') { ki.push(AI_NEVEK.gemini); }
    else if (c == 'elevenlabskeyes') { ki.push(AI_NEVEK.elevenlabs); }
    else if (c == 'inmind' || c == 'inmind_aikeyes') { ki.push('InMind Wheel'); }
    else if (c == 'translate_aikeyes') { ki.push('A.I. translation engine'); }
    else if (c == 'subscriberes') { ki.push('subscription'); }
    else if (c == 'imgtpl_addones') { ki.push('Image Template Editor (subscription or add-on)'); }
    else if (c == 'predphoto_addones') { ki.push('Prediction Photo (subscription or add-on)'); }
  });
  if (felt.some(function(f) { return f.indexOf('printers_addon') >= 0; })) { ki.push('Printers add-on'); }
  ki = ki.filter(function(x, i) { return ki.indexOf(x) == i; });
  // "Advanced Input Methods add-on" is said already by "Voice recognition (Advanced Input Methods add-on)"
  ki = ki.filter(function(x) {
    var m = x.match(/^(.+) add-on$/);
    return !m || !ki.some(function(y) { return y != x && y.indexOf('(') >= 0 && y.indexOf(m[1]) > y.indexOf('('); });
  });
  return { ki: ki, platform: platform };
}

function osztalyai(o) { return o.class.split(/\s+/).filter(Boolean); }
function cella(s) { return String(s).replace(/\|/g, '\\|'); }

// ---- the page
var csoportok = [], aktualis = null, rejtett_csoport = false, db = 0;
akciok.forEach(function(o) {
  var oszt = osztalyai(o);
  if (oszt.indexOf('title') >= 0) {
    rejtett_csoport = oszt.indexOf('csakbenke') >= 0;
    aktualis = { nev: o.name, oszt: oszt.filter(function(c) { return c != 'title'; }), cond: o.cond, sorok: [] };
    if (!rejtett_csoport) { csoportok.push(aktualis); }
    return;
  }
  if (rejtett_csoport || oszt.indexOf('csakbenke') >= 0) { return; }
  if (o.cond.some(function(f) { return f.indexOf('benkexxxx') >= 0; })) { return; }
  if (!o.id || o.id == 'nothing' || !aktualis) { return; }
  aktualis.sorok.push(o);
  db++;
});

var md = [];
md.push('# List of available actions');
md.push('');
md.push('These are the actions you can choose for a **trigger** (button, gesture, recognition, WEB-polling, timer...), put into an **action list**, or run from another app with the [Custom URL scheme](custom-url-scheme.md#actions) / [HTTP Socket](http-socket.md) (`action={CODE}`).');
md.push('');
md.push('An action shows up in the app\'s action picker only when you can use it: when the device is switched on in **MY DEVICES**, the feature is enabled in **AVAILABLE FEATURES**, or the add-on / API key it needs is there. The **Needs** column tells you what that is.');
md.push('');
md.push('!!! tip "Using the code"');
md.push('    The **Code** is the action\'s internal name, for `action=` links: `mystersmith://?action=vibrate_short,pause2,blackscreen_show`. Actions marked *asks for a #ID* need a number — use their own URL parameter (`template=`, `predefined=`, `aiprompt=`, `recording=`, `routine=`, `imagetemplate...=`) instead.');
md.push('');
md.push('*' + db + ' actions in ' + csoportok.filter(function(c) { return c.sorok.length; }).length + ' groups. This list is updated from time to time - the app may already have a few more.*');
md.push('');
csoportok.forEach(function(cs) {
  if (!cs.sorok.length) { return; }
  md.push('---');
  md.push('');
  md.push('## ' + cs.nev);
  md.push('');
  var cs_ig = igenyek(cs.oszt, cs.cond);
  if (cs_ig.ki.length || cs_ig.platform) {
    md.push('*Needs: ' + cs_ig.ki.concat(cs_ig.platform ? [cs_ig.platform] : []).join(', ') + '*');
    md.push('');
  }
  md.push('| Action | Code | Needs / notes |');
  md.push('|---|---|---|');
  cs.sorok.forEach(function(o) {
    var ig = igenyek(osztalyai(o), o.cond);
    var sajat = ig.ki.filter(function(x) { return cs_ig.ki.indexOf(x) < 0; });
    if (ig.platform && ig.platform != cs_ig.platform) { sajat.push(ig.platform); }
    if (szamos[o.id]) { sajat.push('asks for a #ID (' + szamos[o.id] + ')'); }
    if (['customapp', 'urlscheme', 'shortcut'].indexOf(o.id) >= 0) { sajat.push('asks for a value - not for action= links'); }
    md.push('| ' + cella(o.name) + ' | `' + o.id + '` | ' + cella(sajat.join(', ')) + ' |');
  });
  md.push('');
});
fs.writeFileSync(CEL, md.join('\n'));
console.log('written: ' + CEL + ' (' + db + ' actions, ' + csoportok.length + ' groups)');
