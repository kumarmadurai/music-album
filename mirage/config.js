export default function() {
  this.namespace= '/api';
  this.resource('musics', { except: ['delete']});
}
