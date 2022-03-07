const getInfo = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, Math.random() * 1000);
  });
};

const show = async () => {
  data1 = await getInfo("1: Pedro el zarzo");
  data2 = await getInfo("2: Lucas requena");
  data3 = await getInfo("3: Jesus koreano");
  console.log(data1, data2, data3);
};
show();

//!getInfo("pepe").then((info) =>{console.log(info)});
