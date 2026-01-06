export default {
  async fetch(request) {
    const html = `COLE_TODO_O_CONTEUDO_DO_INDEX_HTML_AQUI`;
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
}
