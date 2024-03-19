# Features of My Anime List

Colocar aqui o que precisa ser revisado, melhorado ou criado para ter uma boa performace e também usabilidade.



[] Para mangás que já estão concluídos, diferenciar do restante e desabilitar os a alteração de capitulo do mesmo;
[] Mangás que estão para leitura, colocar algum destaque;
[] Mangás que estou lendo, destacaar também;

[] Criar filtro para os tipos de mangás, manhua e manhuwa;
[] Função para deletar um item da lista;
[] Edição do item:
  [] Nome;
  [] Imagem;
  [] Scan (nome e URL);
  [] Status;
[] Melhorar o formulário de cadastro;
  [] Quando escoler a imagem, colocar ela do lado para confirmação.
  Exemplo de código:
  ``` jsx
    <div className="image">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  ```
  
salvar imagem em base64
img.src