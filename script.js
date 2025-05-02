document.addEventListener('DOMContentLoaded', function() {
    try {
        // Продукты и рендеринг
        const products = {
            microphones: [
                { name: "Zitmix RDX-213", img: "images/mic_four.jpeg", db: "-58 dB", freq: "50 Hz to 16000 Hz", price: "200$" },
                { name: "Yhure YV200", img: "images/mic_thirst.jpeg", db: "-38 dB", freq: "50 Hz to 12000 Hz", price: "300$" },
                { name: "Riero Voice", img: "images/mic_second.jpeg", db: "-52 dB", freq: "50 Hz to 12000 Hz", price: "400$" },
                { name: "Qorgar Ioner 313", img: "images/mic_first.jpeg", db: "-50 dB", freq: "50 Hz to 11000 Hz", price: "500$" },
                { name: "BOZA BY-M3", img: "images/mic_five.jpeg", db: "-23 dB", freq: "50 Hz to 8000 Hz", price: "600$" },
                { name: "Pline Gtarvox", img: "images/mic_six.jpeg", db: "-31 dB", freq: "50 Hz to 11000 Hz", price: "700$" },
                { name: "Dakstar DGC-692", img: "images/mic_seven.jpeg", db: "-92 dB", freq: "50 Hz to 48000 Hz", price: "900$" },
                { name: "Paono DPM20S", img: "images/mic_eight.jpeg", db: "-20 dB", freq: "50 Hz to 92000 Hz", price: "800$" }
            ],
            subwoofer: [
                { name: "BassHammer BX-15", img: "images/sabvufer_first.jpeg", db: "800W RMS", freq: "30 Hz to 200 Hz", price: "120$" },
                { name: "DeepPulse SUB-12", img: "images/sabvufer_second.jpeg", db: "500W RMS", freq: "35 Hz to 250 Hz", price: "90$" },
                { name: "MegaBass XT-18", img: "images/sabvufer_thirst.jpeg", db: "1000W RMS", freq: "25 Hz - 180 Hz", price: "150$" },
                { name: "LowEnd Pro 15", img: "images/sabvufer_four.jpeg", db: "700W RMS", freq: "32 Hz - 220 Hz", price: "110$" },
                { name: "EarthQuake SUB-X", img: "images/sabvufer_five.jpeg", db: "600W RMS", freq: "28 Hz - 190 Hz", price: "95$" },
                { name: "Pline Gtarvox", img: "images/sabvufer_six.jpeg", db: "-31 dB", freq: "50 Hz to 11000 Hz", price: "700$" },
                { name: "BassMonster Dual", img: "images/sabvufer_seven.jpeg", db: "1200W RMS", freq: "20 Hz - 160 Hz", price: "180$" },
                { name: "PowerLow 215", img: "images/sabvufer_eight.jpeg", db: "900W RMS", freq: "30 Hz - 210 Hz", price: "130$" }
            ],
            mixing_console: [
                { name: "MixMaster Pro-16", img: "images/mixpult_first.jpeg", db: "16 channel", freq: "3-band", price: "150$" },
                { name: "AudioFusion FX-8", img: "images/mixpult_second.jpeg", db: "8 channel", freq: "3-band effects", price: "110$" },
                { name: "DynaMix 24", img: "images/mixpult_thirst.jpeg", db: "24 channel", freq: "4-band", price: "220$" },
                { name: "Podium X12", img: "images/audiocart_four.jpeg", db: "12 channel", freq: "3-band", price: "180$" },
                { name: "StageConsole Mini", img: "images/audiocart_five.jpeg", db: "6 channel", freq: "2-band", price: "80$" },
                { name: "ProLine 32", img: "images/audiocart_six.jpeg", db: "32 channel", freq: "4-band analyzer", price: "350$" },
                { name: "ClubMix D-10", img: "images/audiocart_seven.jpeg", db: "10 channel", freq: "3-band digital", price: "140$" },
                { name: "MobileMix 4", img: "images/audiocart_eight.jpeg", db: "4 channel", freq: "2-band simple", price: "60$" }
            ],
            sound_cards: [
                { name: "WaveCraft Ultra 24", img: "images/audiocart_four.jpeg", db: "24-bit/192kHz", freq: "8 inputs", price: "85$" },
                { name: "SonicLink Pro 2", img: "images/audiocart_five.jpeg", db: "24-bit/96kHz", freq: "4 inputs", price: "65$" },
                { name: "AudioX PCIe", img: "images/audiocart_six.jpeg", db: "24-bit/192kHz", freq: "12 inputs", price: "120$" },
                { name: "PortaSound USB", img: "images/audiocart_seven.jpeg", db: "24-bit/96kHz", freq: "2 inputs", price: "50$" },
                { name: "ProRecord HD", img: "images/audiocart_eight.jpeg", db: "32-bit/384kHz", freq: "16 inputs", price: "200$" },
                { name: "MobileTrack 2", img: "images/audiocart_thirst.jpeg", db: "24-bit/48kHz", freq: "2 inputs", price: "40$" },
                { name: "WaveCraft Ultra 24", img: "images/audiocart_first.jpeg", db: "24-bit/192kHz", freq: "8 inputs", price: "85$" },
                { name: "SonicLink Pro 2", img: "images/audiocart_second.jpeg", db: "24-bit/96kHz", freq: "4 inputs", price: "65$" }
            ]
        };

        function renderProducts(category) {
            const container = document.getElementById('products-container');
            if (!container) return;

            container.classList.remove('show');

            setTimeout(() => {
                container.innerHTML = '';

                products[category]?.forEach((product, index) => {
                    const productHTML = `
            <div class="price-first" style="animation-delay: ${index * 0.1}s">
              <img class="equipment-img" src="${product.img}" alt="${product.name}" loading="lazy">
              <h3>${product.name}</h3>
              <div class="info-specifications">
                ${product.db ? `<div class="info-specifications_txt">
                  <img src="images/microphone.svg" alt="spec">${product.db}
                </div>` : ''}
                <div class="info-specifications_txt">
                  <img src="images/two_microphone.svg" alt="spec">${product.freq || product.power || product.resolution}
                </div>
              </div>
              <div class="equipment-line"></div>
              <div class="block-order">
                <a href="index.html#contact"><button class="block-order__btn">Rent</button></a>
                <p>${product.price}</p>
              </div>
            </div>
          `;
                    container.innerHTML += productHTML;
                });

                setTimeout(() => container.classList.add('show'), 50);
            }, 300);
        }

        // Инициализация категорий
        document.querySelectorAll('.category-equipment-block__first').forEach((el, index) => {
            el.addEventListener('click', () => {
                const category = Object.keys(products)[index];
                if (category) renderProducts(category);
            });
        });

        if (!window.location.hash && document.getElementById('products-container')) {
            renderProducts('microphones');
        }

        // Слайдер
        const sliderData = [
            { img: "images/discount.jpeg", title: "Regular customers", text: "30% discount for our regular customers." },
            { img: "images/discount2.jpeg", title: "Loyalty Program", text: "Get extra 10% discount for 3+ equipment rentals." },
            { img: "images/discount3.jpeg", title: "Sound Engineer Hotline", text: "Free audio setup support during your entire event." },
            { img: "images/discount4.jpeg", title: "New Customer Offer", text: "First rental 20% off for new customers." },
            { img: "images/discount5.jpeg", title: "Bundle Deal", text: "Rent 3 items and get the cheapest one free." }
        ];

        const slider = {
            img: document.querySelector('.sell-block__main-img'),
            title: document.querySelector('.sell-block__main-right__text h2'),
            text: document.querySelector('.sell-block__main-right__text p'),
            prevBtn: document.querySelector('.sell-block__arrow-lr:nth-child(1)'),
            nextBtn: document.querySelector('.sell-block__arrow-lr:nth-child(2)'),
            currentNum: document.querySelector('.number-sell-first'),
            totalNum: document.querySelector('.number-sell-second')
        };

        if (slider.img && slider.title && slider.text) {
            let currentSlide = 0;

            function updateSlider() {
                const slide = sliderData[currentSlide];
                slider.img.src = slide.img;
                slider.img.alt = slide.title;
                slider.title.textContent = slide.title;
                slider.text.textContent = slide.text;
                if (slider.currentNum) slider.currentNum.textContent = currentSlide + 1;
            }

            if (slider.totalNum) slider.totalNum.textContent = `/${sliderData.length}`;
            updateSlider();

            if (slider.prevBtn) slider.prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
                updateSlider();
            });

            if (slider.nextBtn) slider.nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % sliderData.length;
                updateSlider();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft' && slider.prevBtn) slider.prevBtn.click();
                if (e.key === 'ArrowRight' && slider.nextBtn) slider.nextBtn.click();
            });
        }

        //Навигация и хедер
        const introElements = [
            '.intro', '.intro_1', '.intro_2', '.intro_3', '.intro_4'
        ].map(selector => document.querySelector(selector)).filter(Boolean);

        if (introElements.length > 0) {
            let lastScroll = 0;
            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;

                if (currentScroll <= 0) {
                    introElements.forEach(el => el.classList.remove('header--hidden'));
                    return;
                }

                if (currentScroll > lastScroll) {
                    introElements.forEach(el => el.classList.add('header--hidden'));
                } else {
                    introElements.forEach(el => el.classList.remove('header--hidden'));
                }

                lastScroll = currentScroll;
            });
        }

        //Бургер-меню
        const burgerCheckbox = document.getElementById('burger-checkbox');
        const body = document.body;

        if (burgerCheckbox) {
            burgerCheckbox.addEventListener('change', function() {
                body.classList.toggle('menu-open', this.checked);
            });

            document.querySelectorAll('.close-menu').forEach(item => {
                item.addEventListener('click', function() {
                    burgerCheckbox.checked = false;
                    body.classList.remove('menu-open');
                });
            });
        }

        //Якорные ссылки
        if (window.location.pathname.endsWith('index.html')) {
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.classList.contains('close-menu')) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            if (burgerCheckbox) {
                                burgerCheckbox.checked = false;
                                body.classList.remove('menu-open');
                            }
                            setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
                        }
                    }
                });
            });
        }

        // Телефонные кнопки
        document.querySelectorAll('.apply-button').forEach(btn => {
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                const link = document.createElement('a');
                link.href = 'tel:+918966464839';
                link.className = btn.className;
                link.innerHTML = btn.innerHTML;
                btn.parentNode.replaceChild(link, btn);
            } else {
                btn.addEventListener('click', () => {
                    window.open('tel:+918966464839', '_self');
                });
            }
        });

    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
});