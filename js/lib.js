const productList = [
    {id: "01", name: "Táo Envy Mỹ", price: "150.000 VNĐ/kg", image: "../assets/images/tao-envy.jpg", productLink: "https://ngocchaufruits.com/tao-envy-my-size-28.html"},
    {id: "02", name: "Nho Mẫu Đơn Nhật", price: "800.000 VNĐ/chùm", image: "../assets/images/nho-mau-don.webp", productLink: "https://tfruit.com.vn/san-pham/trai-cay-si/thung-nho-mau-don-nhat-ban/?srsltid=AfmBOopPcuJzdDYkhHUiLB0n0VnkV6V2t3JVFxxZ5mFPd2ZQz4J1z3zc"},
    {id: "03", name: "Xoài Cát Hòa Lộc", price: "90.000 VNĐ/kg", image: "../assets/images/xoai-cat.jpg", productLink: "https://nhavuonkhanhvo.com/products/cay-xoai-cat-hoa-loc-giong-cao-1-5m?srsltid=AfmBOoou96mgGo_gQiVgO8W5St1sHUvk9ravQqe-3VJiOxMJwAeldl7X"},
    {id: "04", name: "Sầu Riêng Ri6", price: "120.000 VNĐ/kg", image: "../assets/images/sau-rieng.webp", productLink: "https://welofarm.vn/sau-rieng-ri-6"},
    {id: "05", name: "Dưa Hấu Không Hạt", price: "30.000 VNĐ/kg", image: "../assets/images/dua-hau.jpg", productLink: "https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/dua-hau-khong-hat-1kg"},
    {id: "06", name: "Bơ Sáp Đắk Lắk", price: "60.000 VNĐ/kg", image: "../assets/images/bo-sap.jpg", productLink: "https://shop.findtour.vn/product/bo-sap-dak-lak-dac-san-tay-nguyen"},
    {id: "07", name: "Cam Sành Miền Tây", price: "40.000 VNĐ/kg", image: "../assets/images/cam-sanh.jpg",productLink: "https://traicaytonyteo.com/cam-sanh-mien-tay-loai-1"},
    {id: "08", name: "Dâu Tây Đà Lạt", price: "200.000 VNĐ/hộp", image: "../assets/images/dau-tay.jpg", productLink: "https://mia.vn/cam-nang-du-lich/top-10-dia-chi-mua-dau-tay-ngon-nhat-da-lat-1412s"},
    {id: "09", name: "Vú Sữa Lò Rèn", price: "50.000 VNĐ/kg", image: "../assets/images/vu-sua.jpg", productLink: "https://moit.gov.vn/tu-hao-hang-viet-nam/thom-ngon-vu-sua-lo-ren.html"},
    {id: "10", name: "Măng Cụt Lái Thiêu", price: "100.000 VNĐ/kg", image: "../assets/images/mang-cut.jpg", productLink: "https://mia.vn/cam-nang-du-lich/mang-cut-lai-thieu-va-niem-tu-hao-cua-nguoi-dan-binh-duong-6403"},
];


function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");
	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');
		productItem.className = 'product-item col-md-3 col-sm-6';
		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image ratio ratio-1x1 overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price text-danger fw-bold mb-2">
					${item.price.toLocaleString('vi-VN')}
				</p>
				<a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
					Xem chi tiết
				</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}