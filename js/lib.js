//Khai báo mảng đối tượng để lưu dữ sản phẩm
const productlist = [
    {id: "01", name: "Xe Mercedes", price: 5Tỷ, image: "../assets/images/xe-mercedes.jpg", productLink: "product-detail.html"},
    {id: "02", name: "Xe Bmw", price: 4Tỷ, image: "../assets/images/xe-bwm.jpg", productLink: "product-detail.html"},
    {id: "03", name: "Xe Audi", price: 3.5Tỷ, image: "../assets/images/xe-audi.jpg", productLink: "product-detail.html"},
    {id: "04", name: "Xe Lexus", price: 4.2Tỷ, image: "../assets/images/xe-lexus.webp", productLink: "product-detail.html"},
    {id: "05", name: "Xe Porsche", price: 6Tỷ, image: "../assets/images/xe-porsche.jpg", productLink: "product-detail.html"},
    {id: "06", name: "Xe Ferrari ", price: 18Tỷ, image: "../assets/images/xe-ferrari.webp", productLink: "product-detail.html"},
    {id: "07", name: "Xe Camry", price: 2ty, image: "../assets/images/xe-camry.webp", productLink: "product-detail.html"},
];

function addProduct(id, name, price, image, hyperLink)
{
    //tạo một product item
    //1. tạo khung chứa 1 item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col m-2");

    //2. Tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image h-75 ratio ratio-1x1 overflow-hidden");

    //3. Tạo đối tượng hình ảnh 
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover h-100");
    //4. Gán hình vào khung
    productImage.appendChild(Image);

    //5. Tạo khung chứa thông tin
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info h-25 text-center");
    // Tạo paragraph 1
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    // Tạo paragraph 2
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    // Tạo hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    productLink.setAttribute("class", "btn btn-info");

    // Gán paragraph 1, 2 và Link vào khung
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    //6. Gán khung hình và khung thông tin vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);
    
    // gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
    }
   