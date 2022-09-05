function serviceGenerator() {
    services.push(new Service("2-week Business Clean-up", 1000))
    services.push(new Service("Ebook - How to manage my online business", 10))
    services.push(new Service("Business Consulting Session", 130))
    services.push(new Service("Online Business Organization Software", 400))
}

serviceGenerator()

function findService() {
    let serv = prompt("Type in the service you are looking for")
    const result = services.find(element => element.name.includes(serv))
    console.table(result)
}

