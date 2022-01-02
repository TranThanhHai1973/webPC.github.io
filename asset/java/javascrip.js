
 var $ = document.querySelector.bind(document);
 var $$ = document.querySelectorAll.bind(document);


    var index = 1;
    $('.body-icon-prve').addEventListener('click', function(){       
        const imgs = ["./asset/img/img2.jpg",
                        "./asset/img/img3.jpg",
                        "./asset/img/img4.jpg",
                        "./asset/img/img5.jpg"];
        $('.body-img-one').src = imgs[index];
        index++;
        if(index == 3) {
            index = 0;
        }
    })

    var index = 1;
    $('.body-icon-next').addEventListener('click', function(){       
        const imgs = ["./asset/img/img2.jpg",
                        "./asset/img/img3.jpg",
                        "./asset/img/img4.jpg",
                        "./asset/img/img5.jpg"];
        $('.body-img-one').src = imgs[index];
        index++;
        if(index == 3) {
            index = 0;
        }
    })


                        // phần show product 
    const products = {
        itemProduct: [
                        {   textPone: 'VĂN PHÒNG TẠI NHÀ',
                            textPtwo: 'làm việc thật đã',
                            img: './asset/img/product1.jpg',
                            code: 'PCAS 183',
                            content: 'PC Asus All in One A5401WR (i5-10500T/8GB RAM/512GB SSD/23.8 inch Full HD/Touch/WL+BT/K+M/Win 10) (A5401WRAT-BA020T)',
                            priceOld: '19.799.000₫  ',
                            priceNew: '17.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }
               ],
        itemProduct1: [         
                        {  textPone: 'LÀM VIỆC VÀ HỌC TẬP ',
                        textPtwo: 'TẤT CẢ TRONG 1',
                        img: './asset/img/product2.jpg',
                        code: 'TNSS 074',
                        content: 'PC Lenovo IdeaCentre All in One 3 24ITL6 (i5-1135G7/8GB RAM/256GB SSD/23.8 inch FHD/WL+BT/K+M/Win 11) (F0G000XFVN)',
                        priceOld: '18.799.000₫  ',
                        priceNew: '15.799.000₫',
                        check:'còn hàng',
                        notification: 'hết hàng',
                        showProduct: 'xem tất cả sản phẩm'
                    }                 
                ],
        itemProduct2: [
                        {   textPone: 'LAP TOP VĂN PHÒNG',
                            textPtwo: 'NHO GỌN TIỆN LỢI',
                            img: './asset/img/product3.jpg',
                            code: 'INHT 276',
                            content: 'Laptop Lenovo IdeaPad 3 14ALC6 (82KT004DVN) (R7 5700U/2*4GB RAM/512GB SSD/14 FHD/Win10/Xám)',
                            priceOld: '17.799.000₫  ',
                            priceNew: '16.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                    ],
        itemProduct3: [
                            {   textPone: 'MIC THU ÂM',
                            textPtwo: 'CHẤT LƯỢNG ÂM TỐT',
                            img: './asset/img/product4.jpg',
                            code: 'MKUD 356',
                            content: 'PC Lenovo  (i5-1135G7/8GB /23.8 inch FHD/WL+BT/K+M/Win 11) (F0G000XFVN)',
                            priceOld: '19.799.000₫  ',
                            priceNew: '11.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

        ],
        itemGamming1: [
                            { 
                            img: './asset/img/gamming1.jpg',
                            code: 'Mã: LTAU6296',
                            content: ' Laptop Asus ZenBook UX363EA-HP532T (i5 1135G7/8GB RAM/512GB SSD/13.3 FHD Cảm ứng/Win10/Cáp/Bút/Túi/Xám) ',
                            priceOld: '29.799.000₫  ',
                            priceNew: '15.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],

        itemGamming2: [ {
                            img: './asset/img/gamming2.jpg',
                            code: 'MBHG 3156',
                            content: ' Laptop Asus VivoBook (R5 5600H/8GB RAM/512GB3050MaxQ 4GB/Win10/Xanh) ',
                            priceOld: '27.799.000₫  ',
                            priceNew: '25.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],

         itemGamming3: [
                            {   
                            img: './asset/img/gamming3.jpg',
                            code: 'MJHUG 548',
                            content: ' Laptop Acer Gaming Predator Triton 300  (i7 11800H/16GB RAM/512GB  8G/15.6  165Hz/Win10/Đen) (2021) ',
                            priceOld: '29.799.000₫  ',
                            priceNew: '21.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        itemGamming4: [
                            {   
                            img: './asset/img/gamming4.jpg',
                            code: 'KPUD 557',
                            content: ' Laptop Dell Vostro 5510 (70253901) (i5 11300H/8GB RAM/512GB SSD/15.6  inch FHD /Win10+Office/Xám) (2021) ',
                            priceOld: '26.799.000₫  ',
                            priceNew: '21.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        itemGamming5: [
                            {  
                            img: './asset/img/gamming5.jpg',
                            code: 'MUHG 3546',
                            content: ' Laptop Dell Vostro 3400 (70253900) (i5 1135G7/8GB RAM/256GB SSD/14.0 inch FHD/Win10+Office/Đen) ',
                            priceOld: '23.799.000₫  ',
                            priceNew: '21.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        tree1: [
                            {  
                            img: './asset/img/cay1.jpg',
                            code: 'CVG 3546',
                            content: '  Mini PC Asus PN60 (i3-8130U/WL/Vesa Mount/Com Port/Đen) (BB3016MC) ',
                            priceOld: '8.799.000₫  ',
                            priceNew: '7.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        tree2: [
                            {  
                            img: './asset/img/cây2.jpg',
                            code: 'CHGB 5874',
                            content: 'PC HP S01-pF1144d (i5-10400/4GB RAM/1TB HDD/DVDRW/WL+BT/K+M/Win 10) (181A4AA) ',
                            priceOld: '11.799.000₫  ',
                            priceNew: '8.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        tree3: [
                            {  
                            img: './asset/img/cây3.jpg',
                            code: 'CHJU 256',
                            content: ' PC Dell OptiPlex 7080 SFF (i7-10700/8GB RAM/256GB SSD/DVDRW/WL+BT/K+M/Ubuntu) ',
                            priceOld: '10.799.000₫  ',
                            priceNew: '7.799.000₫',
                            check:'còn hàng',
                            notification: 'hết hàng',
                            showProduct: 'xem tất cả sản phẩm'
                        }

                ],
        tree4: [
                    {  
                    img: './asset/img/cây4.jpg',
                    code: 'CBHG 2456',
                    content: ' PC HP ProDesk 400 G7 MT (i3-10100/4GB RAM/256GB SSD/WL+BT/K+M/Win 10) (46L59PA) ',
                    priceOld: '12.799.000₫  ',
                    priceNew: '9.799.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        man1: [
                    {  
                    img: './asset/img/man1.jpg',
                    code: 'BGVB 2456',
                    content: ' Màn hình ASUS PC HP ProDesk 400 G7 MT (i3-10100/4GB RAM/256GB SSD/WL+BT/K+M/Win 10) (46L59PA)',
                    priceOld: '8.799.000₫  ',
                    priceNew: '7.799.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        man2: [
                    {  
                    img: './asset/img/man2.jpg',
                    code: 'HHJU 2451',
                    content: 'Màn hình Vostro 5510 (70253901) (i5 11300H/8GB RAM/512GB SSD/15.6  inch FHD /Win10+Office/Xám) (2021)  ',
                    priceOld: '9.799.000₫  ',
                    priceNew: '6.799.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        man3: [
                    {  
                    img: './asset/img/man3.jpg',
                    code: 'GBTH 4584',
                    content: 'Màn hình ASUS BE229QLB Triton 300  (i7 11800H/16GB RAM/512GB SSD/RTX 3070 8G/15.6 inch QHD 165Hz/Win10/Đen) (2021)   ',
                    priceOld: '7.799.000₫  ',
                    priceNew: '5.799.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],

        man4: [
                    {  
                    img: './asset/img/man4.jpg',
                    code: 'GHNKH 5487',
                    content: ' Màn hình Acer VG240YS All in One 3 24ITL6 (i5-1135G7/8GB RAM/256GB SSD/23.8 inch FHD/WL+BT/K+M/Win 11) ',
                    priceOld: '8.299.000₫  ',
                    priceNew: '6.199.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        key1: [
                    {  
                    img: './asset/img/phim1.jpg',
                    code: 'Mã: KBLO041',
                    content: ' Bộ Bàn phím Logitech + Chuột MK120 Vostro 5510 (70253901) (i5 11300H/8GB RAM/512GB SSD/15.6  inch FHD /Win10+Office/Xám) (2021) ',
                    priceOld: '299.000₫  ',
                    priceNew: '199.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        key2: [
                    {  
                    img: './asset/img/phim2.jpg',
                    code: 'Mã: MELO055',
                    content: ' Bộ bàn phím Logitech M185 Wireless (USB/Xám đen)  (i5 1135G7/8GB RAM/256GB +Office/Đen) ',
                    priceOld: '249.000₫  ',
                    priceNew: '199.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        key3: [
                    {  
                    img: './asset/img/phim3.jpg',
                    code: 'Mã: MELO055',
                    content: '  Bộ bàn phím chuột (70253901) (i5 11300H/8GB RAM/512GB SSD/15.6  inch FHD /Win10+Office/Xám) (2021) ',
                    priceOld: '359.000₫  ',
                    priceNew: '299.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        key4: [
                    {  
                    img: './asset/img/phim4.jpg',
                    code: 'Mã: MELO055',
                    content: 'Chuột Fuhlen L102 Optical Black USB Logitech M185 Wireless (USB/Xám đen) Vostro 3400 (i5 1  FHD/Win10+Office/Đen)',
                    priceOld: '179.000₫  ',
                    priceNew: '129.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        tai1: [
                    {  
                    img: './asset/img/tai1.jpg',
                    code: 'Mã: TNZI051',
                    content: ' Tai nghe Zidli ZH20 7.1 Led RGB USB  Logitech M185 Wireless (i5 1135G7/8GB RAM/256GB SSD/14.0 inch FHD/Win10+Office/Đen) ',
                    priceOld: '499.000₫  ',
                    priceNew: '299.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        tai2: [
                    {  
                    img: './asset/img/tai2.jpg',
                    code: 'Mã: TNZI051',
                    content: ' Tai nghe HP HyperX Cloud Stinger S - 4 (i5 1135G7/8GB RAM/256GB SSD/14.0 inch FHD/Win10+Office/Đen) ',
                    priceOld: '499.000₫  ',
                    priceNew: '399.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        tai3: [
                    {  
                    img: './asset/img/tai3.jpg',
                    code: 'Mã: TNHP013',
                    content: ' Tai nghe HP HyperX Cloud Stinger S - 4P4F1AA  Wireless (USB/Xám đen)  (i5 HD/Win10+Office/Đen) ',
                    priceOld: '1.499.000₫  ',
                    priceNew: '1.399.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        tai4: [
                    {  
                    img: './asset/img/tai4.jpg',
                    code: 'Mã: SPJB036',
                    content: ' Loa Bluetooth JBL FLIP 5  Stinger S - 4P4F1AA  Wireless  (i5 1135G7/8GB RAM/256GB SSD/14.0 inch FHD/Win10+Office/Đen) ',
                    priceOld: '2.499.000₫  ',
                    priceNew: '2.159.000₫',
                    check:'còn hàng',
                    notification: 'hết hàng',
                    showProduct: 'xem tất cả sản phẩm'
                }

        ],
        addres1: [
                {
                    number: '1',
                    nameAddress: 'HACOM - HAI BÀ TRƯNG',
                    textAddress: 'Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội'               
                }
        ],
        addres2: [
            {
                number: '2',
                nameAddress: 'HACOM - ĐỐNG ĐA',
                textAddress: ' Số 43 Thái Hà - Đống Đa - Hà Nội'               
            }
         ],
         addres3: [
            {
                number: '3',
                nameAddress: 'HACOM - CẦU GIẤY',
                textAddress: ' Số 79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội'               
            }
        ],
        addres4: [
            {
                number: '4',
                nameAddress: 'HACOM - HÀ ĐÔNG 1',
                textAddress: ' Số 511 Quang Trung - Hà Đông - Hà Nội'               
            }
         ],
         addres5: [
            {
                number: '5',
                nameAddress: 'HACOM - THANH TRÌ',
                textAddress: ' CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội'               
            }
         ],
         addres6: [
            {
                number: '6',
                nameAddress: 'HACOM - HÀ ĐÔNG 2',
                textAddress: '  Số 57 Trần Phú - Hà Đông - Hà Nội'               
            }
         ],
         addres7: [
            {
                number: '7',
                nameAddress: 'HACOM - LONG BIÊN',
                textAddress: ' Số 398 Nguyễn Văn Cừ - Long Biên - Hà Nội'               
            }
         ],
         addres8: [
            {
                number: '8',
                nameAddress: 'HACOM - TỪ SƠN',
                textAddress: ' Số 299 Minh Khai - Từ Sơn - Bắc Ninh'               
            }
         ],
         addres9: [
            {
                number: '9',
                nameAddress: 'HACOM - HOÀN KIẾM ',
                textAddress: ' Số 61 Thợ Nhuộm - Hoàn Kiếm - Hà Nội'               
            }
         ],
         addres10: [
            {
                number: '10',
                nameAddress: 'HACOM - THANH TRÌ',
                textAddress: ' CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội'               
            }
         ],
         addres11: [
            {
                number: '11',
                nameAddress: 'HACOM - HÀ ĐÔNG 2',
                textAddress: '  Số 57 Trần Phú - Hà Đông - Hà Nội'               
            }
         ],
         addres12: [
            {
                number: '12',
                nameAddress: 'HACOM - ĐÔNG ANH',
                textAddress: ' Số 77 Cao Lỗ - Đông Anh - Hà Nội'               
            }
         ],
         
         feedBack1: [
            {
                icon: 'fas fa-shipping-fast',
                textH1: 'CHÍNH SÁCH GIAO HÀNG',
                textP: 'Nhận hàng và thanh toán tại nhà'               
            }
         ],
         feedBack2: [
            {
                icon: 'fas fa-sync',
                textH1: 'ĐỔI TRẢ DỄ DÀNG',
                textP: '1 đổi 1 trong 15 ngày'               
            }
         ],
         feedBack3: [
            {
                icon: 'fas fa-id-card',
                textH1: 'THANH TOÁN TIỆN LỢI',
                textP: 'Trả tiền mặt, CK, trả góp 0%'               
            }
         ],
         feedBack4: [
            {
                icon: 'fas fa-comments',
                textH1: 'HỖ TRỢ NHIỆT TÌNH',
                textP: 'Tư vấn, giải đáp mọi thắc mắc'               
            }
         ],
         contact1: [
                {
                    sdt: '0985621472',
                    name: 'Trịnh Đức Hiếu(LapTop Gamming,Sever)'
                }
         ],
         contact2: [
            {
                sdt: '0985325475',
                name: 'Đồng Văn Tuấn(Gamming gear, Console)'
            }
        ],
        contact3: [
            {
                sdt: '0985621458',
                name: 'Phạm Văn Phong(Thiết Bị Văn Phòng,đồ họa)'
            }
        ],
        contact4: [
            {
                sdt: '0925145698',
                name: 'Nguyễn Trọng Nhất(Thiết bị Siêu Thi,Tai nghe)'
            }
         ],
         contact5: [
            {
                sdt: '0965874215',
                name: 'Ngô Xuân Nguyên(lapTop Thinkpad,Loa)'
            }
        ],
        contact6: [
            {
                sdt: '09658749154',
                name: 'Trần Thanh Hải(Đồ chơi công nghệ)'
            }
        ],
        helpOne: [
            {
                textHeader: 'Hỗ trợ khách hàng',
                Tone: 'Góp ý, khiếu nại',
                Ttwo: 'Hướng dẫn thanh toán',
                Tthird: 'Hướng dẫn mua hàng trả góp',
                Tfour: 'Tra cứu hóa đơn điện tử',
                Tfive: 'Tra cứu sản phẩm gửi bảo hành',
                Tsix: 'Gửi yêu cầu bảo hành',
                Tsevent: 'Biểu mẫu hợp đồng',
                Teight: 'Hướng dẫn mua hàng trực tuyến'
            }
    ],
        helpTwo: [
            {
                textHeader: 'Chính sách chung',
                Tone: 'Chính sách chung',
                Ttwo: 'Bảo mật thông tin khách hàng',
                Tthird: 'Chính sách hàng chính hãng',
                Tfour: 'Chính sách giao hàng',
                Tfive: 'Tra cứu sản phẩm gửi bảo hành',
                Tsix: 'Chính sách cho doanh nghiệp',
                Tsevent: 'Chính sách nhập lại tính phí'
            }
    ],
        helpThri: [
            {
                textHeader: 'Thông tin khuyến mại',
                Tone: 'Thông tin khuyến mại',
                Ttwo: 'Sản phẩm khuyến mại'
            }
    ],
        helpFourt: [
            {
                textHeader: 'Thông tin HACOM',
                Tone: 'Giới thiệu HACOM',
                Ttwo: 'Sản phẩm khuyến mại',
                Tthird: 'Tin tức công nghệ',
                Tfour: 'Liên hệ hợp tác kinh doanh'
            }
    ],

       

                    // return cái gì trong hàm render này thì trong star sẽ nhận được
        render: function() {
                const htmls = this.itemProduct.map(product => {
                    return `  
                    <div class="product">                           
                    <span class="body-show_text">
                        <p>${product.textPone}</p>
                        <p>${product.textPtwo}</p>
                    
                    </span>
                        <a href="" class="body-show-link-product">
                            <img src="${product.img}" alt="" class="body-show-link-product-img">
                        </a>
                        <div class="body-box-icon">
                            <span class="body-show-icon-star">
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                            </span>
                            <span class="body-show-icon-text">${product.code} </span>
                                                                            
                        </div>
                        <a href="#" class="body-show-p">
                            ${product.content}
                        </a>

                        <div class="body-sprice-sale">${product.priceOld}</div>

                        <div class="body-sprice">${product.priceNew}</div>

                        <div class="body-check-product">
                            <span class="body-product-icon">
                                <i class="fas fa-check"></i>
                                ${product.check}
                            </span>
                            <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                        </div>
                        
                        <div class="body-show-all-product">
                            <a href="" class="body-show-all-product-click">
                            ${product.showProduct}
                            </a>
                        </div>
                    </div>
                        `
                  })

                  
                $('.body-row').innerHTML = htmls.join('')

            },  
            
            
         render1: function() {
                const htmls = this.itemProduct1.map(product => {
                    return `  
                    <div class="product">                           
                    <span class="body-show_text">
                        <p>${product.textPone}</p>
                        <p>${product.textPtwo}</p>
                    
                    </span>
                        <a href="" class="body-show-link-product">
                            <img src="${product.img}" alt="" class="body-show-link-product-img">
                        </a>
                        <div class="body-box-icon">
                            <span class="body-show-icon-star">
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                                    <i class="body-icon-star fas fa-star"></i>
                            </span>
                            <span class="body-show-icon-text">${product.code} </span>
                                                                            
                        </div>
                        <a href="#" class="body-show-p">
                            ${product.content}
                        </a>

                        <div class="body-sprice-sale">${product.priceOld}</div>

                        <div class="body-sprice">${product.priceNew}</div>

                        <div class="body-check-product">
                            <span class="body-product-icon">
                                <i class="fas fa-check"></i>
                                ${product.check}
                            </span>
                            <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                        </div>
                        
                        <div class="body-show-all-product">
                            <a href="" class="body-show-all-product-click">
                            ${product.showProduct}
                            </a>
                        </div>
                    </div>
                        `
                  })

                  
                $('.body-row-one').innerHTML = htmls.join('')

            },  

        render2: function() 
                {
                    const htmls = this.itemProduct2.map(product => {
                        return `  
                        <div class="product">                           
                        <span class="body-show_text">
                            <p>${product.textPone}</p>
                            <p>${product.textPtwo}</p>
                        
                        </span>
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-row-two').innerHTML = htmls.join('')
    
                },  

        render3: function() {
                    const htmls = this.itemProduct3.map(product => {
                        return `  
                        <div class="product">                           
                        <span class="body-show_text">
                            <p>${product.textPone}</p>
                            <p>${product.textPtwo}</p>
                        
                        </span>
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-row-three').innerHTML = htmls.join('')
    
                },

        renderGamming1: function() {
                    const htmls = this.itemGamming1.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-gamming1').innerHTML = htmls.join('')
    
                },

        renderGamming2: function() {
                    const htmls = this.itemGamming2.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-gamming2').innerHTML = htmls.join('')
    
                },
        renderGamming3: function() {
                    const htmls = this.itemGamming3.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-gamming3').innerHTML = htmls.join('')
    
                },
        renderGamming4: function() {
                    const htmls = this.itemGamming4.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-gamming4').innerHTML = htmls.join('')
    
                },

        renderTree1: function() {
                    const htmls = this.tree1.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-tree1').innerHTML = htmls.join('')
    
                },

        renderTree2: function() {
                    const htmls = this.tree2.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-tree2').innerHTML = htmls.join('')
    
                },

        renderTree3: function() {
                    const htmls = this.tree3.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-tree3').innerHTML = htmls.join('')
    
                },

        renderTree4: function() {
                    const htmls = this.tree4.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-tree4').innerHTML = htmls.join('')
    
                },

        renderMan1: function() {
                    const htmls = this.man1.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-cap1').innerHTML = htmls.join('')
    
                },

        renderMan2: function() {
                    const htmls = this.man2.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-cap2').innerHTML = htmls.join('')
    
                },

         renderMan3: function() {
                    const htmls = this.man3.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-cap3').innerHTML = htmls.join('')
    
                },
        renderMan4: function() {
                    const htmls = this.man4.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-cap4').innerHTML = htmls.join('')
    
                },
        renderKeybord1: function() {
                    const htmls = this.key1.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-keybord1').innerHTML = htmls.join('')
    
                },
         renderKeybord2: function() {
                    const htmls = this.key2.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-keybord2').innerHTML = htmls.join('')
    
                },
        renderKeybord3: function() {
                    const htmls = this.key3.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-keybord3').innerHTML = htmls.join('')
    
                },
        renderKeybord4: function() {
                    const htmls = this.key4.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-keybord4').innerHTML = htmls.join('')
    
                },
        renderHeadphone1: function() {
                    const htmls = this.tai1.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-headphone1').innerHTML = htmls.join('')
    
                },

        renderHeadphone2: function() {
                    const htmls = this.tai2.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-headphone2').innerHTML = htmls.join('')
    
                },

        renderHeadphone3: function() {
                    const htmls = this.tai3.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-headphone3').innerHTML = htmls.join('')
    
                },

        renderHeadphone4: function() {
                    const htmls = this.tai4.map(product => {
                        return `  
                        <div class="product">                                                
                            <a href="" class="body-show-link-product">
                                <img src="${product.img}" alt="" class="body-show-link-product-img">
                            </a>
                            <div class="body-box-icon">
                                <span class="body-show-icon-star">
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                        <i class="body-icon-star fas fa-star"></i>
                                </span>
                                <span class="body-show-icon-text">${product.code} </span>
                                                                                
                            </div>
                            <a href="#" class="body-show-p">
                                ${product.content}
                            </a>
    
                            <div class="body-sprice-sale">${product.priceOld}</div>
    
                            <div class="body-sprice">${product.priceNew}</div>
    
                            <div class="body-check-product">
                                <span class="body-product-icon">
                                    <i class="fas fa-check"></i>
                                    ${product.check}
                                </span>
                                <i style="cursor: pointer;" class=" fas fa-shopping-cart"></i>
                            </div>
                            
                            <div class="body-show-all-product">
                                <a href="" class="body-show-all-product-click">
                                ${product.showProduct}
                                </a>
                            </div>
                        </div>
                            `
                      })
    
                      
                    $('.body-headphone4').innerHTML = htmls.join('')
    
                },
        renderAddress1: function() {
                        const htmls = this.addres1.map(product => {
                            return `
                                <div class="footer-showroom">
                                    <div class="footer-showroom-name">
                                        <p class="footer-showroom-name__p">${product.number}</p>
                                        <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                    </div>

                                    <ul class="footer-showroom-address">

                                        <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-map-marker"></i>
                                                    <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                            </div>
                                        </li>


                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <a href="">
                                                            <i class="change-height fas fa-images"></i>
                                                            <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                    </a>
                                                </div>
                                        </li>

                                    
                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <a href="">
                                                            <i class="change-height fas fa-map-marked-alt"></i>
                                                            <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                    </a>
                                                </div>
                                        </li>
                                        

                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-phone-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                                </div>
                                        </li>


                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-phone-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                                </div>
                                        </li>

                                        
                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height far fa-envelope"></i>
                                                    <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                                </div>
                                        </li>

                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height far fa-clock"></i>
                                                    <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                                </div>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                                `
                                })
                                $('.footer-address1').innerHTML = htmls.join('')
                 },
        renderAddress2: function() {
                const htmls = this.addres2.map(product => {
                    return `
                        <div class="footer-showroom">
                            <div class="footer-showroom-name">
                                <p class="footer-showroom-name__p">${product.number}</p>
                                <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                            </div>

                            <ul class="footer-showroom-address">

                                <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-map-marker"></i>
                                            <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                    </div>
                                </li>


                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <a href="">
                                                    <i class="change-height fas fa-images"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                            </a>
                                        </div>
                                </li>

                            
                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <a href="">
                                                    <i class="change-height fas fa-map-marked-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                            </a>
                                        </div>
                                </li>
                                

                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-phone-alt"></i>
                                            <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                        </div>
                                </li>


                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-phone-alt"></i>
                                            <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                        </div>
                                </li>

                                
                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height far fa-envelope"></i>
                                            <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                        </div>
                                </li>

                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height far fa-clock"></i>
                                            <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                        </div>
                                </li>
                                
                                
                            </ul>
                        </div>
                        `
                        })
                        $('.footer-address2').innerHTML = htmls.join('')
                },
        renderAddress3: function() {
                    const htmls = this.addres3.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>

                                <ul class="footer-showroom-address">

                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>

                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>

                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address3').innerHTML = htmls.join('')
                },
        renderAddress4: function() {
                    const htmls = this.addres4.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>

                                <ul class="footer-showroom-address">

                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>

                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>

                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address4').innerHTML = htmls.join('')
                },
        renderAddress5: function() {
                    const htmls = this.addres5.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>

                                <ul class="footer-showroom-address">

                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>

                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>

                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address5').innerHTML = htmls.join('')
                },
        renderAddress6: function() {
                    const htmls = this.addres6.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>

                                <ul class="footer-showroom-address">

                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>

                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>

                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address6').innerHTML = htmls.join('')
                },
        renderFeedback1: function() {
                    const htmls = this.feedBack1.map(product => {
                        return `
                        <div class="footer-li">
                            <div class="footer-li__icon">
                                <i class="${product.icon}"></i>
                            </div>
                            <div class="footer-li__text">
                                <h1 class="footer-li__text-h1">${product.textH1}</h1>
                                <p class="footer-li__text-p">${product.textP}</p>
                            </div>
                        </div> 
                            `
                     })
                    $('.feedback-1').innerHTML = htmls.join('')
                },
        renderFeedback2: function() {
                const htmls = this.feedBack2.map(product => {
                    return `
                    <div class="footer-li">
                        <div class="footer-li__icon">
                            <i class="${product.icon}"></i>
                        </div>
                        <div class="footer-li__text">
                            <h1 class="footer-li__text-h1">${product.textH1}</h1>
                            <p class="footer-li__text-p">${product.textP}</p>
                        </div>
                    </div> 
                    `
                })
                $('.feedback-2').innerHTML = htmls.join('')
                },
        renderFeedback3: function() {
            const htmls = this.feedBack3.map(product => {
                return `
                <div class="footer-li">
                    <div class="footer-li__icon">
                        <i class="${product.icon}"></i>
                    </div>
                    <div class="footer-li__text">
                        <h1 class="footer-li__text-h1">${product.textH1}</h1>
                        <p class="footer-li__text-p">${product.textP}</p>
                    </div>
                </div> 
                `
            })
            $('.feedback-3').innerHTML = htmls.join('')
                 },
        renderFeedback4: function() {
                const htmls = this.feedBack4.map(product => {
                    return `
                    <div class="footer-li">
                        <div class="footer-li__icon">
                            <i class="${product.icon}"></i>
                        </div>
                        <div class="footer-li__text">
                            <h1 class="footer-li__text-h1">${product.textH1}</h1>
                            <p class="footer-li__text-p">${product.textP}</p>
                        </div>
                    </div> 
                    `
                })
                $('.feedback-4').innerHTML = htmls.join('')
                },
        renderAddress7: function() {
                        const htmls = this.addres1.map(product => {
                            return `
                                <div class="footer-showroom">
                                    <div class="footer-showroom-name">
                                        <p class="footer-showroom-name__p">${product.number}</p>
                                        <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                    </div>

                                    <ul class="footer-showroom-address">

                                        <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-map-marker"></i>
                                                    <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                            </div>
                                        </li>


                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <a href="">
                                                            <i class="change-height fas fa-images"></i>
                                                            <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                    </a>
                                                </div>
                                        </li>

                                    
                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <a href="">
                                                            <i class="change-height fas fa-map-marked-alt"></i>
                                                            <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                    </a>
                                                </div>
                                        </li>
                                        

                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-phone-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                                </div>
                                        </li>


                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height fas fa-phone-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                                </div>
                                        </li>

                                        
                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height far fa-envelope"></i>
                                                    <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                                </div>
                                        </li>

                                        <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                    <i class="change-height far fa-clock"></i>
                                                    <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                                </div>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                                `
                                })
                                $('.footer-address7').innerHTML = htmls.join('')
                 },
        renderAddress8: function() {
                    const htmls = this.addres2.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>

                                <ul class="footer-showroom-address">

                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>

                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>


                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>

                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>

                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address8').innerHTML = htmls.join('')
                   },
        renderAddress9: function() {
                const htmls = this.addres3.map(product => {
                    return `
                        <div class="footer-showroom">
                            <div class="footer-showroom-name">
                                <p class="footer-showroom-name__p">${product.number}</p>
                                <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                            </div>

                            <ul class="footer-showroom-address">

                                <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-map-marker"></i>
                                            <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                    </div>
                                </li>


                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <a href="">
                                                    <i class="change-height fas fa-images"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                            </a>
                                        </div>
                                </li>

                            
                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <a href="">
                                                    <i class="change-height fas fa-map-marked-alt"></i>
                                                    <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                            </a>
                                        </div>
                                </li>
                                

                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-phone-alt"></i>
                                            <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                        </div>
                                </li>


                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height fas fa-phone-alt"></i>
                                            <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                        </div>
                                </li>

                                
                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height far fa-envelope"></i>
                                            <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                        </div>
                                </li>

                                <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                            <i class="change-height far fa-clock"></i>
                                            <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                        </div>
                                </li>
                                
                                
                            </ul>
                        </div>
                        `
                        })
                        $('.footer-address9').innerHTML = htmls.join('')
                 },
        renderAddress10: function() {
            const htmls = this.addres4.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address10').innerHTML = htmls.join('')
                 },
        renderAddress11: function() {
                    const htmls = this.addres5.map(product => {
                        return `
                            <div class="footer-showroom">
                                <div class="footer-showroom-name">
                                    <p class="footer-showroom-name__p">${product.number}</p>
                                    <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                </div>
        
                                <ul class="footer-showroom-address">
        
                                    <li class="footer-showroom-address__li">
                                        <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-map-marker"></i>
                                                <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                        </div>
                                    </li>
        
        
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-images"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                </a>
                                            </div>
                                    </li>
        
                                
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <a href="">
                                                        <i class="change-height fas fa-map-marked-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                </a>
                                            </div>
                                    </li>
                                    
        
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                            </div>
                                    </li>
        
        
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height fas fa-phone-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                            </div>
                                    </li>
        
                                    
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-envelope"></i>
                                                <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                            </div>
                                    </li>
        
                                    <li class="footer-showroom-address__li">
                                            <div class="footer-showroom-address-li">
                                                <i class="change-height far fa-clock"></i>
                                                <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                            </div>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                            `
                            })
                            $('.footer-address11').innerHTML = htmls.join('')
                },
        renderAddress12: function() {
                            const htmls = this.addres6.map(product => {
                                return `
                                    <div class="footer-showroom">
                                        <div class="footer-showroom-name">
                                            <p class="footer-showroom-name__p">${product.number}</p>
                                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                                        </div>
                
                                        <ul class="footer-showroom-address">
                
                                            <li class="footer-showroom-address__li">
                                                <div class="footer-showroom-address-li">
                                                        <i class="change-height fas fa-map-marker"></i>
                                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                                </div>
                                            </li>
                
                
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <a href="">
                                                                <i class="change-height fas fa-images"></i>
                                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                                        </a>
                                                    </div>
                                            </li>
                
                                        
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <a href="">
                                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                                        </a>
                                                    </div>
                                            </li>
                                            
                
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <i class="change-height fas fa-phone-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                                    </div>
                                            </li>
                
                
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <i class="change-height fas fa-phone-alt"></i>
                                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                                    </div>
                                            </li>
                
                                            
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <i class="change-height far fa-envelope"></i>
                                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                                    </div>
                                            </li>
                
                                            <li class="footer-showroom-address__li">
                                                    <div class="footer-showroom-address-li">
                                                        <i class="change-height far fa-clock"></i>
                                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                                    </div>
                                            </li>
                                            
                                            
                                        </ul>
                                    </div>
                                    `
                                    })
                                    $('.footer-address12').innerHTML = htmls.join('')
                },   
        renderAddress13: function() {
            const htmls = this.addres7.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address13').innerHTML = htmls.join('')
                    },
        renderAddress14: function() {
            const htmls = this.addres8.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address14').innerHTML = htmls.join('')
                    },
        renderAddress15: function() {
            const htmls = this.addres9.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address15').innerHTML = htmls.join('')
                    },
        renderAddress16: function() {
            const htmls = this.addres10.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address16').innerHTML = htmls.join('')
                    },
        renderAddress17: function() {
            const htmls = this.addres11.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address17').innerHTML = htmls.join('')
                    },
        renderAddress18: function() {
            const htmls = this.addres12.map(product => {
                return `
                    <div class="footer-showroom">
                        <div class="footer-showroom-name">
                            <p class="footer-showroom-name__p">${product.number}</p>
                            <h1 class="footer-showroom-name__h1">${product.nameAddress}</h1>
                        </div>

                        <ul class="footer-showroom-address">

                            <li class="footer-showroom-address__li">
                                <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-map-marker"></i>
                                        <h1 class="footer-showroom-address__exactli">${product.textAddress}</h1>
                                </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-images"></i>
                                                <h1 class="footer-showroom-address__exactli"> Hình ảnh thực tế showroom</h1>
                                        </a>
                                    </div>
                            </li>

                        
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <a href="">
                                                <i class="change-height fas fa-map-marked-alt"></i>
                                                <h1 class="footer-showroom-address__exactli"> Xem bản đồ đường đi</h1>
                                        </a>
                                    </div>
                            </li>
                            

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</h1>
                                    </div>
                            </li>


                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height fas fa-phone-alt"></i>
                                        <h1 class="footer-showroom-address__exactli"> Bảo hành: 1900 1903 (máy lẻ 25393)</h1>
                                    </div>
                            </li>

                            
                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-envelope"></i>
                                        <h1 class="footer-showroom-address__exactli">Email: tranhai11082001@gmail.com</h1>
                                    </div>
                            </li>

                            <li class="footer-showroom-address__li">
                                    <div class="footer-showroom-address-li">
                                        <i class="change-height far fa-clock"></i>
                                        <h1 class="footer-showroom-address__exactli">  Thời gian mở cửa: Từ 8h-20h hàng ngày</h1>
                                    </div>
                            </li>
                            
                            
                        </ul>
                    </div>
                    `
                    })
                    $('.footer-address18').innerHTML = htmls.join('')
                    },
        renderContact1: function() {
            const htmls = this.contact1.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact1') .innerHTML = htmls.join('')
        },
        renderContact2: function() {
            const htmls = this.contact2.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact2') .innerHTML = htmls.join('')
        },
        renderContact3: function() {
            const htmls = this.contact3.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact3') .innerHTML = htmls.join('')
        },
        renderContact4: function() {
            const htmls = this.contact4.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact4') .innerHTML = htmls.join('')
        },
        renderContact5: function() {
            const htmls = this.contact5.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact5') .innerHTML = htmls.join('')
        },
        renderContact6: function() {
            const htmls = this.contact6.map(product => {
                return `
                    <div class="list-hotline">
                        <a href="#"><i class="list-hotline__icon far fa-comment-dots">Zalo</i></a>
                        <span class="list-hotline__phone">${product.sdt}</span>
                        <span class="list-hotline__impomation">${product.name}</span>
                    </div>
                `
            })
            $('.contact6') .innerHTML = htmls.join('')
        },
        renderHelp1: function() {
            const htmls = this.helpOne.map( product =>{
                return`
                        <div class="menu-help__list">
                            <h1>${product.textHeader}</h1>
                            <div class="booter"></div>
                                <ul class="help-list">
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Teight}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tone}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Ttwo}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tthird}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                        Tra cứu sản phẩm gửi bảo hành
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tfour}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tfive}
                                        </a>
                                    </li>
                                     <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tsix}
                                        </a>
                                     </li>
                                   
                                </ul>
                    </div>
                `
            })
            $('.help-1').innerHTML = htmls.join('')
        },
        renderHelp2: function() {
            const htmls = this.helpTwo.map( product =>{
                return`
                        <div class="menu-help__list">
                            <h1>${product.textHeader}</h1>
                            <div class="booter"></div>
                                <ul class="help-list">
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tone}
                                        </a>
                                    </li>
                                    
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Ttwo}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tthird}
                                        </a>
                                    </li>
                                    
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tfour}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tfive}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tsix}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tsevent}
                                        </a>
                                    </li>
                                   
                                </ul>
                    </div>
                `
            })
            $('.help-2').innerHTML = htmls.join('')
        },
        renderHelp3: function() {
            const htmls = this.helpThri.map( product =>{
                return`
                        <div class="menu-help__list">
                            <h1>${product.textHeader}</h1>
                            <div class="booter"></div>
                                <ul class="help-list">
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tone}
                                        </a>
                                    </li>
                                    
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Ttwo}
                                        </a>
                                    </li>
                                </ul>
                    </div>
                `
            })
            $('.help-3').innerHTML = htmls.join('')
        },
        renderHelp4: function() {
            const htmls = this.helpFourt.map( product =>{
                return`
                        <div class="menu-help__list">
                            <h1>${product.textHeader}</h1>
                            <div class="booter"></div>
                                <ul class="help-list">
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tone}
                                        </a>
                                    </li>
                                    
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Ttwo}
                                        </a>
                                    </li>
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tthird}
                                        </a>
                                    </li>
                                    
                                    <li class="help-list__text">
                                        <a href="">
                                            <i class="fas fa-check"></i>
                                            ${product.Tfour}
                                        </a>
                                    </li>
                                </ul>
                    </div>
                `
            })
            $('.help-4').innerHTML = htmls.join('')
        },
        
                                
                    // định nghĩa hàm funtion() 
                star: function() {
                    this.render()
                    this.render1()
                    this.render2()
                    this.render3()
                    this.renderGamming1()
                    this.renderGamming2()
                    this.renderGamming3()
                    this.renderGamming4()
                    this.renderTree1()
                    this.renderTree2()
                    this.renderTree3()
                    this.renderTree4()
                    this.renderMan1()
                    this.renderMan2()
                    this.renderMan3()
                    this.renderMan4()
                    this.renderKeybord1()
                    this.renderKeybord2()
                    this.renderKeybord3()
                    this.renderKeybord4()
                    this.renderHeadphone1()
                    this.renderHeadphone2()
                    this.renderHeadphone3()
                    this.renderHeadphone4()
                    this.renderAddress1()
                    this.renderAddress2()
                    this.renderAddress3()
                    this.renderAddress4()
                    this.renderAddress5()
                    this.renderAddress6()
                    this.renderAddress7()
                    this.renderAddress8()
                    this.renderAddress9()
                    this.renderAddress10()
                    this.renderAddress11()
                    this.renderAddress12()
                    this.renderAddress13()
                    this.renderAddress14()
                    this.renderAddress15()
                    this.renderAddress16()
                    this.renderAddress17()
                    this.renderAddress18()
                    this.renderFeedback1()
                    this.renderFeedback2()
                    this.renderFeedback3()
                    this.renderFeedback4()
                    this.renderContact1()
                    this.renderContact2()
                    this.renderContact3()
                    this.renderContact4()
                    this.renderContact5()
                    this.renderContact6()
                    this.renderHelp1()
                    this.renderHelp2()
                    this.renderHelp3()
                    this.renderHelp4()
                    
                    
                }
                
            }
            products.star()


