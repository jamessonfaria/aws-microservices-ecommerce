exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));

    switch (event.httpMethod) {
      case "GET":
        if (event.pathParameters != null) {
          body = await getProduct(event.pathParameters.id); // GET product/{id}
        } else {
          body = await getAllProducts(); // GET product
        }
        break;        
    }     


    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello from Product ! You've hit ${event.path}\n`
    };
};