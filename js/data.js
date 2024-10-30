const positiveCards = {
    trabajo: ['El Mundo', 'El Juicio', 'El sol', 'La Estrella', 'El Diablo', 'La Templanza', 'La Muerte', 'La Justicia', 'La Rueda de la Fortuna', 'El Hermitaño', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'Los Enamorados', 'El Carro', 'La Fuerza'],
    amor: ['El Mundo', 'El Loco', 'El Juicio', 'El sol', 'La Estrella', 'La Templanza', 'La Muerte', 'La Justicia', 'La Rueda de la Fortuna', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Papa', 'Los Enamorados', 'El Carro', 'La Fuerza'],
    finanzas: ['El Mundo', 'El Loco', 'El Juicio', 'El sol', 'La Estrella', 'El Diablo', 'La Templanza', 'El Colgado', 'La Justicia', 'La Rueda de la Fortuna', 'El Hermitaño', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'Los Enamorados', 'El Carro', 'La Fuerza'],
    salud: ['El Mundo', 'El Loco', 'El sol', 'La Estrella', 'El Diablo', 'La Templanza', 'La Muerte', 'La Justicia', 'La Rueda de la Fortuna', 'El Mago', 'La Emperatriz', 'El Emperador', 'El Carro', 'La Fuerza'],
    espiritualidad: ['El Mundo', 'El Loco', 'El Juicio', 'El sol', 'La Luna', 'La Estrella', 'La Torre', 'El Diablo', 'La Templanza', 'La Muerte', 'El Colgado', 'La Justicia', 'El Hermitaño', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador', 'El Papa', 'Los Enamorados', 'El Carro', 'La Fuerza']
};
const yesResponse = [
    "La carta ha hablado, susurros del destino han llegado hasta ti. La respuesta es sí; las estrellas se alinean a tu favor, abriendo un camino de oportunidades y esperanza. Confía en el universo y da el siguiente paso con fe.",
    "La sabiduría de la carta revela que la respuesta es sí. El cosmos sonríe sobre tu pregunta, llenándola de luz y posibilidades. Permítete fluir con la energía positiva que ahora te rodea y sigue el llamado de tu corazón.",
    "¡Sí, la carta ha confirmado tu pregunta! Este es el momento perfecto para actuar. Aprovecha la energía positiva que fluye a tu alrededor y da el paso con valentía. El universo está de tu lado.",
    "La respuesta es sí, como lo indica la carta elegida. Este es un signo de que tus esfuerzos serán recompensados. Mantén la mente abierta y sigue tus instintos, pues el camino se ilumina ante ti.",
    "Sí, la carta dice que sí. Este es un poderoso indicativo de que tus deseos están alineados con el universo. Avanza con confianza; el éxito está a la vuelta de la esquina."
];
const noResponse = [
    "La carta ha hablado, y aunque su mensaje es claro, la respuesta es no. A veces, el camino se encuentra cubierto de sombras, invitándonos a reflexionar y esperar un momento más propicio. Escucha a tu corazón y permite que el tiempo haga su magia.",
    "La sabiduría de la carta sugiere que la respuesta es no. Este es un tiempo de introspección y preparación. Las estrellas indican que es mejor esperar y observar antes de actuar. La paciencia te conducirá hacia mejores oportunidades.",
    "No, la carta ha hablado. Este mensaje es un recordatorio de que a veces, el universo tiene otros planes para nosotros. Tómate un momento para reflexionar y considerar otras alternativas; la claridad vendrá con el tiempo.",
    "La respuesta es no, como revela la carta. Este puede ser un momento para reevaluar tus deseos y aspiraciones. Permítete aprender de esta experiencia y busca nuevas formas de avanzar hacia tus metas.",
    "No, la carta ha indicado que no es el momento. Esto no significa que todo esté perdido; en cambio, te brinda la oportunidad de reexaminar tu enfoque y considerar nuevas estrategias. El futuro aún tiene mucho que ofrecer."
];

export {
    positiveCards,
    yesResponse,
    noResponse
}