/**
 * @description Essa função recebe o nome de um elemento e retornar o elemento html
 * @param {String} elementName
*/
function createElement(elementName) {
    const element = document.createElement(elementName);
    return element;
}
  
function createElements(qtd, elementName) {
    const auxiliar = [];
    for (let index = 0; index < qtd; index++) {
      const element = createElement(elementName);
      auxiliar.push(element);
    }
    return auxiliar;
}
  
/**
 * @description Função para dar nome a um unico botão criado
 * @param {String} name 
 * @param {HTMLElement} button 
*/
function addTextToButton(name, button){
    button.textContent = name;
}
  
/**
 * @description Função para dar nomes a lista de botões criados
 * @param {String[]} nameList
 * @param {HTMLElement[]} buttonList
*/
function addTextToButtons(nameList, buttonList) {
    buttonList.forEach(function (button, index) {
      const name = nameList[index];
      addTextToButton(name, button);
    });
}
  
/**
 * @description Função para inserir o botão no html
 * @param {HTMLElement} container
 * @param {HTMLElement[]} data
*/
function insertToHtmlElement(container, data) {
    data.forEach(function (value) {
      container.appendChild(value);
    });
}
/**
 * @description Função para dar funcionaliade ao botão
*/
function addOnClickToButton(callback, button){
    button.onclick = callback;
}

//Linhas abaixo são para chamar de função
  
const container = document.getElementById("botao");
const buttons = createElements(2, "button");
  
insertToHtmlElement(container, buttons);


function mudaTema(){

    if (optionDark.checked){
        document.body.classList.add("dark-mode");
    }else if (optionLight.checked){
        document.body.classList.remove("dark-mode");
    }
}

let optionDark = document.getElementById("dark");
let optionLight = document.getElementById("light");

optionDark.addEventListener("change", mudaTema);
optionLight.addEventListener("change", mudaTema);



  
 
//Tomadas de decisão do gamer

function firstQuestion(){
    
    buttons[1].style.display = "inline-block";
    
    document.getElementById('textoGamer').innerHTML = `Prezado, somos da equipe que compões o Programa de Desenvolvimento de Software do Ministério da Saúde de Outland agradecemos sua presença aqui e desejamos uma ótima gestão para você. Os cientistas responsáveis pelo desenvolvimento da vacina nos apresentaram duas alternativas de estudos: i) fármacos já conhecidos com possíveis ações antivirais e ii) o desenvolvimento da vacina a base de partícula viral atenuado ou morta. Ambas estão em fase inicial de teste e temos 8 meses e recurso limitado para investir, pois a maior parte dos recursos estão sendo destinado na construção de hospitais e insumos para os doentes. Por isso é preciso decidir qual das duas linhas devemos seguir. Com base nos seus conhecimentos de tecnologia da programação qual deles devemos iniciar?`;
   
    addTextToButtons(["Vacina", "Fármaco"], buttons);
  
    addOnClickToButton(function(){
        vacine();
    }, buttons[0]);
      
    addOnClickToButton(function(){
        drug();
    }, buttons[1])

}

function drug(){
    document.getElementById("textoGamer").innerHTML = "Passados 5 meses, o técnico responsável e desenvolvimento entre para você um relatório apresentando alguns princípios ativos possíveis para serem usados nos testes em laboratório. Curiosamente, um representante de uma indústria farmacêutica se encontra na sua sala para uma conversa pessoal. O representante argumenta que sabe do resultado do seu estudo e propõe por um valor considerável de dinheiro que você noticie que o fármaco dele serve para o tratamento da doença sem a necessidade de mais testes. Você pretende acatar essa sugestão? Embora você saiba que está cedo demais para tomar qualquer decisão, visto que existe um protocolo a seguir para construção de qualquer fármaco. OBS: Todo fármaco precisa passar por pelo menos 3 fases, sendo a 1° fase laboratorial, 2° fase experimentação em animais e 3° fase experimentação em humanos.";

    addTextToButtons(["SIM", "NÂO"], buttons);
  
    addOnClickToButton(function(){
        descisionDrugYes();
    }, buttons[0]);
      
    addOnClickToButton(function(){
        descisionDrugNo();
    }, buttons[1])

}

