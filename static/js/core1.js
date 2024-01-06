const questions = [
    "1. Mon objectif est d'être expert dans mon activité, si bien que mes conseils seront recherchés en permanence",
    "2. Je cherche une situation professionnelle me permettant de contribuer à la gestion des efforts des autres",
    "3. Je vise une carrière qui me permette de travailler à ma façon  et selon mes vues",
    "4. S'il fallait choisir, je préfèrerais une situation professionnelle assurant la sécurité et la stabilité plutôt que la liberté et l'autonomie",
    "5. Je suis toujours à l'affût d'idées qui me permettraient de démarrer ma propre entreprise",
    "6. Mon aspiration profonde est de contribuer réellement au bien-être de la société",
    "7. Je rêve d'une carrière au cours de laquelle je puisse venir à bout de situations particulièrement difficiles",
    "8. Je refuserais un emploi intéressant s'il semblait compromettre ma capacité à poursuivre mes intérêts personnels et familiaux",
    "9. Je cherche à développer mes capacités techniques ou fonctionnelles à un très haut niveau de compétence",
    "10. Je rêve d'être responsable d'une organisation complexe et de prendre des décisions qui touchent de nombreuses personnes",
    "11. Je vise à être complètement libre de définir mes propres tâches, programmes et procédures",
    "12. Mon choix de TFE sera prioritairement orienté par la perspective de rester durablement dans l'entreprise choisie",
    "13. Monter ma propre affaire est plus important pour moi que d'atteindre un haut niveau de management dans l'organisation d'autrui",
    "14. Mon ambition est que mes talents et mon énergie soient utiles aux autres",
    "15. J'aspire à me confronter rapidement à des défis réputés difficiles à surmonter",
    "16. Ma priorité est l'équilibre entre mes besoins personnels, familiaux et professionnels",
    "17. Je cherche plutôt un emploi dans lequel je pourrais par faire mon expertise qu'un poste de management",
    "18. A moyen terme, mon but est de devenir DG d'une organisation",
    "19. Je privilégierai le critère de l'autonomie pour choisir mon TFE",
    "20. Je privilégierai une organisation qui me procurera un sentiment de stabilité et de continuité",
    "21. Je cherche avant tout à construire quelque chose qui résulte de mes idées et de mes efforts",
    "22. Utiliser mes compétences pour que le monde devienne un endroit un endroit plus agréable pour vivre et travailler est le plus important",
    "23. Il me tarde de me trouver face à de vraies challenges au sein du monde de l'entreprise",
    "24. Le boulot c'est bien, mais préserver ses loisirs et ses relations personnelles c'est très important aussi",
    "25. Je n'accepterai aucune mission qui me ferait sortir de mon champ d'expertise",
    "26. Il est plus intéressant de manager une équipe que d'être spécialiste de haut niveau dans un domaine",
    "27. J'accepterai de partir à l'aventure pour le TFE, pour vu que je sois libre de travailler à ma façon, avec le minimum de contrainte",
    "28. Priorité à la sécurité financière et à celle de l'emploi: je n'ai pas fait 5 ans d'étude pour vivre dans l'incertitude", 
    "29. J'aimerais vraiment être à l'origine de la création d'un produit ou d'un service",
    "30. Ce n'est pas ma carrière qui est le plus important pour moi aujourd'hui : c'est l'avenir de la planète et de l'humanité",  
    "31. Je chercherai un TFE qui défie fortement mes capacités à résoudre des problèmes",  
    "32. Equilibrer les exigences de la vie personnelle et  professionnelle est plus important que de monter rapidement dans le hiérarchie",  
    "33. J'aspire à un TFE qui me permette prioritairement de mobiliser mes savoirs scientifiques et techniques",  
    "34. Je refuserais tout emploi qui m'empêcherait d'atteindre une position de management général",  
    "35.  Ce n'est pas tant le salaire qui m'importe que la capacité à être autonome dans mon travail",  
    "36. En ces temps incertains, la sagesse est de viser un emploi sûr et pérenne",  
    "37. J'espère que mon TFE sera un tremplin pour la création de mon entreprise",  
    "38. Je n'irai jamais travailler dans une entreprise qui ne vise pas le bien commun",  
    "39. Centrale Marseille nous dorlote un peu trop : j'aspire à faire face à l'adversité",  
    "40. J'aime travailler, mais ma priorité n'est pas le travail : j'aspire à un équilibre entre celui-ci et ma vie personnelle",
  ];

  const questionsPerPage = 8;
  let currentPage = 0;

  const totalGroups = Math.ceil(questions.length / questionsPerPage);

  createQuestionGroups();

  function createQuestionGroups() {

      const group = questions.slice(0, 8);

      createQuestionGroup(group, 1);
  }

  function createQuestionGroup(questions, index) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "question-group";
    groupDiv.id = "group" + index;

    questions.forEach(function(question,questionIndex) {
      const questionDiv = document.createElement("div");
      questionDiv.innerText = question;

      const optionsDiv = document.createElement("div");
      optionsDiv.className = "options";

      for (let i = 1; i <= 5; i++) {
        const radioDiv = document.createElement("div");
        radioDiv.className = "form-check form-check-inline";

        const radioInput = document.createElement("input");
        radioInput.className = "form-check-input";
        radioInput.type = "radio";
        radioInput.name = "inlineRadioOptions"+ index + "Question" + questionIndex;
        radioInput.id = "inlineRadio" + i;
        radioInput.value =  i;

        radioInput.addEventListener('change', function () {
          console.log('Selected value:', radioInput.value);
      });

        const radioLabel = document.createElement("label");
        radioLabel.className = "form-check-label";
        radioLabel.htmlFor = "inlineRadio" + i;
        radioLabel.innerText = i;

        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);
        optionsDiv.appendChild(radioDiv);
      }

      questionDiv.appendChild(optionsDiv);
      groupDiv.appendChild(questionDiv);
    });

    document.body.appendChild(groupDiv);
    addSubmitButton(groupDiv, index);
    
  }
  function addSubmitButton(groupDiv, index) {
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.onclick = function () {
      console.log('Submit button clicked');
      submitForm('group' + index);
    };
    submitButton.innerText = "Submit";
    groupDiv.appendChild(submitButton);
  }

  function submitForm(group,index) {
    const selectedRatings = [];

    const radioInputs = document.querySelectorAll('#' + group + ' input[id^="inlineRadio"]');;
    console.log('Radio inputs:',radioInputs);
    radioInputs.forEach(input => {
      if (input.checked) {
        selectedRatings.push({ question: input.name, rating: input.value });
      }
    });

    fetch('/submitRating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ratings: selectedRatings }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        // 在这里您可以添加一些反馈，如显示成功消息
        console.log('Received ratings from server:', data.ratings);
        alert('Received ratings from server: ' + JSON.stringify(data.ratings));
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
        // 在这里您可以处理错误，例如显示错误消息
      });
  }