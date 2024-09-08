let dados = [
    {
        titulo: "Janeiro",
        descricao: "No mês de Janeiro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacaxi, carambola, coco verde, figo, framboesa, graviola, laranja-pera, mamão, maracujá, melancia, nectarina, uva e tomate.",
        info2: "Hortaliças: alface, cebolinha, couve, salsa, abóbora, abobrinha, beterraba, pepino, pimentão e quiabo.",
        tags: "laranja pera mamao maracuja abobora pimentao"
    },

    {
        titulo: "Fevereiro",
        descricao: "No mês de Fevereiro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacate, ameixa, carambola, coco verde, figo, graviola, goiaba, jaca, maçã, pera, pêssego, uva e tomate",
        info2: "Hortaliças: alface, escarola, repolho, abóbora, gengibre, milho verde, pepino, pimentão e quiabo.",
        tags: "maca maça pessego abobora pimentao hortela"
    },

    { 
        titulo: "Março",
        descricao: "No mês de Março, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacate, abacaxi, ameixa, banana-maçã, banana-nanica, coco verde, figo, graviola, goiaba, jaca, limão, maçã, mamão, nectarina, pera, uva, pêssego e tangerina.",
        info2: "Verduras: acelga, alface, alho poró, coentro, escarola, repolho, rúcula, salsa, abóbora, abobrinha, berinjela, beterraba, cará, chuchu, gengibre, inhame, jiló, milho verde, nabo, pepino e quiabo.",
        tags: "marco limao maça maca mamao pessego rucula poro abobora cara jilo"
    },

    {
        titulo: "Abril",
        descricao: "No mês de Abril, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacate, ameixa, banana-maçã, caqui, jaca, kiwi, maçã, mamão, pera, tangerina, uva e tomate.",
        info2: "Hortaliças: alface, alho poró, almeirão, escarola, repolho, abóbora, abobrinha, berinjela, beterraba, cará, chuchu, gengibre, inhame, nabo e pepino.",
        tags: "maca maça mamao poro almeirao abobora cara"
    },

    {
        titulo: "Maio",
        descricao: "No mês de Maio, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacate, banana-maçã, caqui, jaca, kiwi, maçã, pera, tangerina e uva.",
        info2: "Hortaliças: alho poró, almeirão, nabo, abóbora, abobrinha, batata doce, berinjela, beterraba, cará, cenoura, chuchu, inhame, mandioca, batata-salsa, nabo e rabanete.",
        tags: "maça maca poro almeirao erva doce abobora cara"
    },

    {
        titulo: "Junho",
        descricao: "No mês de Junho, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: carambola, kiwi, laranja-lima e tangerina.",
        info2: "Hortaliças: agrião, alho poró, almeirão, brócolis, abóbora, batata doce, berinjela, cará, cenoura, ervilha, gengibre, inhame, mandioca, mandioquinha e milho verde.",
        tags: "poro almeirao brocolis abobora cara"
    },

    {
        titulo: "Julho",
        descricao: "No mês de Julho, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: carambola, kiwi, laranja lima e tangerina.",
        info2: "Hortaliças: agrião, alho poró, chicória, coentro, couve, espinafre, salsão, cenoura, abóbora, batata doce, cará, ervilha, inhame, mandioca, mandioquinha, milho verde, nabo, pepino e rabanete.",
        tags: "agriao poro chicoria salsao abobora cara"
    },

    {
        titulo: "Agosto",
        descricao: "No mês de Agosto, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: banana-nanica, caju, carambola, kiwi, laranja pera, maçã, mamão, mexerica, morango e tangerina.",
        info2: "Hortaliças: agrião, alho poró, brócolis, chicória, coentro, couve, couve-flor, escarola, espinafre, rúcula, abóbora, abobrinha, cará, cenoura, ervilha, inhame, mandioca, mandioquinha, nabo, pimentão e rabanete.",
        tags: "maça maca mamao agriao poro brocolis chicoria rucula cara pimentao"
    },

    {
        titulo: "Setembro",
        descricao: "No mês de Setembro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: banana-prata, caju, jabuticaba, laranja-lima, laranja-pera, maçã, nêspera e tangerina.",
        info2: "Hortaliças: alho poró, almeirão, brócolis, chicória, couve, couve-flor, espinafre, abóbora, abobrinha, cará, ervilha, inhame, pimentão e rabanete.",
        tags: "maça maca nespera poro almeirao brocolis chicoria pimentao"
    },

    {
        titulo: "Outubro",
        descricao: "No mês de Outubro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacaxi, acerola, banana-nanica, banana-prata, caju, manga, coco-verde, jabuticaba, laranja-pera, maçã, mamão, nêspera, tangerina e tomate.",
        info2: "Hortaliças: alho poró, almeirão, brócolis, cebolinha, chicória, coentro, couve-flor, espinafre, abóbora, abobrinha, batata doce, berinjela, beterraba, cenoura, ervilha, inhame, pepino, pimentão, rabanete.",
        tags: "maca maça mamao nespera poro almeirao brocolis abobora pimentao"
    },

    {
        titulo: "Novembro",
        descricao: "No mês de Novembro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacaxi, acerola, banana-nanica, banana-prata, caju, coco verde, framboesa, jaca, laranja-pera, maçã, mamão, manga, maracujá, melancia, melão, nectarina, pêssego, tangerina e tomate.",
        info2: "Hortaliças: alho poró, almeirão, brócolis, espinafre, abobrinha, berinjela, beterraba, cenoura, inhame, maxixe, nabo, pepino e pimentão.",
        tags: "maça maca mamao maracuja melao pessego poro almeirao brocolis pimentao"
    },

    {
        titulo: "Dezembro",
        descricao: "No mês de Dezembro, você encontrará disponbilidade superior dos alimentos:",
        info1: "Frutas: abacaxi, ameixa, banana-prata, cereja, coco verde, figo, framboesa, graviola, kiwi, laranja-pera, limão, lichia, maçã, manga, maracujá, melancia, melão, nectarina, pêssego, romã, uva e tomate.",
        info2: "Hortaliças: almeirão, cebolinha, rúcula, salsa, salsão, abobrinha, beterraba, cenoura, pimentão e vagem.",
        tags: "maça maca maracuja melao pessego roma rucula salsao"
    },

];
