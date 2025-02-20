// const http = require("http")
// const server = http.createServer((req,res)=>{
// res.write("Me*  Creating server --->")
// res.end(" NodeJS be like* Raatledaaaa.....? ")
// })
// server.listen("3101",()=>{
//     console.log("server is succefully created")
// })

const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    const parsedURL = url.parse(req.url, true);
    console.log(parsedURL);
    if (parsedURL.pathname == "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.write(
        "Hiii mova em thintav ...? pina link lo '/menu' ani add chey menu vastadi"
      );
      res.end();
    } else if (parsedURL.pathname == "/menu") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          categories: "veg and nonveg",
          veg_items: { panner: "200", gobi: "150" },
          nonveg_items: { chicken: "300", mutton: "400" },
          message: "Emkavalo link lo '/'petti add chey mova with quantity",
        })
      );
      res.end("\n example: /menu/nonveg?item = chicken & quantity = 2  like this ..... ");
    } else if (parsedURL.pathname == "/menu/veg") {
      if (parsedURL.query.item == "panner") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            Item: parsedURL.query.item,
            Order_status: "successfull",
            Quantity : parsedURL.query.quantity,
            Price: parsedURL.query.quantity * 200,
            message:"THANKS FOR YOUR ORDER"
          })
        );
        res.end();
      } else if (parsedURL.query.item == "gobi") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            Item: parsedURL.query.item,
            Order_status: "successfull",
            Quantity : parsedURL.query.quantity,
            Price: parsedURL.query.quantity * 150,
            message:"THANKS FOR YOUR ORDER"
          })
        );
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write("sorry bro item not available in veg category");
        res.end();
      }
    } else if (parsedURL.pathname == "/menu/nonveg") {
      if (parsedURL.query.item == "chicken") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            Item: parsedURL.query.item,
            Order_status: "successfull",
            Quantity : parsedURL.query.quantity,
            Price: parsedURL.query.quantity * 300,
            message:"THANKS FOR YOUR ORDER"
          })
        );
        res.end();
      } else if (parsedURL.query.item == "mutton") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            Item: parsedURL.query.item,
            Order_status: "successfull",
            Quantity : parsedURL.query.quantity,
            Price: parsedURL.query.quantity * 400,
            message:"THANKS FOR YOUR ORDER"
          })
        );
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write("sorry bro item not available in nonveg category");
        res.end();
      }
    }
  } else if (req.method == "PUT") {
  } else if (req.method == "POST") {
  } else if (req.method == "DELET") {
  } else {
    console.log("invalid request");
  }
});

server.listen("3102", () => {
  console.log("server is succefully created");
});
