document.addEventListener('DOMContentLoaded', function () {
    const flipbookEl = document.getElementById('flipbook');
    // Thư viện có thể export dưới tên StPageFlip hoặc St
    const PageFlipClass = (typeof StPageFlip !== 'undefined') ? StPageFlip.PageFlip : (typeof St !== 'undefined' ? St.PageFlip : null);

    if (flipbookEl && PageFlipClass) {
        const innerCover = flipbookEl.querySelectorAll('.page-cover-inner')[0];

        let pagesHTML = '';

        // Dữ liệu 30 mốc thời gian - mỗi entry: [year, tên mốc, mô tả, ảnh]
        const milestones = [
            { year: "Ngày 10 tháng 4 năm 1997", milestone: "Ngày đầu thành lập", desc: "Ngày 10 tháng 4 năm 1997, thành lập Phòng Xuất nhập khẩu thuộc Công ty Điện tử Viễn thông Quân đội, với ngành nghề ban đầu là làm dịch vụ Xuất nhập khẩu ủy thác cho Công ty. Ngày 10 tháng 4 hàng năm trở thành ngày Truyền thống của Công ty Thương mại và Xuất nhập khẩu Viettel.", img: "assets/images/viettel-1997.jpg", caption: "Lễ thành lập Viettel, 1997" },
            { year: "Tháng 8 năm 1998", milestone: "Chi bộ Xuất nhập khẩu đầu tiên được thành lập", desc: "Thực hiện Chỉ thị số 8G3/A ngày 29 tháng 5 năm 1998 của Đảng ủy Binh chủng Thông tin liên lạc, ngày 14 tháng 8 năm 1998, Đảng ủy Công ty Điện tử Viễn thông Quân đội ra Nghị quyết số 21/NQ-ĐU về việc lãnh đạo chỉ đạo các đơn vị tiến hành đại hội tiến tới đại hội Đảng bộ Công ty lần thứ IV; trong Nghị quyết có nội dung kiện toàn, thành lập mới một số chi bộ cơ sở. Theo đó, Chi bộ Xuất nhập khẩu được thành lập (cùng Quyết định thành lập với Chi bộ Trung tâm Bưu chính); đồng thời chỉ định đồng chí Đỗ Ngọc Cường làm Bí thư chi bộ. Đồng chí Đỗ Ngọc Cường từng cho biết: “Trước đó, một số đảng viên thuộc phòng Xuất nhập khẩu vẫn sinh hoạt ghép với Chi bộ Trung tâm Thương mại và dịch vụ kỹ thuật; và tôi là Phó Bí thư. Chi bộ đầu tiên được thành lập là thể hiện sự quan tâm của Đảng ủy Công ty. Chi bộ lúc đó chỉ có 4 đảng viên. Nghị quyết chi bộ chưa được đánh máy như bây giờ, chỉ ghi chép trong sổ tay, vậy mà vẫn  đoàn kết thống nhất cao, triển khai lãnh đạo, chỉ đạo kịp thời và hoàn thành tốt mọi nhiệm vụ. Từ đó cho đến lúc tôi (Đại tá Đỗ Ngọc Cường) nghỉ hưu, chi bộ và sau này là Đảng bộ năm nào cũng đạt trong sạch vững mạnh”. Đó là dấu ấn đầu tiên về tổ chức Đảng đầu tiên của đơn vị, là tấm gương để Đảng ủy Tổng Công ty và đội ngũ đảng viên của Đảng bộ hôm nay cần phát huy và phát huy truyển thống truyền thống cha anh; luôn giữ gìn sự đoàn kết thống nhất trong Đảng; lãnh đạo đơn vị hoàn thành tốt mọi nhiệm vụ được giao.", img: "assets/images/2 - Sự kiện thứ 2 - Đại hội Chi bộ Trung tâm XNK lần thứ nhất.jpg", caption: "Đồng chí Hoàng Anh Xuân - Nguyên Tổng Giám đốc, đồng chí Dương Văn Tính - Nguyên Bí thư Đảng ủy, đồng chí Trần Văn Đại - Nguyên Chủ nhiệm Chính trị Tập đoàn chụp ảnh cùng đại biểu Đại hội chi bộ Trung tâm Xuất nhập khẩu lần thứ nhất năm 2002" },
            { year: "Ngày 30 tháng 6 năm 1999", milestone: "Mở rộng dịch vụ", desc: "Ngày 30 tháng 6 năm 1999, Phòng Xuất nhập khẩu phát triển thành Trung tâm Xuất nhập khẩu.", img: "assets/images/viettel-1997.jpg", caption: "Khai trương dịch vụ, 1999" },
            { year: "Tháng 3/2000", milestone: "Vươn tầm thế kỷ", desc: "4.	Tháng 3/2000 nhập khẩu lô hàng thiết bị đầu tin cho Viettel mở mạng.", img: "assets/images/viettel-1997.jpg", caption: "Kỷ nguyên mới, 2000" },
            { year: "Ngày 06 tháng 4 năm 2005", milestone: "Liên doanh quốc tế", desc: "5.	Ngày 06 tháng 4 năm 2005. Trung tâm Xuất nhập khẩu phát triển thành Công ty Thương mại và Xuất nhập khẩu (theo Quyết định số 45/2005/QĐ-BQP ngày 06 tháng 4 năm 2005 của Bộ Quốc phòng).", img: "assets/images/viettel-1997.jpg", caption: "Hợp tác quốc tế, 2001" },
            { year: "Năm 2006", milestone: "Đột phá di động", desc: "6.	Năm 2026 Công ty chính thức thực hiện chế độ doanh nghiệp nhà nước hạch toán độc lập, theo cơ chế thị trường.", img: "assets/images/viettel-1997.jpg", caption: "Ra mắt mạng di động, 2002" },
            { year: "Ngày 03 tháng 5 năm 2006", milestone: "Phủ sóng toàn quốc", desc: "7.	Ngày 03 tháng 5 năm 2006, khai trương Siêu thị VKO Ngọc Khánh, Ba Đình, Hà Nội, mở đầu cho phát triển chuỗi siêu thị bán lẻ sản phẩm điện thoại, máy tính, các thiết bị thông tin viễn thông.", img: "assets/images/7 - Nguyên Giám đốc Công ty Đỗ Ngọc Cường Khai trương siêu thị đầu tin.jpg", caption: "Khai trương siêu thị đầu tiên" },
            {
                year: "Tháng 12 năm 2006", milestone: "Hoàn thành Dự án lắp đặt hệ thống thiết bị mạng, hệ thống quản lý tòa nhà Khu Hội Nghị Quốc gia.", desc: "Có thể nói đây là dự án đầu tiên, lớn nhất tầm quốc gia do Công ty tự tìm kiếm và tổ chức thực hiện toàn trình; từ thiết kế, mua sắm thiết bị, tổ chức thi công, hoàn công, đưa vào vận hành và bảo hành. Để có được dự án, đồng chí Đỗ Ngọc Cường, Giám đốc Công ty và đồng chí Đặng Hồng Thái, Phó Giám đốc Công ty đã đến gặp trực tiếp Đại tướng Phạm Văn Trà, Bộ trưởng Bộ Quốc phòng khi đó, nhờ Đại tướng giúp đỡ giới thiệu để tham gia đấu thầu và đã thắng thầu. Dự án được triển khai từ tháng 7 năm 2005. Công ty đã thành lập Ban điều hành dự án do đồng chí Đỗ Ngọc Cường - Giám đốc Công ty làm Trưởng ban và đồng chí Đặng Hồng Thái - Phó giám đốc Công ty làm Phó ban, trực tiếp điều hành Ban Điều hành dự án đặt dưới sự chỉ đạo của Ban Giám đốc Tổng Công ty Viễn thông Quân đội mà trực tiếp là đồng chí Lê Đăng Dũng - Phó Tổng Giám đốc Tổng Công ty. Triển khai thực hiện dự án, Công ty Xuất nhập khẩu đã thành lập 03 tổ công tác: Tổ lắp đặt thiết bị, tổ kỹ thuật và tổ thương mại; đồng chí Nguyễn Xuân Du được giao trực tiếp giám sát, chỉ huy trên công trường. Cùng với việc tổ chức, bố trí nhân lực thi công lắp đặt hệ thống điện tử thông tin, hệ thống quản lý tòa nhà Công ty Hội nghị Quốc gia, Ban Giám đốc Công ty đã xây dựng kế hoạch cụ thể về khối lượng vật tư trang thiết bị kỹ thuật, huy động nguồn lực cán bộ quản lý, kỹ thuật điều hành quá trình thực hiện dự án; xác định lộ trình, thời gian, tiến độ thi công đáp ứng đúng yêu cầu của Bộ Xây dựng. Trong quá trình lắp đặt, được Tổng Bí thư Nông Đức Mạnh và các lãnh đạo Bộ, ngành đến thăm quan, động viên. Cuối năm 2006, Công ty đã hoàn thành dự án với tổng giá trị 100 tỷ đồng. Công trình được nghiệm thu toàn bộ, đáp ứng đúng tiến độ và các yêu cầu kỹ thuật của dự án, kịp thời phục vụ thành công Hội nghị APEC lần thứ 14 được tổ chức tại Việt Nam. Đồng chí Đỗ Ngọc Cường - Giám đốc Công ty, kiêm Trưởng ban Điều hành dự án được Thủ tướng Chính phủ tặng Bằng khen; đồng chí Đặng Hồng Thái, Phó Giám đốc Công ty, Phó Ban Điều hành dự án được Bộ Xây dựng và Bộ Ngoại giao tặng Bằng khen; nhiều tập thể và cá nhân Công ty được Bộ Xây dựng và Bộ Ngoại giao tặng Giấy khen",
                img: "assets/images/8- Đc Nguyễn Mạnh Hùng, Lê Đăng Dũng Nguyên Tổng Giám đốc tậ đoàn kiểm tra, chỉ đạo tại công trình TTHN Quốc gia.jpg", caption: "Đồng chí thiếu tướng Nguyễn Mạnh Hùng - Nguyên tổng giám đốc tập đoàn đến kiểm tra và chỉ đạo lắp đặt hệ thống điều khiển tòa nhà tại Trung tâm hội nghị Quốc gia"
            },
            { year: "Tháng 1 năm 2008", milestone: "Tiên phong 3G", desc: "9.	Tháng 1 năm 2008, chi bộ Xuất nhập khẩu phát triển thành Đảng bộ cơ sở 2 cấp.", img: "assets/images/viettel-1997.jpg", caption: "Nghiên cứu 3G, 2005" },
            { year: "Tháng 10  năm 2008", milestone: "Vươn ra thế giới", desc: "10.	Tháng 10  năm 2008, Tổng Công ty Viễn thông Quân đội điều chuyển 68 siêu thị từ Công ty Viễn thông Viettel sang Công ty Thương mại và Xuất nhập khẩu Viettel.", img: "assets/images/viettel-1997.jpg", caption: "Hành trình quốc tế, 2006" },
            { year: "Ngày 01 tháng 11 năm 2008", milestone: "Đại hội Đảng bộ Công ty Lần thứ nhất nhiệm kỳ (2008-2010)", desc: "Đại tá Nguyễn Văn Thanh còn nhớ: kỳ đại hội năm ấy tôi được phân công cùng anh Trần Văn Đãi, Chủ nhiệm Chính trị Tổng Công ty xuống dự. Đại hội được tổ chức long trọng tại Hội trường Lữ đoàn 205 Binh chủng Thông tin Liên lạc. Trong tiết trời se se lạnh của đợt gió heo may đầu mùa, hội trường được trang hoàng rực rỡ, đúng nghi thức, các đại biểu nữ mặc áo dài; đại biểu nam mặc comle, cùng với mở màn là những tiết mục văn nghệ đặc sắc càng tôn vẻ trang nghiêm, hoành tráng của Đại hội. Đây là Đại hội toàn thể vì toàn Đảng bộ lúc đó chỉ có 40 đảng viên, trong đó có 37 đảng viên chính thức và 3 đảng viên dự bị. 100% đảng viên có mặt tại Đại hội.Đại hội khẳng định: Trong khoảng thời gian từ năm 2005 đến 2008, đặc điểm nổi bật của Công ty là có sự thay đổi lớn về nhiệm vụ, quy mô tổ chức, lực lượng, khó khăn, tiềm ẩn nhiều nguy cơ… song, Đảng bộ đã lãnh đạo đơn vị thực hiện thắng lợi các chỉ tiêu, nhiệm vụ mà Đảng ủy, Ban Giám đốc Tổng Công ty giao; xây dựng đơn vị vững mạnh về chính trị, tư tưởng và tổ chức; Công ty trưởng thành toàn diện. Công ty hoàn thành vượt mức các chỉ tiêu kế hoạch sản xuất kinh doanh, doanh thu có sự tăng trưởng đột biến (năm sau gấp đôi năm trước). Công ty đã tham gia nhiều dự án lớn có tầm quốc gia đòi hỏi chuyên môn kỹ thuật cao; thực hiện tốt nhiệm vụ xuất nhập khẩu ủy thác quốc phòng và Tổng Công ty với khối lượng lớn (năm sau gấp đôi năm trước), bảo đảm an toàn, đồng bộ... Đặc biệt về phương hướng nhiệm vụ lãnh đạo của Đảng bộ đến năm 2010, Đại hội xác định 5 mục tiêu, trong đó mục tiêu đầu tiên là “Phát triển Công ty theo mô hình các Công ty kinh doanh tự hoạch toán, lấy kinh doanh điện thoại di động và xuất nhập khẩu làm chủ đạo”. Đây là Đại hội cấp Đảng bộ Công ty đầu tiên, một dấu ấn lịch sử quan trọng trên con đường xây dựng và phát triển của Tổng Công ty Thương mại và Xuất nhập khẩu Viettel.  ", img: "assets/images/11. Đc Trần Văn Đải nguyên Chủ nhiệm Chính trị Tập đoàn Chụp ảnh cùng BCH Đảng bộ Công ty lần thứ nhất .jpg", caption: "Đồng chí Trần Văn Đại - Chủ nhiệm Chính trị Tập đoàn (Đứng giữa) chụp ảnh cùng Ban chấp hành Đảng bộ tại đại hội lần thứ nhất" },
            { year: "Ngày 21 tháng 1 năm 2009", milestone: "Giải thưởng quốc tế", desc: "12.	Ngày 21 tháng 1 năm 2009, Công ty tổ chức lại Trung tâm Kinh doanh Điện thoại di động, thành lập Trung tâm Bán lẻ Viettel.", img: "assets/images/viettel-1997.jpg", caption: "Nhận giải quốc tế, 2008" },
            { year: "Ngày 21 tháng 1 năm 2009", milestone: "Ra mắt 3G chính thức", desc: "13.	Ngày 21 tháng 1 năm 2009, tổ chức lại Phòng Nghiệp vụ Xuất nhập khẩu, thành lập Trung tâm Trung tâm Xuất nhập khẩu viễn thông", img: "assets/images/viettel-1997.jpg", caption: "Ra mắt 3G, 2009" },
            { year: "Ngày 1 tháng 5 năm 2010", milestone: "Số 1 Việt Nam", desc: "14.	Ngày 1 tháng 5 năm 2010, Công ty nhận chuyển nguyên trạng bộ phận giao dịch từ 107 siêu thị tại các chi nhánh Viettel tỉnh, thành phố thuộc Tổng Công ty Viễn thông Viettel chính thức kinh doanh dịch vụ viễn thông cho Tập đoàn.", img: "assets/images/viettel-1997.jpg", caption: "Mạng di động số 1, 2010" },
            { year: "Ngày 24 tháng 5 năm 2010", milestone: "Đầu tư châu Phi", desc: "15.	Ngày 24 tháng 5 năm 2010, Thành lập Trung tâm Phân phối.", img: "assets/images/viettel-1997.jpg", caption: "Khai trương tại châu Phi, 2011" },
            { year: "Ngày 25 và 26 tháng 6 năm 2010", milestone: "Đổi mới sáng tạo", desc: "16.	Ngày 25 và 26 tháng 6 năm 2010, Đảng bộ Công ty Thương mại và Xuất nhập khẩu Viettel tiến hành Đại hội lần thứ 2, nhiệm kỳ 2010-2015.", img: "assets/images/viettel-1997.jpg", caption: "Viện R&D ra đời, 2012" },
            { year: "Năm 2012", milestone: "Giải pháp chính phủ số", desc: "17.	Năm 2012, Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Ba", img: "assets/images/viettel-1997.jpg", caption: "Chính phủ điện tử, 2013" },
            { year: "Tháng 01 năm 2013", milestone: "100 triệu thuê bao", desc: "18.	Tháng 01 năm 2013, sáp nhập Công ty Phát triển dịch vụ mới vào Công ty Thương mại và Xuất nhập khẩu Viettel.", img: "assets/images/viettel-1997.jpg", caption: "100 triệu thuê bao, 2014" },
            { year: "Tháng 6 năm 2014", milestone: "Triển khai 4G", desc: "19. Tháng 6 năm 2014, tiếp nhận và tổ chức sản xuất kinh doanh ngành in. ", img: "assets/images/viettel-1997.jpg", caption: "Thử nghiệm 4G, 2015" },
            { year: "Ngày 28 tháng 4 năm 2015", milestone: "Thương hiệu toàn cầu", desc: "20. Ngày 28 tháng 4 năm 2015, Đại hội đại biểu Đảng bộ Công ty lần thứ III nhiệm kỳ 2015-2020.", img: "assets/images/viettel-1997.jpg", caption: "Top 500 thương hiệu toàn cầu, 2016" },
            { year: "Năm 2017", milestone: "Ra mắt 4G thương mại", desc: "21.	Năm 2017, Công ty được Đảng, Nhà nước trao tặng Huân chương lao động Hạng Nhì.", img: "assets/images/viettel-1997.jpg", caption: "Phủ sóng 4G toàn quốc, 2017" },
            { year: "Ngày 28 và 29 tháng 5 năm 2020", milestone: "Chuyển đổi số", desc: "22.	 Ngày 28 và 29 tháng 5 năm 2020, Đại hội đại biểu Đảng bộ Công ty lần thứ IV, nhiệm kỳ 2020 - 2025.", img: "assets/images/viettel-1997.jpg", caption: "Viettel Digital, 2018" },
            { year: "Ngày 12 tháng 8 năm 2020", milestone: "Tiên phong 5G", desc: "23.	Ngày 12 tháng 8 năm 2020, thành lập Trung tâm Dịch vụ Công nghệ thông tin.", img: "assets/images/viettel-1997.jpg", caption: "Thử nghiệm 5G, 2019" },
            { year: 2020, milestone: "Vượt qua đại dịch", desc: "24. Nhận diện thương hiệu của Công ty.", img: "assets/images/viettel-1997.jpg", caption: "Vững vàng mùa dịch, 2020" },
            { year: "Năm 2022", milestone: "Thương mại hóa 5G", desc: "25. Năm 2022, Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Nhất.", img: "assets/images/viettel-1997.jpg", caption: "5G thương mại hóa, 2021" },
            { year: 2022, milestone: "Hệ sinh thái số", desc: "26.	Vượt bão Covid19", img: "assets/images/viettel-1997.jpg", caption: "Hệ sinh thái số VCM, 2022" },
            { year: "Năm 2023 - 2025", milestone: "Xuất khẩu công nghệ", desc: "27.	Doanh thu tỷ đô, nằm trop top 500 doang nghiệp lớn nhất Việt Nam, Ba năm liên tiếp (2023–2025) được Anphabe vinh danh là...", img: "assets / images / viettel - 1997.jpg", caption: "Xuất khẩu công nghệ, 2023" },
            { year: 2024, milestone: "AI & Dữ liệu lớn", desc: "28.	Tổ chức thành công Đại hội Đảng bộ Tổng Công ty nhiệm kỳ 2025–2030.", img: "assets/images/viettel-1997.jpg", caption: "AI & Big Data, 2024" },
            { year: 2025, milestone: "Khởi đầu thập kỷ mới", desc: "29.	Chuyển đổi mô hình thành Tổng Công ty TM&XNK Viettel.", img: "assets/images/viettel-1997.jpg", caption: "Thập kỷ tăng trưởng, 2025" },
            { year: 2026, milestone: "Đổi mới không ngừng", desc: "30.	Đón nhận Huân chương Bảo vệ Tổ quốc hạng Nhất.", img: "assets/images/viettel-1997.jpg", caption: "Đổi mới không ngừng, 2026" },
            { year: 2027, milestone: "30 năm tự hào", desc: "Kỷ niệm 30 năm thành lập – 30 năm vững bước tiên phong, kiến tạo tương lai số cho Việt Nam và thế giới.", img: "assets/images/viettel-1997.jpg", caption: "30 năm vững bước tiên phong" },
        ];

        // Trang mở đầu - Lời giới thiệu
        pagesHTML += `
            <div class="page scrapbook-left">
                <div class="page-content">
                    <div class="scrapbook-year" style="font-size:3.5rem;">HÀNH TRÌNH</div>
                    <div class="scrapbook-year" style="font-size:6rem; margin-top:-10px;">30</div>
                    <div class="scrapbook-milestone">Năm vững bước tiên phong</div>
                    <div class="scrapbook-divider"></div>
                    <p class="scrapbook-desc">Từ những ngày đầu gian khó cho đến hôm nay, mỗi trang sách là một dấu ấn, một câu chuyện, một chặng đường đáng nhớ trong hành trình 30 năm của chúng tôi.</p>
                </div>
            </div>
        `;

        // Tạo cặp trang cho từng mốc thời gian
        milestones.forEach((m, i) => {
            // Xoay ảnh ngẫu nhiên nhẹ để tạo cảm giác dán tự nhiên
            const rotations = [-2.5, 1.8, -1.2, 2.1, -3.0, 1.5, -0.8, 2.8, -1.7, 1.1];
            const rot = rotations[i % rotations.length];

            // Trang TRÁI - Mô tả dạng nhật ký
            pagesHTML += `
                <div class="page scrapbook-left">
                    <div class="page-content">
                        <div class="scrapbook-year">${m.year}</div>
                        <div class="scrapbook-milestone">${m.milestone}</div>
                        <div class="scrapbook-divider"></div>
                        <p class="scrapbook-desc">${m.desc}</p>
                    </div>
                    <div class="page-number">${i * 2 + 1}</div>
                </div>
            `;

            // Trang PHẢI - 1 ảnh dán kiểu scrapbook
            pagesHTML += `
                <div class="page scrapbook-right">
                    <div class="page-content">
                        <div class="scrapbook-photo-wrapper" style="transform: rotate(${rot}deg); max-width: 85%; max-height: 75%;">
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <img src="${m.img}" alt="${m.year}">
                        </div>
                        <p class="scrapbook-caption">${m.caption}</p>
                    </div>
                    <div class="page-number">${i * 2 + 2}</div>
                </div>
            `;
        });

        // Trang đệm cuối để tổng số trang là SỐ CHẴN (bìa sau đúng vị trí)
        pagesHTML += `
            <div class="page scrapbook-left">
                <div class="page-content">
                    <div class="scrapbook-year" style="font-size:3rem;">VIETTEL</div>
                    <div class="scrapbook-milestone">Theo cách của bạn</div>
                    <div class="scrapbook-divider"></div>
                    <p class="scrapbook-desc">Cảm ơn bạn đã đồng hành cùng chúng tôi suốt hành trình 30 năm ý nghĩa này.</p>
                </div>
            </div>
        `;
        innerCover.insertAdjacentHTML('afterend', pagesHTML);

        const pageFlip = new PageFlipClass(flipbookEl, {
            width: 550,
            height: 733,
            size: "stretch",
            minWidth: 300,
            maxWidth: 550,
            minHeight: 400,
            maxHeight: 700,
            maxShadowOpacity: 0.02,
            showCover: true,
            usePortrait: true,
            mobileScrollSupport: false,
            flippingTime: 700
        });

        // Nạp các trang HTML vào thư viện
        pageFlip.loadFromHTML(document.querySelectorAll('.page'));

        // ==========================================
        // TÍNH NĂNG CINEMATIC CAMERA (TRƯỢT KHUNG ĐỒNG THỜI)
        // ==========================================
        let predictedTarget = null;

        function getShiftAmount() {
            const wrapper = document.querySelector('.stf__wrapper');
            return wrapper ? wrapper.offsetWidth / 4 : 0;
        }

        // 1. Phân tích tọa độ Click của người dùng để "tiên tri" hướng lật sách trước khi ảnh ảo bắt đầu bay
        const flipContainer = document.querySelector('.container-flipbook');
        flipContainer.addEventListener('pointerdown', (e) => {
            const pageIndex = pageFlip.getCurrentPageIndex();
            const rect = flipContainer.getBoundingClientRect();
            const isClickLeft = (e.clientX - rect.left) < (rect.width / 2);

            if (pageIndex === 0) {
                predictedTarget = 'center'; // Đang ở bìa trước, chắc chắn là mở ra giữa
            } else if (pageIndex >= pageFlip.getPageCount() - 1) {
                predictedTarget = 'center'; // Đang ở bìa sau, chắc chắn là mở ra giữa
            } else if (pageIndex <= 2 && isClickLeft) {
                predictedTarget = 'left'; // Đang ở trang đầu, bấm bên trái -> Gập lại thành bìa trước
            } else if (pageIndex >= pageFlip.getPageCount() - 3 && !isClickLeft) {
                predictedTarget = 'right'; // Đang ở trang cuối, bấm bên phải -> Gập lại thành bìa sau
            } else {
                predictedTarget = 'center'; // Đang ở lơ lửng giữa sách
            }
        });

        // 2. Kích hoạt trượt Camera NGAY LẬP TỨC khi trạng thái sách chuyển sang "Đang bị giữ" hoặc "Đang lật"
        pageFlip.on('changeState', (e) => {
            const state = e.data; // "user_fold", "fold_corner", "flipping", "read"
            const container = document.querySelector('.container-flipbook');
            const shiftAmount = getShiftAmount();

            if (pageFlip.getOrientation() === 'portrait') {
                container.style.transform = `translateX(0px)`;
                return;
            }

            // Kích hoạt TRƯỢT ĐỒNG THỜI ngay tích tắc người dùng chạm tay vào góc giấy
            if (state === 'user_fold' || state === 'fold_corner' || state === 'flipping') {
                if (predictedTarget === 'center') {
                    container.style.transform = `translateX(0px)`;
                } else if (predictedTarget === 'left') {
                    container.style.transform = `translateX(-${shiftAmount}px)`;
                } else if (predictedTarget === 'right') {
                    container.style.transform = `translateX(${shiftAmount}px)`;
                }
            }

            // Bước kiểm tra an toàn: Đề phòng người dùng giữ giấy nhưng lại đổi ý không lật nữa
            if (state === 'read') {
                const actualPage = pageFlip.getCurrentPageIndex();
                if (actualPage === 0) {
                    container.style.transform = `translateX(-${shiftAmount}px)`;
                } else if (actualPage >= pageFlip.getPageCount() - 1) {
                    container.style.transform = `translateX(${shiftAmount}px)`;
                } else {
                    container.style.transform = `translateX(0px)`;
                }
            }
        });

        // Tự động căn lại khi thu phóng trình duyệt
        window.addEventListener('resize', () => {
            setTimeout(() => {
                // Tái giả lập state 'read' để cập nhật tọa độ
                pageFlip.turnToPage(pageFlip.getCurrentPageIndex());
            }, 100);
        });

        // Khởi tạo tọa độ camera ngay lúc nạp xong
        setTimeout(() => {
            const shiftAmount = getShiftAmount();
            document.querySelector('.container-flipbook').style.transform = `translateX(-${shiftAmount}px)`;
        }, 50);

        // ==========================================
        // ÁNH SÁNG & BÓNG ĐỔ TƯƠNG TÁC THEO CHUỘT (2.5D LIGHTING)
        // ==========================================
        document.addEventListener('mousemove', (e) => {
            // Tính toán phần trăm tọa độ chuột trên màn hình (0.0 đến 1.0)
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            // Cập nhật CSS Variables
            document.documentElement.style.setProperty('--mouse-x', mouseX);
            document.documentElement.style.setProperty('--mouse-y', mouseY);
        });

    } else {
        console.error("Lỗi: Không tìm thấy thư viện StPageFlip hoặc thẻ #flipbook.");
    }
});