function descisionDrugYes(){
    
    buttons[1].style.display = "none";
    
    document.getElementById("textoGamer").innerHTML = "Você aceita o valor. Em poucas semanas o fármaco e 3 meses depois dados científicos são publicados demonstrando que o fármaco é ineficiente para o tratamento. O governo publica sua demissão e você é preso e 'press F'. FIM!!!";
    
    addTextToButtons(["Retornar"], buttons);
  
    addOnClickToButton(function(){
        firstQuestion();
    }, buttons[0]);
    
       
}

function descisionDrugNo(){
    
    buttons[1].style.display = "none";
    
    document.getElementById("textoGamer").innerHTML = "O representando do farmacêutica vai embora chateado com você. Passados 3 meses os dados científicos demonstraram que o fármaco é ineficaz para a curar 100% dos pacientes. No entanto, outros dados mostraram que o fármaco aprontado pelo seu programa poderia ser usado no tratamento em casos graves enquanto a vacina não chega. Por isso, a fabricação e venda seria aceita apenas para os 5% da população com casos graves. Embora não fosse o objetivo inicial do Governo, o valor recolhido no investimento desse fármaco servirá para pagar os custos gastos até o momento. Logo, você continuará trabalhando no departamento do Ministério e receberá uma medalha pelo esforço. FIM!!!";
  
    addTextToButtons(["Retornar"], buttons);
  
    addOnClickToButton(function(){
        firstQuestion();
    }, buttons[0]);

}


function vacine(){
    document.getElementById("textoGamer").innerHTML = "Passados 3 meses sua equipe aponta para duas possíveis vias de ação contra uma proteína do vírus que os cientistas gostariam de atacar. Porém os recursos são escassos e segundo os estudos que sua equipe demonstrou que a primeira via de ação custará o dobro para ser feita devido ao grau de inovação, porém demorará menos tempo (4 meses), já a segunda custará menos por ser um método mais convencional, mas demorará mais que 7 meses. Dessa forma qual das duas vias você optará? Lembrando que o tempo máximo de desenvolvimento é de 8 meses e você já gastou 3 meses.";
   
    addTextToButtons(["Método convecional", "Método inovador"], buttons);
  
    addOnClickToButton(function(){
        descisionVacineLong();
    }, buttons[0]);
      
    addOnClickToButton(function(){
        descisionVacineShort();
    }, buttons[1])

}

function descisionVacineLong(){
   
    buttons[1].style.display = "none";
   
    document.getElementById("textoGamer").innerHTML = "O Governo não concorda com a demora, mas você apresenta bons argumentos e ele permite que termine o projeto com uma condição de ser preso por não cumprir sua tarefa dentro do tempo combinado. Mas sua decisão não foi em vão, porque de fato o método proposto por você, embora mais longo, permitiu construir uma vacina mais segura e mais eficaz e assim garantiu a sobrevivência da população mundial. O Governo de Outland se tornou o país mais rico do planeta com a venda da vacina e a população viveu feliz até a próxima pandemia. FIM!!!";

    addTextToButtons(["Retornar"], buttons);
  
    addOnClickToButton(function(){
        firstQuestion();
    }, buttons[0]);

}

function descisionVacineShort(){
    
    buttons[1].style.display = "none";

    document.getElementById("textoGamer").innerHTML = "Passados 7 meses a vacina passa por todas as etapas e começa sua comercialização. O Governo ganha uma grande quantidade de dinheiro, o que permitiu recuperar todo o investimento aplicado no desenvolvimento e ainda obteve lucro. Você é condecorado com uma medalha, mas a felicidade dura pouco, porque passado 1 meses o número de pessoas com sequelas, alergias provenientes da vacina é alto e todas as outras nações exigem ressarcimento pela compra da vacina, fazendo com que o Governo de Outland entre em crise. Naturalmente o Presidente do país manda prender você e 'Press F'.";

    addTextToButtons(["Retornar"], buttons);
  
    addOnClickToButton(function(){
        firstQuestion();
    }, buttons[0]);

  
    
    /* addOnClickToButton(function(){
        firstQuestion();
    }, buttons[0]); */

}


firstQuestion();

  




