export default function Main() {
    return (
        <main className="conteiner">
            <p className="top-scroll margem-esq">Primeiro, seu prato</p>
            <div className="scroll">
                <div className="itens margem-esq comida" onclick="ComidaSelecionada(this);">
                    <img src="assets/comida1.jpg" />
                    <p className="produto">Cachorrão</p>
                    <p className="descricao">Um pouco de batata, um pouco de salada</p>
                    <p className="preco">R$ <strong>10,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq comida" onclick="ComidaSelecionada(this);">
                    <img src="assets/comida2.jpg" />
                    <p className="produto">Pizzona</p>
                    <p className="descricao">Um pouco de tudo</p>
                    <p className="preco">R$ <strong>24,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq comida" onclick="ComidaSelecionada(this);">
                    <img src="assets/comida3.jpg" />
                    <p className="produto">Macarrão bonzão</p>
                    <p className="descricao">Um pouco de salada</p>
                    <p className="preco">R$ <strong>15,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq comida" onclick="ComidaSelecionada(this);">
                    <img src="assets/comida3.jpg" />
                    <p className="produto">Feijoada</p>
                    <p className="descricao">Um pouco de cada bicho</p>
                    <p className="preco">R$ <strong>17,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            <p className="top-scroll margem-esq">Agora, sua bebida</p>
            <div className="scroll">
                <div className="itens margem-esq bebida" onclick="BebidaSelecionada(this);">
                    <img src="assets/bebida1.jpg" />
                    <p className="produto">Pepsi</p>
                    <p className="descricao">Bem gelado!</p>
                    <p className="preco">R$ <strong>4,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq bebida" onclick="BebidaSelecionada(this);">
                    <img src="assets/bebida2.jpg" />
                    <p className="produto">Água</p>
                    <p className="descricao">Bem gelado!</p>
                    <p className="preco">R$ <strong>1,85</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq bebida" onclick="BebidaSelecionada(this);">
                    <img src="assets/bebida3.jpg" />
                    <p className="produto">Suco de Laranja</p>
                    <p className="descricao">Bem gelado!</p>
                    <p className="preco">R$ <strong>11,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq bebida" onclick="BebidaSelecionada(this);">
                    <img src="assets/bebida4.jpg" />
                    <p className="produto">Guaraná</p>
                    <p className="descricao">Bem gelado!</p>
                    <p className="preco">R$ <strong>9,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
            <p className="top-scroll margem-esq">Por fim, sua sobremesa</p>
            <div className="scroll">
                <div className="itens margem-esq sobremesa" onclick="SobremesaSelecionada(this);">
                    <img src="assets/sobremesa1.jpg" />
                    <p className="produto">Mousse de Maracujá</p>
                    <p className="descricao">compre uma e peça outra, você vai querer</p>
                    <p className="preco">R$ <strong>4,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq sobremesa" onclick="SobremesaSelecionada(this);">
                    <img src="assets/sobremesa2.jpg" />
                    <p className="produto">Gostosura de chocolate</p>
                    <p className="descricao">compre uma e peça outra, você vai querer</p>
                    <p className="preco">R$ <strong>6,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq sobremesa" onclick="SobremesaSelecionada(this);">
                    <img src="assets/sobremesa3.jpg" />
                    <p className="produto">Tortaça de limão</p>
                    <p className="descricao">compre uma e peça outra, você vai querer</p>
                    <p className="preco">R$ <strong>19,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
                <div className="itens margem-esq sobremesa" onclick="SobremesaSelecionada(this);">
                    <img src="assets/sobremesa4.jpg" />
                    <p className="produto">Pudim</p>
                    <p className="descricao">compre uma e peça outra, você vai querer</p>
                    <p className="preco">R$ <strong>7,90</strong></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        </main>
    );
}