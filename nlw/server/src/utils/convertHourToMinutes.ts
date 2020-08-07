// converter horas em minutos por causa da hora paga, para salvar no banco sem o ":"
export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number) // pega uma hr, ex: 8:00, divide pelo ":". A parte da esquerda é a hour, direita são os minutes
    const timeInMinutes = (hour * 60) + minutes

    return timeInMinutes
}