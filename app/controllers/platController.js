const plats = require('../models/platModel');

exports.getPlats = (req, res) => {
    // 1. Capturar los parámetros de la URL
    const textCerca = req.query.cerca ? req.query.cerca.toLowerCase() : '';
    const allergenExclos = req.query.excloureAllergen || '';

    // 2. Empezar con todos los platos
    let platsFiltrats = plats;

    // 3. Aplicar el buscador de texto
    if (textCerca) {
        platsFiltrats = platsFiltrats.filter(plat => 
            plat.nom.toLowerCase().includes(textCerca) || 
            plat.cuiner.toLowerCase().includes(textCerca)
        );
    }

    // 4. Aplicar el filtro de exclusión de alérgenos
    if (allergenExclos) {
        platsFiltrats = platsFiltrats.filter(plat => 
            !plat.allergens.includes(allergenExclos)
        );
    }

    // 5. Enviar TODAS las variables a la vista
    res.render('plats', { 
        llistatPlats: platsFiltrats,
        textCerca: req.query.cerca || '',
        allergenExclos: allergenExclos
    });
};