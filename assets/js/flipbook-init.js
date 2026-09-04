document.addEventListener('DOMContentLoaded', function () {
    const flipbookEl = document.getElementById('flipbook');
    // Thư viện có thể export dưới tên StPageFlip hoặc St
    const PageFlipClass = (typeof StPageFlip !== 'undefined') ? StPageFlip.PageFlip : (typeof St !== 'undefined' ? St.PageFlip : null);

    if (flipbookEl && PageFlipClass) {
        const innerCover = flipbookEl.querySelectorAll('.page-cover-inner')[0];

        let pagesHTML = '';

        // Dữ liệu 30 mốc thời gian - mỗi entry: [year, tên mốc, mô tả, ảnh]
        const milestones = [
            {
                year: "Ngày 10 tháng 4 năm 1997", milestone: "Lịch sử Viettel Commerce bắt đầu", desc: `Đó là ngày thành lập Phòng Xuất nhập khẩu thuộc Công ty Điện tử Viễn thông Quân đội, Với ngành nghề ban đầu là làm dịch vụ Xuất nhập khẩu ủy thác cho Công ty Điện tử Viễn thông Quân đội. Ngày 10 tháng 4 hàng năm trở thành ngày Truyền thống của Tổng Công ty Thương mại và Xuất nhập khẩu Viettel sau này.
Lịch sử Viettel ghi lại, nhiều năm sau ngày thành lập (01/6/1989), Công ty Điện tử Viễn thông Quân đội vẫn trong tình trạng “đi làm thuê”, tìm kiếm các hợp đồng để ký kết, xây dựng các công trình, hạ tầng viễn thông cho các đối tác. Sáu năm sau thời gian đi “làm thuê” tích lũy kinh nghiệm và ấp ủ “ước mơ”; ngày 13/6/1995 đã trở thành một dấu mốc mang tính bước ngoặt trong lịch sử Viettel. Thực hiện Quyết nghị của Thường trực Bộ Chính trị, đồng chí Trần Đức Lương, Phó Thủ tướng Chính phủ đã ký quyết định thành lập Công ty Điện tử Viễn thông Quân đội (trên cơ sở Công ty Điện tử Thiết bị Thông tin-Sigelco). Với ngành nghề mới được bổ sung là kinh doanh dịch vụ bưu chính viễn thông trong nước và quốc tế. Sigeleco đã vượt qua hàng rào cản trở độc quyền, tiến hành lập đề án về kinh doanh viễn thông. Đại tá Phạm Ngọc Điệp, nguyên Giám đốc Công ty Sigelco (1993-1995) cho biết: Trong đề xuất cấp giấy phép kinh doanh bưu chính viễn thông, Ban Lãnh đạo Công ty đã giải quyết được 02 vấn đề rất mấu chốt, rất căn bản, có tính chiến lược lâu dài: “Thứ nhất, xin được giấy phép cho Công ty được kinh doanh dịch vụ bưu chính viễn thông cả trong nước và quốc tế. Thứ hai, đặt tên mới cho công ty có thêm chữ “viễn thông”, gọi tắt  là “VIETEL” (lúc này trong chữ Vietel chỉ có 01 chữ T, đến năm 2003 mới bổ sung thành Viettel). Lúc này, Công ty đã có tầm nhìn chiến lược lâu dài, cả trong nước và đối ngoại, hội nhập quốc tế. 
Ngày 20 tháng 10 năm 1995, Ủy ban Kế hoạch Hà Nội cấp giấy kinh doanh số 109822 cho Công ty Điện tử Viễn thông Quân đội với ngành nghề kinh doanh “xuất nhập khẩu các sản phẩm thiết bị thông tin, xây lắp các công trình thiết bị thông tin, đường dây tải điện, trạm biến thế, lắp ráp các thiết bị điện tử, hoạt động kinh doanh các loại dịch vụ bưu chính viễn thông trong nước và nước ngoài”. Nội dung giấy phép kinh doanh, có thể thấy lúc này Công ty chú trọng nhiệm vụ Xuất nhập khẩu. Để kiện toàn Ban lãnh đạo Công ty Điện tử Viễn thông Quân đội, ĐUQSTW (nay là Quân ủy Trung ương) - Bộ Quốc phòng quyết định điều động, bổ nhiệm kiện toàn Ban Giám đốc Công ty và các đơn vị trực thuộc. Các đồng chí: Đàm Rơi - Phó Tư lệnh Binh chủng Thông tin làm Giám đốc Công ty, đồng chí Phạm Ngọc Điệp làm Phó Giám đốc Công ty; các đồng chí: Nguyễn Tiến Mỹ và Bùi Mạnh Hồng làm Quyền Phó Giám đốc Công ty. Quyết định thành lập Xí nghiệp Khảo sát thiết kế và Xí nghiệp Xây lắp công trình trực thuộc Công ty; các phòng, ban và các trưởng phòng, ban của Công ty; Trong đó có Phòng Kinh doanh. Từ đó dịch vụ xuất nhập khẩu liên tục phát triên, trở thành một ngành kinh doanh chính và có triển vọng lâu dài của Công ty, trước hết là nhập khẩu các máy móc, thiết bị phục vụ các hợp đồng xây dựng các công trình thông tin cho Bộ Tư lệnh Thông tin liên lạc. Năm 1997 đứng trước nhu cầu phát triển, Phòng Kinh doanh Công ty Điện tử Viễn thông Quân đội được tách thành 02 bộ phận riêng biệt là Phòng Xuất nhập khẩu và Trung tâm kinh doanh thương mại và Dịch vụ kỹ thuật. Tiến sỹ, Trung tá Hồ Công Việt, Nguyên giáo viên Trường Sỹ quan Chỉ huy kỹ thuật thông tin, về Viettel năm 1995, Trưởng Phòng Xuất nhập khẩu đầu khi thành lập đã bồi hồi nhớ lại: “Là người sỹ quan, cán bộ đảng viên cấp trên giao thì chấp hành thôi, nhưng cũng trăn trở lắm vì lực lượng mỏng, kinh nghiệm ít”, Còn Đại tá Đỗ Ngọc Cường khi còn sống từng hồi tưởng: “lúc mới thành lập, Phòng  chỉ có 7 người, 4 người bộ phận xuất nhập khẩu gồm anh Hồ Công Việt, tôi, Nguyễn Thị Minh Nguyệt và Lê Phú Lâm; bộ phận Radio Trunking có 3 người là đồng chí Tống Viết Trung, đồng chí Đỗ Minh Phương và anh Bùi Ánh Quang. Đến tháng 11 năm 1997 thì bộ phận Radio Trunking cũng sáp nhập về Trung tâm Thương mại và Dịch vụ kỹ thuật. Do nhu cầu nhập khẩu máy móc thiết bị cho binh chủng tăng lên, cần thiết phải có một bộ phận chuyên về xuất nhập khẩu; là một bộ phận độc lập tách rời; đó là một trọng trách mà Binh chủng và Công ty giao cho. Lúc ấy thì tôi nghĩ Phòng sẽ phát triển; song cũng không nghĩ Phòng Xuất nhập khẩu năm ấy lại lớn mạnh như bây giờ”.     
`, images: [
                    { src: "assets/images/viettel-1997.jpg", caption: "Lễ thành lập Viettel, 1997" },
                    { src: "assets/images/8 - Sk 8Nguyên Tổng Giám đốc Nguyễn Mạnh Hùng; Lê Đăng Dũng (Khí đó là Phó Tổng Giám đốc Tập đoàn đến thăm, kiểm tra Công trường TTHGQG.jpg", caption: "Lễ thành lập Viettel, 1997" },
                ]
            },
            { year: "Tháng 8 năm 1998", milestone: "Chi bộ Xuất nhập khẩu đầu tiên được thành lập", desc: `Thực hiện Chỉ thị số 8G3/A ngày 29 tháng 5 năm 1998 của Đảng ủy Binh chủng Thông tin liên lạc, ngày 14 tháng 8 năm 1998, Đảng ủy Công ty Điện tử Viễn thông Quân đội ra Nghị quyết số 21/NQ-ĐU về việc lãnh đạo chỉ đạo các đơn vị tiến hành đại hội tiến tới đại hội Đảng bộ Công ty lần thứ IV; trong Nghị quyết có nội dung kiện toàn, thành lập mới một số chi bộ cơ sở. Theo đó, Chi bộ Xuất nhập khẩu được thành lập (cùng Quyết định thành lập với Chi bộ Trung tâm Bưu chính); đồng thời chỉ định đồng chí Đỗ Ngọc Cường làm Bí thư chi bộ. Đồng chí Đỗ Ngọc Cường từng cho biết: “Trước đó, một số đảng viên thuộc phòng Xuất nhập khẩu vẫn sinh hoạt ghép với Chi bộ Trung tâm Thương mại và dịch vụ kỹ thuật; và tôi là Phó Bí thư. Chi bộ đầu tiên được thành lập là thể hiện sự quan tâm của Đảng ủy Công ty. Chi bộ lúc đó chỉ có 4 đảng viên. Nghị quyết chi bộ chưa được đánh máy như bây giờ, chỉ ghi chép trong sổ tay, vậy mà vẫn  đoàn kết thống nhất cao, triển khai lãnh đạo, chỉ đạo kịp thời và hoàn thành tốt mọi nhiệm vụ. Từ đó cho đến lúc tôi (Đại tá Đỗ Ngọc Cường) nghỉ hưu, chi bộ và sau này là Đảng bộ năm nào cũng đạt trong sạch vững mạnh”. Đó là dấu ấn đầu tiên về tổ chức Đảng đầu tiên của đơn vị, là tấm gương để Đảng ủy Tổng Công ty và đội ngũ đảng viên của Đảng bộ hôm nay cần phát huy và phát huy truyển thống truyền thống cha anh; luôn giữ gìn sự đoàn kết thống nhất trong Đảng; lãnh đạo đơn vị hoàn thành tốt mọi nhiệm vụ được giao.`, img: "assets/images/2 - Sự kiện thứ 2 - Đại hội Chi bộ Trung tâm XNK lần thứ nhất.jpg", caption: "Đồng chí Hoàng Anh Xuân - Nguyên Tổng Giám đốc, đồng chí Dương Văn Tính - Nguyên Bí thư Đảng ủy, đồng chí Trần Văn Đại - Nguyên Chủ nhiệm Chính trị Tập đoàn chụp ảnh cùng đại biểu Đại hội chi bộ Trung tâm Xuất nhập khẩu lần thứ nhất năm 2002" },
            {
                year: "Ngày 30 tháng 6 năm 1999", milestone: "Phòng Xuất nhập khẩu phát triển thành Trung tâm Xuất nhập khẩu", desc: `Thực hiện chủ trương phát triển hạ tầng mạng lưới, phát triển các dịch vụ viễn thông trong nước, để đáp ứng yêu cầu nhiệm vụ ngày càng mở rộng về quy mô sản xuất kinh doanh, Đảng ủy, Ban Giám đốc Công ty Điện tử Viễn thông Quân đội đã xây dựng kế hoạch tổ chức lực lượng và đề nghị Bộ tư lệnh Thông tin Liên lạc phê duyệt mô hình tổ chức các đơn vị thuộc Công ty; trong đó có nội dung về thành lập Trung tâm Xuất nhập khẩu Viettel. 
Ngày 30 tháng 6 năm 1999, Tư lệnh Binh chủng Thông tin Liên lạc ra Quyết định số 232/QĐ-TLTT phê duyệt về kế hoạch tổ chức lực lượng năm 1999 của Công ty Điện tử Viễn thông Quân đội và quyết định thành lập Trung tâm Xuất nhập khẩu  (trên cơ sở Phòng Xuất nhập khẩu đã tổ chức năm 1997); đồng chí Đỗ Ngọc Cường được bổ nhiệm làm Giám đốc Trung tâm.
Theo Quyết định, Trung tâm Xuất nhập khẩu thuộc Công ty Điện tử Viễn thông Quân đội có chức năng: Tham mưu cho Đảng ủy, Ban giám đốc Công ty về định hướng chiến lược công tác xuất nhập khẩu; đề xuất các giải pháp thực hiện chiến lược đó thuộc lĩnh vực điện, điện tử, viễn thông, công nghệ thông tin; quản lý, điều hành và tổ chức triển khai các hoạt động xuất nhập khẩu theo nhiệm vụ; kinh doanh các thiết bị vật tư điện, điện tử, viễn thông, công nghệ thông tin, đo lường, điều khiển; hợp tác kinh doanh với các Công ty trong và ngoài nước; thực hiện tốt nhiệm vụ phục vụ quốc phòng, các dự án đầu tư của Công ty và hoạt động kinh doanh của Công ty.
Đại tá Đỗ Ngọc Cường từng cho biết: khi phát triển lên Trung tâm, anh rất mừng và mong Trung tâm ngày càng phát triển, anh mong đến một năm nào đó Trung tâm có doanh thu vào Câu lạc lạc bộ 100 tỷ đồng, rồi phấn đấu vào Câu lạc bộ Công ty có doanh thu 1000 tỷ đồng. 
Đồng chí Nguyễn Thị Minh Nguyệt, nguyên Trưởng Ban Kế hoạch Tổng hợp Trung tâm Xuất nhập khẩu khi đó nhớ lại: “Lúc Phòng phát triển lên Trung tâm, cả Trung tâm chỉ có 12 người, trong đó có 5 người là nữ; mình mừng lắm vì nghĩ rằng vị thế của đơn vị sẽ tăng lên, sánh ngang vị thế Xí nghiệp Khảo sát thiết kế và Xí nghiệp Xây lắp Công trình là những đơn vị nòng cốt của Viettel lúc bấy giờ và điều quan trọng là chắc chắn sẽ được bổ sung nhân lực. Sau đó mình được phân công là tổ trưởng tổ phụ nữ đầu tiên Trung tâm. Mình vinh dự được là nữ nhân viên đầu tiên của Tập đoàn trước đây cơ đấy!” (cười). 
Ngày nay, ước mơ của Người Giám đốc Trung tâm Xuất nhập khẩu đầu tiên, sau này có thời gian là 17 năm làm Giám đốc Công ty đã thành sự thật và còn hơn thế nữa. Doanh thu năm 2025 của Công ty đã đạt 1 tỷ đô; song những kỷ niệm về mốc son lịch sử năm nào vẫn vẹn nguyên trong anh như vừa mới ngày nào.
`, img: "assets/images/viettel-1997.jpg", caption: "Khai trương dịch vụ, 1999"
            },
            {
                year: "Tháng 3 năm 2000", milestone: "Nhập khẩu những lô hàng đầu tiên cho Viettel mở mạng Viễn thông", desc: `Năm 2000 - năm đầu tiên của thiên niên kỷ mới, tình hình kinh tế, chính trị thế giới và khu vực vẫn còn nhiều diễn biến phức tạp. Sau hơn 10 năm thực hiện đường lối đổi mới dưới sự lãnh đạo của Đảng, nhân dân ta đã đạt được nhiều thành tựu quan trọng; thị trường viễn thông trong nước và thế giới phát triển nhanh chóng, tạo ra thời cơ và thách thức cho các doanh nghiệp kinh doanh dịch vụ viễn thông. Công ty Điện tử viễn thông Quân đội sau 10 năm thành lập còn gặp rất nhiều khó khăn, nhưng bước đầu đã tạo được những tiền đề cần thiết để tiếp tục phát triển ngành nghề truyền thống. Thực hiện “ước mơ” kinh doanh dịch vụ viễn thông, Công ty đã quyết định và triển khai thành công việc nghiên cứu, lập dự án tiến tới kinh doanh dịch vụ điện thoại đường dài 178, công nghệ VoIP. 
Đi lên từ số vốn ít ỏi 2,3 tỷ đồng vào năm 2000, Công ty Điện tử Viễn thông đã khẩn trương triển khai dự án, trước hết là nhập khẩu hệ thống thiết bị SDH cho chuẩn bị lắp đặt hạ tầng viễn thông đầu tiên, mạng điện thoại đường dài 178.
Trung tâm Xuất nhập khẩu được giao trọng trách này. Trước đó, sau mấy năm thực hiện nhiệm vụ nhập khẩu máy móc thiết bị điện tử, thông tin cho Binh chủng Thông tin liên lạc, Trung tâm cũng đã có một số kinh nghiệm, song đây là lần nhập khẩu thiết bị viễn thông cho Công ty lần đầu tiên, với công nghệ mới SDH là công nghệ mới nhất lúc bấy giờ, trong điều kiện vị thế Công ty lúc đó còn có mức độ, nên cũng gặp không ít khó khăn. Đồng chí Trần Thị Ánh Minh, nguyên Trưởng phòng Tổ chức Lao động nhớ lại: Hồi đó, ngoài xã hội, nhiều người chưa biết đến Viettel là ai; không có được thương hiệu như bây giờ, nên mỗi khi thực hiện các giao dịch, đàm phán về xuất nhập khẩu với các cơ quan chức năng rất khó khăn. Trung tâm Xuất nhập khẩu được Công ty tin tưởng, như một đơn vị hoạt động thương mại với bên ngoài, là những “nhà ngoại giao” của Công ty, nên lúc nào cũng phải xác định là những người “mũ cao, áo dài”, ăn nói phải cẩn trọng và chỉn chu, chắc chắn mới đi đàm phán. Lô hàng đầu tiên nhập về; chi cục Hải quan Hà Nội yêu cầu kiểm đếm từng loại sản phẩm. Giả sử nếu đề kiểm đếm chắc phải mất nhiều ngày; mặt khác hàng phải trải ra đều khắp mặt sân Công ty ở số 1, Giang Văn Minh và rất dễ bị xáo trộn và khó đồng bộ. Để tháo gỡ khó khăn, tôi (Trần Ánh Minh) đã phải tổ chức 02 buổi họp bàn để trao đổi, giao lưu tại Tổng cục Hải quan và tại trụ sở Công ty, mời được cả anh Nguyễn Ngọc Túc là Phó Tổng Cục trưởng Tổng cục Hải quan khi đó tham dự. Bên Viettel thì đầy đủ Ban lãnh đạo tham gia gồm cả anh Xuân, Anh Hùng, anh Dũng, anh Tính. Nội dung các buổi họp là nêu tầm quan trọng của một Công ty thuộc Quân đội có nhiệm vụ làm đơn vị tiên phong trong phá thế độc quyền viễn thông; thiết bị lại là loại hàng hóa công nghệ cao, nên đề nghị Tổng cục Hải quan tạo điều kiện giúp đỡ trong việc nhập khẩu. Và kết quả thật bất ngờ, sau đó, Tổng cục Hải quan đã đồng thuận quan điểm và rất ủng hộ Viettel. Từ những lô hàng đầu tiên được Hải quan tin tưởng, chỉ đạo các Chi cục cho thông quan nhanh chóng, không phải kiểm đếm từng loại thiết bị. Việc làm này đã như “phát súng mở màn” khai thông những lô hàng lớn sau này nhập khẩu được thuận lợi. Đây cũng là bài học cho sự tìm tòi học hỏi, kiên trì, tìm mọi cách tháo gỡ khó khăn để làm đến cùng của cán bộ xuất nhập khẩu.
`, img: "assets/images/viettel-1997.jpg", caption: "Kỷ nguyên mới, 2000"
            },
            {
                year: "Ngày 06 tháng 4 năm 2005", milestone: "Trung tâm Xuất nhập khẩu phát triển thành Công ty Thương mại và Xuất nhập khẩu", desc: `Năm 2000, Viettel bắt đầu bước chân vào thị trường viễn thông với khởi đầu là dịch điện thoại đường đài 178, khai trương thử nghiệm ngày 15 tháng 10 năm 2000. Từ đây, Viettel bắt đầu con đường phá độc quyền viễn thông và từng bước phát triển mạnh mẽ. Tháng 7 năm 2004, Viettel tách khỏi Binh chủng thông tin về trực thuộc Bộ Quốc phòng. Ngày 15 tháng 10 năm 2004, Viettel khai trương dịch vụ điện thoại di động. Với sự phát triển nhanh chóng và mạnh mẽ, ngày 06 tháng 4 năm 2005, Bộ Quốc phòng ra Quyết định số 45/2005/QĐ-BQP thành lập Tổng Công ty Viễn thông Quân đội (trên cơ sở Công ty Viễn thông Quân đội). Theo đó các đơn vị trực thuộc cũng phát triển lên mô hình mới. Trung tâm Xuất nhập khẩu phát triển thành Công ty Thương mại và Xuất nhập khẩu Viettel. Sự lớn mạnh của Viettel được tạo nên bằng sức mạnh tổng hợp với những cố gắng vượt bậc của nội lực Viettel, đồng thời có cả những yếu tố  “thiên thời, địa lợi, nhân hòa”; trong đó có đóng góp của Trung tâm Xuất nhập khẩu.  
Đồng chí Trần thị Ánh Minh, Nguyên Trưởng phòng Tổ chức - Hành chính Công ty năm đó nhớ lại: Tôi trước làm giáo viên, cơ duyên và may mắn được về Viettel từ năm khi đó Viettel bắt đầu phát triển, nhưng khi đó tên tuổi Viettel cũng chưa được nhiều người biết đến. Chỉ khi Viettel phát triển dịch vụ điện thoại di động và lên Tổng Công ty thì tiếng vang của Viettel mới được cả nước biết đến như một Công ty phá độc quyền viễn thông mà khách hàng là người được hưởng lợi.
`, img: "assets/images/viettel-1997.jpg", caption: "Hợp tác quốc tế, 2001"
            },
            {
                year: "Năm 2006", milestone: "Công ty chính thức thực hiện chế độ doanh nghiệp nhà nước hạch toán độc lập, theo cơ chế thị trường", desc: `Thực hiện chủ trương củng cố cải tổ mô hình tổ chức, đáp ứng yêu cầu kinh doanh dịch vụ viễn thông trong tình hình mới, Tổng Công ty Viễn thông Quân đội đã xây dựng đề án thành lập các Công ty thành viên và trình Bộ Quốc phòng phê duyệt. Ngày 12 tháng 1 năm 2006, Bộ trưởng Bộ Quốc phòng ra Quyết định số 11/2006/QĐ-BQP thành lập Công ty Trách nhiệm hữu hạn Nhà nước một thành viên Thương mại và Xuất nhập khẩu Viettel thuộc Tổng Công ty Viễn thông Quân đội (tên viết tắt là VIETTELIMEX). Văn phòng giao dịch tại số 6, lô 14B, phường Trung Hòa, quận Cầu Giấy, thành phố Hà Nội. Quyết định ghi rõ: Công ty Trách nhiệm hữu hạn nhà nước một thành viên Thương mại và Xuất nhập khẩu Viettel có vốn điều lệ là 35 tỷ đồng, là doanh nghiệp 100% vốn do Tổng Công ty Viễn thông Quân đội đầu tư, có con dấu riêng, được mở tài khoản tại ngân hàng theo quy định của pháp luật, hoạt động theo Luật Doanh nghiệp và Điều lệ của Tổng Công ty do Bộ Quốc phòng phê duyệt.
Từ đây, Công ty chính thức thực hiện chế độ doanh nghiệp nhà nước hạch toán độc lập, theo cơ chế thị trường. Khi được hỏi, “trước đây đơn vị hạch toán phụ thuộc; “mọi quyết định kế hoạch, thu, chi đã có trên lo, nay hạch toán độc lập, với cương vị Giám đốc Công ty, anh có lo không?”; Đại tá Đỗ Ngọc Cường từng chia sẻ: “Lúc đó rất vui; tuy ban đầu cũng có chút lo lắng một chút, nhưng vững tâm vì mình tin với lực lượng của mình được đào tạo cơ bản, nhiệt tình trách nhiệm, mình tin là sẽ làm được và điều quan trọng là được cấp trên tin tưởng; mình được tự chủ, quyết định mọi điều, điều đó quan trọng lắm”. Mình tự lớn lên, trưởng thành từ chính nội lực của mình là chính, đó là truyền thống tốt đẹp của Công ty trong chặng đường xây dựng và phát triển.  
`, img: "assets/images/viettel-1997.jpg", caption: "Ra mắt mạng di động, 2002"
            },
            {
                year: "Ngày 03 tháng 5 năm 2006", milestone: `Khai trương Siêu thị VKO Ngọc Khánh, Ba Đình, Hà Nội`, desc: `Năm 2006, khi đã phát triển đầy đủ dịch vụ viễn thông; đặc biệt là dịch vụ điện thoại di động phát triển nhanh chóng; Tổng Công ty Viễn thông Quân đội chủ trương phải lập riêng cho mình một hệ thống kênh phân phối dịch vụ và thiết bị đầu cuối thay vì phụ thuộc vào hệ thống các đại lý trước đây. Tổng Công ty đã chỉ đạo  Công ty Viễn thông Viettel  “tổ chức quy hoạch kênh phân phối các cửa hàng, đại lý và điểm bán hàng tại các tỉnh, thành phố” , một mặt chỉ đạo và đầu tư cho Công ty Thương mại và Xuất Nhập khẩu, nghiên cứu lập phương án, tổ chức xây dựng 1-2 siêu thị đầu tiên để làm điểm trước khi nhân rộng với quan điểm phải ở thành phố lớn, nơi kinh doanh đông đúc, sầm uất, đẹp, thể hiện nổi bật hình ảnh thương hiệu Viettel. Địa điểm đầu tiên lựa chọn đặt siêu thị là khu vực triển lãm quốc gia, tại góc ngã tư mặt phố Giảng Võ giao với phố Ngọc Khánh Hà Nội (thường gọi là khu Trung tâm thương mại VKO). Từ tháng 2 năm 2006, Công ty đã bắt tay vào công tác chuẩn bị thuê đối tác thiết kế, thi công với quan điểm làm siêu thị đầu tiên phải nổi bật về hình thức, rộng rãi và tiện ích.    
Ngày 3 tháng 5 năm 2006, Công ty đã tổ chức long trọng Lễ khai trương siêu thị điện thoại đầu tiên của Viettel tại Trung tâm Thương mại VKO - Phố Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, chính thức kinh doanh phân phối các loại điện thoại di động của nhiều hãng nổi tiếng trên thế giới như Nokia, Samsung, Motorola…Siêu thị có diện tích hơn 150m2 với mặt tiền dài 15m được thiết kế khang trang, bảng hiệu với thương hiệu logo Viettel chiếm diện tích lớn phía trên mặt ngoài siêu thị. Trước đó, Công ty cũng đã tuyển dụng được gần 30 nhân viên siêu thị với những tiêu chí cơ bản là: tốt nghiệp trung học trở lên, có ngoại hình đẹp, nữ cao 1,58m trở lên, nam cao 1,63m trở lên. Tổ chức bồi dưỡng đào tạo để đáp ứng nhân lực cho siêu thị. 
Tổng Giám đốc Hoàng Anh Xuân, Phó Tổng Giám đốc Nguyễn Mạnh Hùng cùng đông đảo cán bộ các phòng ban, đơn vị thuộc Tổng Công ty đã đến dự. Công ty đã phối hợp với các cơ quan thông tin đại chúng làm tốt công tác truyền thông. Ngày khai trương, từ sáng sớm, cả khu phố Ngọc Khánh sang Giảng Võ đông nghịt người đến tham quan theo dõi buổi khai trương và mua sắm.
Đồng chí Lâm Việt Hùng, nguyên Trưởng Siêu thị lúc ấy, nay chia sẻ: “Tôi thật vinh dự là Trưởng siêu thị đầu tiên ở Ngọc Khánh và là Trưởng Siêu thị đầu tiên của cả hệ thống sau này. Để chuẩn bị cho khai trương, được sự hỗ trợ của cán bộ Công ty và Tổng Công ty; tất cả 16 anh chị em trong siêu thị đều đã được đào tạo và có cả mấy tuần làm việc cật lực chuẩn bị cho khai trương. Đêm trước ngày khai trương, tôi cùng anh em đến gần 01 giờ sáng mới ngủ vì lo chuẩn bị hàng hóa, xếp đặt hàng trên các tủ quầy; tất cả ăn, ngủ tại chỗ; đến 5 giờ sáng tôi đã gọi mọi người dậy trang trí. 9 giờ sáng ngày 03 tháng 5 thì khai trương. Thật xúc động và tự hào anh ạ. Kỷ niệm đẹp đẽ đó sẽ còn in đậm mãi trong tâm trí tôi”. 
Việc khai trương Siêu thị VKO Ngọc Khánh mở đầu cho Công ty trong việc phát triển chuỗi siêu thị bán lẻ điện thoại, máy tính, các thiết bị thông tin viễn thông. Đến cuối năm ấy, Công ty tiếp tục khai trương siêu thị thứ 2 tại số 285 Đường Cách mạng Tháng Tám, Thành phố Hồ Chí Minh.
Sau này, ngày 03 tháng 5 hàng năm, được Công ty ra Quyết định chọn làm ngày truyền thống của Trung tâm Bán lẻ (nay là Trung tâm Kinh doanh thiết bị số).
`, img: "assets/images/7 - Nguyên Giám đốc Công ty Đỗ Ngọc Cường Khai trương siêu thị đầu tin.jpg", caption: "Khai trương siêu thị đầu tiên"
            },
            {
                year: "Tháng 12 năm 2006", milestone: "Hoàn thành Dự án lắp đặt hệ thống thiết bị mạng, hệ thống quản lý tòa nhà Khu Hội Nghị Quốc gia.", desc: "Có thể nói đây là dự án đầu tiên, lớn nhất tầm quốc gia do Công ty tự tìm kiếm và tổ chức thực hiện toàn trình; từ thiết kế, mua sắm thiết bị, tổ chức thi công, hoàn công, đưa vào vận hành và bảo hành. Để có được dự án, đồng chí Đỗ Ngọc Cường, Giám đốc Công ty và đồng chí Đặng Hồng Thái, Phó Giám đốc Công ty đã đến gặp trực tiếp Đại tướng Phạm Văn Trà, Bộ trưởng Bộ Quốc phòng khi đó, nhờ Đại tướng giúp đỡ giới thiệu để tham gia đấu thầu và đã thắng thầu. Dự án được triển khai từ tháng 7 năm 2005. Công ty đã thành lập Ban điều hành dự án do đồng chí Đỗ Ngọc Cường - Giám đốc Công ty làm Trưởng ban và đồng chí Đặng Hồng Thái - Phó giám đốc Công ty làm Phó ban, trực tiếp điều hành Ban Điều hành dự án đặt dưới sự chỉ đạo của Ban Giám đốc Tổng Công ty Viễn thông Quân đội mà trực tiếp là đồng chí Lê Đăng Dũng - Phó Tổng Giám đốc Tổng Công ty. Triển khai thực hiện dự án, Công ty Xuất nhập khẩu đã thành lập 03 tổ công tác: Tổ lắp đặt thiết bị, tổ kỹ thuật và tổ thương mại; đồng chí Nguyễn Xuân Du được giao trực tiếp giám sát, chỉ huy trên công trường. Cùng với việc tổ chức, bố trí nhân lực thi công lắp đặt hệ thống điện tử thông tin, hệ thống quản lý tòa nhà Công ty Hội nghị Quốc gia, Ban Giám đốc Công ty đã xây dựng kế hoạch cụ thể về khối lượng vật tư trang thiết bị kỹ thuật, huy động nguồn lực cán bộ quản lý, kỹ thuật điều hành quá trình thực hiện dự án; xác định lộ trình, thời gian, tiến độ thi công đáp ứng đúng yêu cầu của Bộ Xây dựng. Trong quá trình lắp đặt, được Tổng Bí thư Nông Đức Mạnh và các lãnh đạo Bộ, ngành đến thăm quan, động viên. Cuối năm 2006, Công ty đã hoàn thành dự án với tổng giá trị 100 tỷ đồng. Công trình được nghiệm thu toàn bộ, đáp ứng đúng tiến độ và các yêu cầu kỹ thuật của dự án, kịp thời phục vụ thành công Hội nghị APEC lần thứ 14 được tổ chức tại Việt Nam. Đồng chí Đỗ Ngọc Cường - Giám đốc Công ty, kiêm Trưởng ban Điều hành dự án được Thủ tướng Chính phủ tặng Bằng khen; đồng chí Đặng Hồng Thái, Phó Giám đốc Công ty, Phó Ban Điều hành dự án được Bộ Xây dựng và Bộ Ngoại giao tặng Bằng khen; nhiều tập thể và cá nhân Công ty được Bộ Xây dựng và Bộ Ngoại giao tặng Giấy khen",
                img: "assets/images/8- Đc Nguyễn Mạnh Hùng, Lê Đăng Dũng Nguyên Tổng Giám đốc tậ đoàn kiểm tra, chỉ đạo tại công trình TTHN Quốc gia.jpg", caption: "Đồng chí thiếu tướng Nguyễn Mạnh Hùng - Nguyên tổng giám đốc tập đoàn đến kiểm tra và chỉ đạo lắp đặt hệ thống điều khiển tòa nhà tại Trung tâm hội nghị Quốc gia"
            },
            {
                year: "Ngày 18 tháng 1 năm 2008", milestone: "Chi bộ Xuất nhập khẩu phát triển thành Đảng bộ cơ sở 2 cấp", desc: `Ngày 18 tháng 1 năm 2008, Đảng ủy Tổng Công ty Viễn thông Quân đội ra quyết định thành lập Đảng bộ cơ sở 2 cấp Công ty Thương mại và Xuất nhập khẩu Viettel trực thuộc Đảng bộ Tổng Công ty Viễn thông Quân đội và chỉ định lâm thời Ban Chấp hành Đảng bộ Công ty gồm 5 đồng chí: đồng chí Lê Duy Hòa - Phó giám đốc Công ty giữ chức Bí thư Đảng ủy; đồng chí Đỗ Ngọc Cường - Giám đốc Công ty giữ chức Phó bí thư Đảng ủy; các đồng chí Đặng Hồng Thái - Phó giám đốc Công ty; Nguyễn Minh Nguyệt - Trưởng phòng Kế hoạch và đồng chí Đào Hồng Hợi - Giám đốc Chi nhánh phía Nam giữ chức Đảng ủy viên.
Đại tá Đỗ Ngọc Cường, nguyên Phó Bí thư Đảng ủy từng kể lại: “Nâng cấp từ chi bộ lên đảng bộ, anh em cán bộ Đảng viên rất mừng vì được Đảng ủy Tổng Công ty quan tâm". Toàn Công ty lúc đó cũng chỉ hơn 100 người, Đảng bộ lúc đó chỉ có 35 đảng viên. Chị Nguyễn Thị Minh Nguyệt, nguyên là Đảng ủy viên kể lại, buổi họp Đảng ủy đầu tiên, anh Lê Duy Hòa, Phó Giám đốc Công ty khi đó được chỉ định là Bí thư Đảng ủy Công ty còn ước “bao giờ Đảng bộ mình có số Đảng viên gấp 9,10 lần như bây giờ thì Công ty lúc ấy hoành tráng lắm nhỉ? ”.
Điều ước của anh Hòa nay đã thành sự thật, Tổng Công ty hiện đã phát triển mạnh mẽ với số lao động gần 4000 người, Đảng bộ Công ty nay đã có 02 Đảng bộ bộ phận và 15 chi bộ trực thuộc với 313 đảng viên.
`, img: "assets/images/viettel-1997.jpg", caption: "Nghiên cứu 3G, 2005"
            },
            {
                year: "Tháng 10  năm 2008", milestone: "Tổng Công ty Viễn thông Quân đội điều chuyển 68 siêu thị từ Công ty Viễn thông Viettel sang Công ty Thương mại và Xuất nhập khẩu Viettel", desc: `Đến năm 2008, Mạng di động Viettel vươn lên vị trí số 1 Việt Nam với hạ tầng rộng khắp và hơn 12 triệu thuê bao. Thương hiệu Viettel được biết đến là một thương hiệu mạnh, khẳng định vị thế, khi được xếp vào một trong mười doanh nghiệp hàng đầu của Việt Nam, là doanh nghiệp viễn thông số 1 trong cung cấp dịch vụ di động. Hệ thống siêu thị, cửa hàng đa dịch vụ của Viettel gần như phủ kín khắp các tỉnh thành, quận huyện. Đây là thế mạnh của Viettel trong việc cung cấp trực tiếp các sản phẩm dịch vụ tới người tiêu dùng. Tuy nhiên trong mấy năm phát triển “nóng”; Viettel nhận thấy đã đến lúc phải rà soát lại để tối ưu hệ thống. 
Tôi (Thanh-Ban Biên Tập) còn nhớ trong một buổi giao ban cuối tháng 9 năm 2008, khi có ý kiến cho rằng cùng Tổng Công ty đang tồn tại 02 hệ thống siêu thị Viettel tại Công ty Viễn thông Viettel (VTT) và Công  ty Thương mại và Xuất nhập khẩu Viettel đã có những vấn đề bất cập nảy sinh. Đồng chí Nguyễn Mạnh Hùng, Phó Tổng Giám đốc chủ trì cuộc họp đã chỉ đạo, vậy phải nhất thể  lại và tối ưu cho hợp lý để hệ thống này tốt lên, như một kênh phân phối khác biệt của Viettel, là “cầu nối” của Viettel với khách hàng . Anh Lê Công Cẩn, khi đó là Trưởng Phòng Kế hoạch phát biểu “theo tôi, nên để đưa hệ thống này cho ông Cường quản lý, VTT tập trung phát triển dịch vụ thôi”, và sau đó quyết định được đưa ra. 
 Đại tá Đỗ Ngọc Cường nhớ lại; khi Tổng Công ty quyết định đưa hệ thống siêu thị từ VTT về thì anh em trong Công ty mừng lắm. Mình nỗ lực mấy năm trời từ 2006 đến nay mới xây dựng được mấy chục siêu thị, nay một lúc có thêm ngay 68 siêu thị. Sau đó lại được VTT hỗ trợ hình ảnh, hỗ trợ 3 tháng thuê nhà, toàn bộ nhân sự  hơn 400 người chuyển sang, chỉ cần vài tháng tối ưu lại thì hệ thống siêu thị của Công ty đã trở nên rất mạnh. Trở thành chuỗi bán lẻ điện thoại lớn thứ hai tại Việt Nam.
Đúng là chỉ một quyết định làm cho Công ty “như hổ được mọc thêm cánh, rồng mọc thêm vây”. Đó là dấu mốc quan trọng để Công ty bứt phá vươn lên, đạt doanh thu năm 2008 là 2608 tỷ đồng, tăng gấp hơn 2 lần năm 2007.
`, img: "assets/images/viettel-1997.jpg", caption: "Hành trình quốc tế, 2006"
            },
            { year: "Ngày 01 tháng 11 năm 2008", milestone: "Đại hội Đảng bộ Công ty Lần thứ nhất nhiệm kỳ (2008-2010)", desc: "Đại tá Nguyễn Văn Thanh còn nhớ: kỳ đại hội năm ấy tôi được phân công cùng anh Trần Văn Đãi, Chủ nhiệm Chính trị Tổng Công ty xuống dự. Đại hội được tổ chức long trọng tại Hội trường Lữ đoàn 205 Binh chủng Thông tin Liên lạc. Trong tiết trời se se lạnh của đợt gió heo may đầu mùa, hội trường được trang hoàng rực rỡ, đúng nghi thức, các đại biểu nữ mặc áo dài; đại biểu nam mặc comle, cùng với mở màn là những tiết mục văn nghệ đặc sắc càng tôn vẻ trang nghiêm, hoành tráng của Đại hội. Đây là Đại hội toàn thể vì toàn Đảng bộ lúc đó chỉ có 40 đảng viên, trong đó có 37 đảng viên chính thức và 3 đảng viên dự bị. 100% đảng viên có mặt tại Đại hội.Đại hội khẳng định: Trong khoảng thời gian từ năm 2005 đến 2008, đặc điểm nổi bật của Công ty là có sự thay đổi lớn về nhiệm vụ, quy mô tổ chức, lực lượng, khó khăn, tiềm ẩn nhiều nguy cơ… song, Đảng bộ đã lãnh đạo đơn vị thực hiện thắng lợi các chỉ tiêu, nhiệm vụ mà Đảng ủy, Ban Giám đốc Tổng Công ty giao; xây dựng đơn vị vững mạnh về chính trị, tư tưởng và tổ chức; Công ty trưởng thành toàn diện. Công ty hoàn thành vượt mức các chỉ tiêu kế hoạch sản xuất kinh doanh, doanh thu có sự tăng trưởng đột biến (năm sau gấp đôi năm trước). Công ty đã tham gia nhiều dự án lớn có tầm quốc gia đòi hỏi chuyên môn kỹ thuật cao; thực hiện tốt nhiệm vụ xuất nhập khẩu ủy thác quốc phòng và Tổng Công ty với khối lượng lớn (năm sau gấp đôi năm trước), bảo đảm an toàn, đồng bộ... Đặc biệt về phương hướng nhiệm vụ lãnh đạo của Đảng bộ đến năm 2010, Đại hội xác định 5 mục tiêu, trong đó mục tiêu đầu tiên là “Phát triển Công ty theo mô hình các Công ty kinh doanh tự hoạch toán, lấy kinh doanh điện thoại di động và xuất nhập khẩu làm chủ đạo”. Đây là Đại hội cấp Đảng bộ Công ty đầu tiên, một dấu ấn lịch sử quan trọng trên con đường xây dựng và phát triển của Tổng Công ty Thương mại và Xuất nhập khẩu Viettel.  ", img: "assets/images/11. Đc Trần Văn Đải nguyên Chủ nhiệm Chính trị Tập đoàn Chụp ảnh cùng BCH Đảng bộ Công ty lần thứ nhất .jpg", caption: "Đồng chí Trần Văn Đại - Chủ nhiệm Chính trị Tập đoàn (Đứng giữa) chụp ảnh cùng Ban chấp hành Đảng bộ tại đại hội lần thứ nhất" },
            {
                year: "Ngày 21 tháng 1 năm 2009", milestone: "Công ty tổ chức lại Trung tâm kinh doanh điện thoại di động, thành lập Trung tâm Bán lẻ", desc: `Ngày 8 tháng 1 năm 2009, Đảng ủy Công ty đã tổ chức hội nghị ra nghị quyết lãnh đạo thực hiện nhiệm vụ trong năm xác định một số nhiệm vụ trọng tâm cần tập trung thực hiện năm 2009; trong đó có nội dung “Tiếp tục duy trì tốc độ tăng trưởng của Công ty trên tất cả các mặt: doanh thu, sản lượng, xây dựng kênh phân phối….  Xây dựng mô hình tổ chức Công ty phù hợp với yêu cầu nhiệm vụ”.
Quán triệt và tổ chức thực hiện nghị quyết của Đảng ủy, Ban Giám đốc Công ty đã tiến hành kiện toàn cơ cấu tổ chức, nhằm đáp ứng yêu cầu nhiệm vụ sản xuất kinh doanh trong tình hình mới. Ngày 21 tháng 1 năm 2009, Giám đốc Công ty Thương mại và Xuất nhập khẩu ra Quyết định số 123/QĐ-XNK tổ chức lại Trung tâm Kinh doanh Điện thoại di động thành Trung tâm Bán lẻ Viettel thuộc Công ty Thương mại và Xuất nhập khẩu Viettel. Đồng chí Nguyễn Chí Thanh, Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Bán lẻ. Các đồng chí: Lê Quốc Tuấn và Đào Hồng Hợi làm Phó giám đốc Trung tâm. Mô hình tổ chức của Trung tâm gồm: Ban giám đốc (có giám đốc, phó giám đốc phụ trách bán hàng, phó giám đốc phụ trách kinh doanh và phó giám đốc phụ trách phía nam); các đơn vị trực thuộc gồm 6 phòng (Phòng Kế hoạch Kinh doanh, Phòng Hành chính - Tổng hợp, Phòng Tài chính, Phòng Mua hàng, Phòng Đào tạo và Kiểm soát, Phòng Bán lẻ); 2 ban (Ban Bảo hành IT, Ban kho) và hệ thống các siêu thị. 
Đảng ủy, Ban Giám đốc Công ty đặt mục tiêu phát triển của Trung tâm Bán lẻ Viettel là: Xây dựng Trung tâm trở thành nhà bán lẻ lớn nhất Việt Nam. Trước mắt, Trung tâm có nhiệm vụ: Xây dựng hệ thống kênh phân phối và tổ chức kinh doanh điện thoại di động, thiết bị đầu cuối, các sản phẩm dịch vụ điện, điện tử viễn thông trên toàn quốc. Phấn đấu trong năm 2009, hệ thống kênh bán lẻ có 150 siêu thị và hơn 600 cửa hàng; doanh thu đạt 1.614 tỷ đồng, chiếm thị phần điện thoại di động 50% (tương đương 4 triệu máy).
Đại tá Nguyễn Chí Thanh, Phó Giám đốc Công ty, Giám đốc Trung tâm Bán lẻ đầu tiên hồi tưởng: Tôi được Tổng Công ty điều về Công ty từ năm 2007. Những năm sau đó, trong bối cảnh Viettel tham gia là nhân tố quan trọng làm “bùng nổ thị trường viễn thông”. Nhu cầu mua máy điện thoại, nhất là điện thoại chính hãng rất lớn. Viettel lúc bấy giờ thương hiệu đang rất “nổi”. Nhận thấy cơ hội đã đến, tôi bàn với anh Đỗ Ngọc Cường và các anh trong Ban giám đốc cần đẩy mạnh phát triển chuỗi bán lẻ điện thoại. Và việc thành lập Trung tâm bán lẻ là điều tất yếu do thời điểm lịch sử lúc ấy yêu cầu. Tôi cũng rất vinh dự được Công ty giao trọng trách là Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Bán lẻ đầu tiên. Hồi đó Ban Giám đốc Trung tâm Bán lẻ làm việc cật lực ngày đêm, cố gắng học hỏi (kể cả đi nước ngoài học các chuỗi của họ) để ổn định và phát triển hệ thống của mình ở tất cả các khâu xây dựng cửa hàng, nhập hàng, điều chuyển hàng hóa, tổ chức bán hàng, làm makerting....Quyết tâm của Ban lãnh đạo Công ty cũng như của tôi khi đó là cố gắng phát triển ít nhất được 200-300 siêu thị; giữ được vị thế là chuỗi bán lẻ điện thoại hàng thứ Hai ở Việt Nam (sau Thế giới di động) và cố gắng phấn đấu để vươn lên số 1; nhưng thật khó nhỉ, (cười). Trong kinh doanh bán lẻ; chỉ có Top đầu thứ 1, thứ 2 hoặc thứ 3 là cùng thì mới có lợi thế. Không giữ được vị trí 1,2 hoặc 3 là kinh doanh rất khó khăn. Tôi luôn mong muốn hệ thống Bán lẻ của Viettel luôn tạo vị thế vững chắc và ngày một phát triển chuỗi bán lẻ sản phẩm thiết bị viễn thông, công nghệ thông tin hàng đầu Việt Nam.  
`, img: "assets/images/viettel-1997.jpg", caption: "Nhận giải quốc tế, 2008"
            },
            // { year: "Ngày 21 tháng 1 năm 2009", milestone: "Ra mắt 3G chính thức", desc: "13.	Ngày 21 tháng 1 năm 2009, tổ chức lại Phòng Nghiệp vụ Xuất nhập khẩu, thành lập Trung tâm Trung tâm Xuất nhập khẩu viễn thông", img: "assets/images/viettel-1997.jpg", caption: "Ra mắt 3G, 2009" },
            { year: "Ngày 1 tháng 5 năm 2010", milestone: "Công ty nhận điều chuyển nguyên trạng bộ phận giao dịch từ 107 siêu thị tại các Chi nhánh Viettel Tỉnh/Thành phố thuộc Tổng Công ty Viễn thông Viettel, chính thức kinh doanh dịch vụ viễn thông cho Tập đoàn", desc: `Tháng 10  năm 2008, sau khi tiếp nhận 68 siêu thị kinh doanh điện thoại từ Tổng Công ty Viễn thông Viettel sang Công ty Thương mại và Xuất nhập khẩu Viettel thì trong Siêu thị tồn tại song song hai bộ phận kinh doanh thuộc 2 công ty khác nhau. Một là Bộ phận kinh doanh bán máy thuộc Công ty Thương mại và Xuất nhập khẩu Viettel và hai là Bộ phận kinh doanh dịch vụ thuộc Công ty Viễn thông Viettel. Việc này dẫn đến nhiều bất cập trong quản lý cũng như vận hành, từ hình ảnh siêu thị, hình ảnh nhân viên (trang phục, quy chuẩn) không đồng nhất, cho đến giờ mở của phục vụ khách hàng, các cơ chế chính sách cho nhân viên cũng khác nhau. Để khắc phục những bất cập trên cần đồng nhất hoạt động của Siêu thị theo một quy chuẩn. Sau nhiều lần nghiên cứu, cân nhắc;  ngày 01 tháng 5 năm 2010, Tập đoàn Viễn thông Quân đội đã quyết định điều chuyển bộ phận dịch vụ tại 107 siêu thị, cửa hàng thuộc các Chi nhánh Tỉnh/Thành phố thuộc Tổng Công ty Viễn thông Viettel về Công ty Thương mại và Xuất nhập khẩu Viettel. Từ thời điểm này, Công ty Thương mại và Xuất nhập khẩu Viettel chính thức quản lý, tổ chức kinh doanh các dịch vụ viễn thông cho Tập đoàn. Những năm đầu tiếp nhận, Công ty chỉ thực hiện bán thẻ cào và làm dịch vụ đấu nối sim với doanh thu chỉ đạt hơn 10 tỷ đồng/năm thì đến hết năm 2021 đã thực hiện kinh doanh tất cả các dịch vụ của Tập đoàn và gần 20 sản phẩm ngoài Viettel với hơn danh thu đạt gần 300 tỷ đồng. Trong những năm qua, Công ty đã hòa mạng, chuyển mạng dịch vụ, thực hiện các hoạt động chăm sóc khách hàng cho hàng chục triệu khách hàng, trong đó phần lớn là dịch vụ điện thoại di động Hệ thống siêu thị của Công ty Thương mại và Xuất nhập khẩu Viettel thực sự là nơi thể hiện thương hiệu hình ảnh Viettel, trở thành một “cầu nối” dịch vụ giữa Viettel và khách hàng. Đó là điều mà mỗi người trong Tổng Công ty Thương mại và Xuất nhập khẩu Viettel cần gìn giữ và phát huy.`, img: "assets/images/viettel-1997.jpg", caption: "Mạng di động số 1, 2010" },
            {
                year: "Ngày 24 tháng 5 năm 2010", milestone: "Thành lập Trung tâm Phân phối", desc: `Trong điều kiện thị trường viễn thông ngày càng cạnh tranh gay gắt; nhu cầu về sử dụng thiết bị đầu cuối viễn thông, công nghệ thông tin của người tiêu dùng trong nước ngày càng cao; thị trường xuất hiện những doanh nghiệp hợp tác với các hãng điện thoại máy tính lớn của nước ngoài hình thành các đơn vị đầu mối phân phối hàng hóa viễn thông, công nghệ thông tin lớn cho khách hàng. Tập đoàn Viễn thông Quân đội chủ trương đầu tư lớn vào hạ tầng viễn thông để nâng cao chất lượng các dịch vụ và mở rộng đầu tư ra nước ngoài; là Công ty mẹ có tiềm lực vững chắc, tạo điều kiện cho các đơn vị thành viên trong đó có Công ty Thương mại và Xuất nhập khẩu Viettel phát triển. Thực hiện chủ trương của Tập đoàn, Đảng ủy Ban Giám đốc Công ty nhận thấy đây là một lĩnh vực tiềm năng, tập trung nghiên cứu để mở hệ thống phân phối, bán buôn thiết bị đầu cuối viễn thông, công nghệ thông tin; còn được gọi tắt là kinh doanh phân phối.
Ngày 24 tháng 5 năm 2010, Giám đốc Công ty ra Quyết định số 502/QĐ-XNK-TCLĐ tổ chức lại Trung tâm Kinh doanh Thiết bị đầu cuối thành Trung tâm Phân phối thuộc Công ty Thương mại và Xuất nhập khẩu Viettel. Mô hình tổ chức của Trung tâm gồm 3 trung tâm khu vực (Trung tâm Phân phối miền Bắc đặt tại Hà Nội, Trung tâm Phân phối miền Trung đặt tại Đà Nẵng, Trung tâm Phân phối miền Nam đặt tại Thành phố Hồ Chí Minh). Trung tâm chính thức tham gia vào lĩnh vực phân phối bán buôn với mặt hàng ban đầu chủ yếu là Laptop và phụ kiện. 
Ngay sau khi thành lập; Đảng ủy, Ban Giám đốc Công ty đã tập trung chỉ đạo tổ chức bộ máy Trung tâm phân phối, tuyển dụng bổ sung nhân lực, giao nhiệm vụ cho từng bộ phận tập trung nghiên cứu, học hỏi doanh nghiệp bạn. Thu nạp những cán bộ có kinh nghiệm làm công tác này từ doanh nghiệp bạn. Đồng chí Nguyễn Quang Vinh được Công ty giao nhiệm vụ làm Giám đốc Trung tâm, đồng chí Phạm Công Trường làm Phó giám đốc Trung tâm Phân phối. Bước đầu, Trung tâm triển khai kinh doanh phân phối, bán buôn các mặt hàng Laptop và phụ kiện; từng bước mở rộng sản xuất kinh doanh kinh doanh, xây dựng kênh dự án với các khách hàng Heong Leong Bank, Vietbank, Vietsov Petrol... làm việc với các hãng máy tính Acer, Lenovo, HP, phần mềm Utodesk, Autodesk, Oracle, Microsoft, APC, Bitdefender; liên kết bán hàng của các hãng điện thoại lớn như Samsung, Oppo, Nokia...
Đại tá Đỗ Ngọc Cường, nguyên Giám đốc Công ty chia sẻ: Vào năm 2010, thị trường sản phẩm công nghệ thông tin phát triển mạnh mẽ. Nhận thấy tiềm năng “làm đại lý bán buôn” sản phẩm này là rất lớn. Mặt khác, lúc đó tôi thấy rất nhiều nhà phân phối sản phẩm này mở ra trên khắp cả nước. Có rất nhiều nhà phân phối lớn như của FPT, VNPT; nên tôi đã chỉ đạo cơ quan nghiên cứu, mở hướng kinh doanh mới này. Với quan điểm “mở ra là đi tắt đón đầu, làm lớn luôn”. Tôi hỏi đồng chí Trương Văn Cao, lúc đó chuẩn bị chuyển đơn vị là: Nếu lấy nhân lực kinh doanh phân phối thì tìm ở đâu? Đồng chí Cao đã giới thiệu đồng chí Nguyễn Quang Vinh và ekip làm phân phối của FPT. Tôi đã cử người đến gặp Vinh để thương thảo ekip này về làm kinh doanh phân phối cho Công ty, với những hứa hẹn ưu đãi. Sau đó đồng chí Nguyễn Quang Vinh và hơn 20 người đã vui vẻ đồng ý về đầu quân cho Công ty. Tôi rất mừng là Trung tâm Phân phối từ đó đến nay luôn ổn định và phát triển, là một trong những lĩnh vực kinh doanh lớn và có hiệu quả của Công ty Thương mại và Xuất nhập khẩu Viettel.       
`, img: "assets/images/viettel-1997.jpg", caption: "Khai trương tại châu Phi, 2011"
            },
            {
                year: "Ngày 25 và 26 tháng 6 năm 2010", milestone: "Đại hội Đảng bộ Công ty Thương mại và Xuất nhập khẩu Viettel lần thứ Hai, nhiệm kỳ 2010-2015", desc: `Ngày 25 và 26 tháng 6 năm 2010, Đảng bộ Công ty Thương mại và Xuất nhập khẩu Viettel tiến hành Đại hội lần thứ 2, nhiệm kỳ 2010-2015. Tới dự và chỉ đạo Đại hội có các đồng chí trong Ban Thường vụ Đảng ủy Tập đoàn, các đại biểu cơ quan cấp trên và đông đủ đảng viên trong Đảng bộ Công ty. Nghị quyết Đại hội khẳng định: Trong nhiệm kỳ qua, mặc dù kinh tế đất nước bị ảnh hưởng nặng nề bởi suy thoái kinh tế; thị trường viễn thông trong nước cạnh tranh ngày càng gay gắt và khốc liệt, nhưng Đảng bộ Công ty đã quán triệt sâu sắc các chỉ thị, nghị quyết của Đảng và Đảng ủy Tập đoàn, nắm chắc đặc điểm nhiệm vụ của đơn vị, lãnh đạo Công ty đạt và vượt những mục tiêu mà Đại hội Đảng bộ lần thứ nhất đã đề ra; hoàn thành xuất sắc nhiệm vụ sản xuất kinh doanh và hoàn thành tốt các nhiệm vụ được giao. Công ty có bước trưởng thành, phát triển; năng lực lãnh đạo và sức chiến đấu của Đảng bộ được nâng lên, đáp ứng yêu cầu nhiệm vụ.
Đại hội đã xác định phương hướng, mục tiêu chung trong nhiệm kỳ tới là: Quán triệt sâu sắc nghị quyết đại hội Đảng các cấp, Nghị quyết Đại hội lần thứ 8 của Đảng bộ Tập đoàn, đẩy mạnh sản xuất kinh doanh, phấn đấu đến năm 2015 Công ty trở thành nhà bán lẻ thiết bị đầu cuối số 1 tại Việt Nam (chiếm 30% thị phần điện thoại di động), là nhà phân phối các sản phẩm điện tử viễn thông, công nghệ thông tin hàng đầu Việt Nam.
Xây dựng Đảng bộ Công ty vững mạnh về chính trị, tư tưởng và tổ chức; nâng cao năng lực lãnh đạo và sức chiến đấu của các cấp ủy Đảng; xây dựng đội ngũ cán bộ đảng viên có phẩm chất, bản lĩnh chính trị, đạo đức tốt, có trình độ năng lực chuyên môn ngày càng cao, đáp ứng yêu cầu phát triển của Công ty. Xây dựng Công ty vững mạnh toàn diện, phát triển bền vững.
Đại tá Đỗ Ngọc Cường, Phó Bí thư Đảng ủy, Giám đốc Công ty nhận định: “Năm 2010, Công ty đã trở thành đơn vị có doanh thu và lợi nhuận lớn nhất trong số các Công ty hạch toán độc lập trong đội hình Tập đoàn. Trước khi tổ chức Đại hội, Hệ thống bán lẻ đã phát triển cán mốc 100 siêu thị. Công ty lại vừa phát triển thêm lĩnh vực phân phối, Tập đoàn đưa toàn bộ hoạt động dịch vụ viễn thông từ Công ty Viễn thông Viettel về. Nên tôi thấy tự tin lắm; tôi chỉ đạo phải chuẩn bị kỹ văn kiện đại hội với phần phương hướng phải đặt mục tiêu cao để phấn đấu và phải tổ chức Đại hội thật hoành tráng. Đại hội năm đó đã thành công tốt đẹp. Nhưng mục tiêu đến năm 2015 “trở thành nhà bán lẻ thiết bị đầu cuối số 1 tại Việt Nam” thì vẫn chưa đạt được. Nhưng không sao, đặt mục tiêu cao mà ta phấn đấu tiệm cận mục tiêu đó là tốt rồi”. 
`, img: "assets/images/viettel-1997.jpg", caption: "Viện R&D ra đời, 2012"
            },
            {
                year: "Năm 2012", milestone: ", Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Ba", desc: `Ngày 10 tháng 4 năm 2012, Tại Hội trường Bộ Tư lệnh Thủ đô Hà Nội, Công ty long trọng tổ chức Lễ kỷ niệm 15 năm ngày truyền thống Công ty và đón nhận Huân chương Lao động Hạng Ba; tới dự có Trung tướng Hoàng Anh Xuân, Tổng giám đốc Tập đoàn, Thiếu tướng Dương Văn Tính, Bí thư Đảng ủy Phó Tổng Giám đốc Tập đoàn cùng các đồng chí trong thường vụ Đảng ủy, Ban Tổng Giám đốc Tập đoàn, đại biểu lãnh đạo cán bộ các Phòng, Ban Trung tâm, đơn vị trực thuộc đoàn; các đồng chí trong Đảng ủy Ban Giám đốc Công ty cùng đông đảo đại biểu các cơ quan đơn vị trong Công ty. Đọc diễn văn tại buổi Lễ, Đại tá Đỗ Ngọc Cường, Giám đốc Công ty nhấn mạnh: “15 năm xây dựng và phát triển, từ một Phòng Xuất nhập khẩu nhỏ bé; vừa làm vừa học hỏi, phát triển thành Trung tâm Xuất nhập khẩu, rồi phát triển thành Công ty; triển khai nhiệm vụ sản xuất kinh doanh trong cơ chế thị trường. Trên chặng đường ấy, Công ty Thương mại và Xuất nhập khẩu Viettel được biết đến như là một công ty truyền thống của Tập đoàn Viễn thông Quân đội. Bằng nghiệp vụ xuất nhập khẩu thiết bị viễn thông, công nghệ thông tin, Công ty đã phối hợp cùng các cơ quan đơn vị có những đóng góp quan trọng trong việc xây dựng hạ tầng viễn thông, nền móng để xây dựng nên ngôi nhà Viettel hùng mạnh ngày nay. Công ty đã và đang xây dựng kênh phân phối rộng khắp cả nước là các siêu thị Viettel có mặt xuống đến địa bàn huyện quận, là hình ảnh, cầu nối của Viettel với đông đảo khách hàng và nhân dân…”.
Thừa ủy quyền của trên, thay mặt Đảng ủy, Ban Tổng Giám đốc Tập đoàn, Trung tướng Hoàng Anh Xuân đã trao tặng, gắn Huân chương Lao động Hạng Ba lên quân kỳ quyết thắng và trao tặng, gắn Huân chương Lao động Hạng Ba cho cá nhân Đại tá Đỗ Ngọc Cường trong tiếng nhạc hùng tráng.
Buổi Lễ mít tinh diễn ra trong không khí vui tươi phấn khởi, đoàn kết, thiết thực động viên cán bộ, công nhân viên toàn Công ty tiếp tục ra sức thi đua giành những thắng lợi mới trong thời gian tới.
Phát biểu tại buổi Lễ, Đại tá Đỗ Ngọc Cường chia sẻ: “15 năm xây dựng và phát triển, từ một Phòng Xuất nhập khẩu nhỏ bé; vừa làm vừa học hỏi, phát triển thành Trung tâm Xuất nhập khẩu, rồi phát triển thành Công ty; triển khai nhiệm vụ sản xuất kinh doanh trong cơ chế thị trường. Trên chặng đường ấy, Công ty Thương mại và Xuất nhập khẩu Viettel được biết đến như là một công ty truyền thống của Tập đoàn Viễn thông Quân đội. Bằng nghiệp vụ xuất nhập khẩu thiết bị viễn thông, công nghệ thông tin, Công ty đã phối hợp cùng các cơ quan đơn vị có những đóng góp quan trọng trong việc xây dựng hạ tầng viễn thông, nền móng để xây dựng nên ngôi nhà Viettel hùng mạnh ngày nay. Công ty đã và đang xây dựng kênh phân phối rộng khắp cả nước là các siêu thị Viettel có mặt xuống đến địa bàn huyện quận, là hình ảnh, cầu nối của Viettel với đông đảo khách hàng và nhân dân…Thành tích nhỏ bé của cá nhân tôi chính là do có thành tích chung của Tập thể Đảng ủy và Ban Giám đốc Công ty cùng cán bộ, công nhân viên toàn Công ty ”.
`, images: [
                    { src: "assets/images/17 - các đc lãnh đạo, nguyên lãnh đạo Cty nhận bằng khen của Tập đoàn đã có thành tích đóng góp cho Cty trong 15 năm tại lễ đón nhân ..niệm 15 năm thập.jpg", caption: "Các đồng chí lãnh đạo, Nguyên lãnh đạo Công ty nhận bằng khen của Tập đoàn đã có thành tích đóng góp cho Công ty trong 15 năm tại lễ đón nhận kỷ niệm 15 năm thành lập Công ty" },
                    { src: "assets/images/17 - sự kiện 17 Đc Đỗ Ngọc Cường Nguyên GĐ Cty, Đc Nguyễn Văn Thanh Nguyên PGĐ nhận Quyết Huân Chương lao động hạng ba trao cho Cty năm 2012 nhân kỷ niệm 15 năm thập .jpg", caption: "Sự kiện đồng chí Đỗ Ngọc Cường - Nguyên Giám đốc Công ty, đồng chí Nguyễn Văn Thanh - Nguyên Phó Giám đốc nhận Quyết Huân Chương lao động hạng Ba trao cho Công ty năm 2012 nhân kỷ niệm 15 năm thành lập" },
                ]
            },
            {
                year: "Tháng 01 năm 2013", milestone: "Sáp nhập Công ty Phát triển dịch vụ mới vào Công ty Thương mại và Xuất nhập khẩu Viettel", desc: `Thực hiện chủ trương tái cơ cấu tổ chức của Tập đoàn, với mục đích tối ưu lại cơ cấu bộ máy tổ chức và ngành nghề, nhằm nâng cao hiệu quả sản xuất kinh doanh; ngày 23 tháng 11 năm 2012 Tổng Giám đốc Tập đoàn ban hành quyết định số 2219/QĐ-VTQĐ-TCNL điều chuyển nguyên trạng Công ty Phát triển dịch vụ mới Viettel về Công ty Thương mại và Xuất nhập khẩu Viettel. Theo Quyết định của Tập đoàn, Công ty Thương mại và Xuất nhập khẩu có nhiệm vụ trên cơ sở mô hình thực tế của 2 đơn vị, lập tờ trình đề xuất mô hình mới của Công ty.
Ngày 14 tháng 1 năm 2013, Tổng Giám đốc Tập đoàn ký Phê duyệt Tờ trình số 64/TTr-XNK về việc tổ chức sắp xếp lại bộ máy Công ty Thương mại và Xuất nhập khẩu Viettel và giao nhiệm vụ cho cán bộ theo mô hình mới. 
Sau khi có quyết định của Tập đoàn, Đảng ủy Ban Giám đốc Công ty xác định nhiệm vụ trọng tâm là nhanh chóng ổn định mô hình tổ chức và tình hình chính trị, tư tưởng. Đảng ủy Ban Giám đốc Công ty đã họp thống nhất chủ trương, bàn biện pháp tổ chức thực hiện, chỉ đạo Phòng Tổ chức lao động nhanh chóng xây dựng phương án sắp xếp lại mô hình tổ chức với phương châm không gây xáo trộn lớn trong từng lĩnh vực, không ảnh hưởng lớn đến sản xuất kinh doanh, nhanh chóng ổn định tư tưởng cán bộ công nhân viên. Đồng thời rà soát củng cố lại các quy chế, quy định để Công ty ổn định bộ máy tập trung cao cho sản xuất kinh doanh.
Đại tá Nguyễn Văn Thanh, chia sẻ: “Ở thời điểm sáp nhập 2 đơn vị, tôi là Bí thư Đảng ủy, Phó Giám đốc Công ty. Ngay từ khi Tập đoàn có quyết định sáp nhập (từ tháng 11 năm 2012); Đảng ủy Công ty đã ra nghị quyết chuyên đề về công tác sáp nhập, coi đây là một nhiệm vụ trọng yếu trong năm 2013. Thú thực ban đầu tôi và một số anh em trong Ban Giám đốc cũng có đôi chút lo lắng; vì một đơn vị hạch toán phụ thuộc sáp nhập vào đơn vị hạch toán độc lập; không dễ một sớm một chiều mà “đồng điệu” ngay được. Nhưng lo lắng chỉ là thoáng qua thôi! Không khí bao trùm là sự vui mừng vì được Tập đoàn tin tưởng giao nhiệm vụ. Điều quan trọng hơn là sau sáp nhập Công ty sẽ lớn lên về cả về bộ máy và quy mô sản xuất kinh doanh. Đảng ủy Ban Giám đốc Công ty phải tập trung lãnh đạo, chỉ đạo, giữ sự ổn định cả về chính trị, tư tưởng và tổ chức, tiếp tục đưa Công ty phát triển”.     
Sự kiện Công ty Phát triển dịch vụ mới Viettel sáp nhập vào Công ty Thương mại và Xuất nhập khẩu Viettel là một dấu mốc lịch sử quan trọng, vừa là ghi nhận của Tập đoàn về sự phát triển và trưởng thành của Công ty, đồng thời là một trọng trách mà Tập đoàn giao cho Công ty phải tiếp tục phát triển sản xuất kinh doanh trên các lĩnh vực kinh tế ngoài viễn thông.
`, img: "assets/images/viettel-1997.jpg", caption: "100 triệu thuê bao, 2014"
            },
            {
                year: "Tháng 6 năm 2014", milestone: "Chính thức tiếp nhận và tổ chức sản xuất kinh doanh ngành in", desc: `Ngày 03 tháng 07 năm 2008, Dự án Đầu tư dây chuyền in công nghiệp với quy mô 1.000 triệu trang in/ năm của Công ty Thu cước và Dịch vụ Viettel, thuộc Tổng Công ty Viễn thông Quân đội Viettel (nay là Tập đoàn Công nghiệp –Viễn thông Quân đội) được Ban Quản lý Khu Công nghiệp và Chế xuất Hà Nội cấp giấy chứng nhận số : 01221000134. Đây là mốc son lịch sử, đánh dấu sự ra đời của Nhà máy in Viettel.
Tọa lạc tại Lô B2-3-2 Khu Công nghiệp Nam Thăng Long, Phường Thụy Phương, Quận Bắc Từ Liêm, Hà Nội, trên diện tích 12.000 m2, Nhà máy in Viettel được đầu tư xây dựng nhà xưởng, hệ thống máy móc thiết bị in ấn, gia công cùng với cơ sở vật chất kỹ thuật đồng bộ, hiện đại bậc nhất Đông Nam Á.
Tháng 1 năm 2013, Công ty Phát triển Dịch vụ mới thực hiện sáp nhập vào Công ty Thương mại và Xuất nhập khẩu. Trung tâm Điều hành kinh doanh In và 2 nhà máy in Viettel cũng được sáp nhập về. Nhưng đến tháng 4 năm 2013, Tập đoàn chủ trương thành lập Ban Quản lý Điều hành các dự án thuộc Tập đoàn và lại điều chuyển Trung tâm Điều hành Kinh doanh in cùng 02 Nhà máy in Viettel Hà Nội và Nhà máy in Viettel Hồ Chí Minh; Trung tâm nghiên cứu, phát triển Ứng dụng Thẻ thông minh và các bộ phận có liên quan về trực thuộc Ban Quản lý Điều hành các dự án thuộc Tập đoàn. 
Đến tháng 6 năm 2014 Tập đoàn Viễn thông Quân đội thực hiện tái cơ cấu, điều chuyển Trung tâm Điều hành kinh doanh in cùng 02 Nhà máy in Viettel Hà Nội và Nhà máy in Viettel Hồ Chí Minh và Trung tâm Thẻ thông minh thuộc Ban Quản lý Điều hành dự án Tập đoàn về trực thuộc Công ty với quan điểm là: tách hoạt động đầu tư, triển khai các dự án của Tập đoàn với hoạt động sản xuất kinh doanh của dự án đó sau khi đi vào hoạt động.
Từ tháng 6 năm 2014, Công ty chính thức tiếp nhận và tổ chức sản xuất kinh doanh ngành in.
Mặc dù phải điều chuyển đi, điều chuyển lại nhiều lần, song ngành in vẫn giữ được ổn định và từng bước phát triển.   
Việc Trung tâm Điều hành kinh doanh in và 02 nhà máy in được Tập đoàn đưa về đội hình Công ty là một sự kiện lịch sử quan trọng. Đây  là một lĩnh vực mới, đánh dấu bước vào một thời kỳ mới; thời kỳ Công ty không chỉ kinh doanh thương mại thuần túy mà còn là một đơn vị sản xuất công nghiệp in. Từ nay, mảng sản xuất in cũng là một lĩnh vực mới đòi hỏi đội ngũ cán bộ, nhân viên phải nâng cao trình độ quản lý, quản trị doanh nghiệp, vận hành sản xuất có hiệu quả, từng bước nâng cao thương hiệu Viettel trong lĩnh vực in ấn. 
Dưới sự lãnh đạo, chỉ đạo, tạo điều kiện của Đảng ủy, Ban Giám đốc Công ty, Tập đoàn, Nhà máy in Viettel luôn đoàn kết, thống nhất, tập trung trí tuệ, tích cực hành động, xây dựng đội ngũ cán bộ trẻ, năng động, nhiệt tình, có tay nghề cao, từng bước nắm bắt kỹ thuật tiên tiến, làm chủ hệ thống thiết bị máy móc, tích cực thâm nhập thị trường, khẳng định năng lực và khác biệt của ngành in Viettel, đã sản xuất các sản phẩm thẻ cào bảo mật với chất lượng, số lượng ngày càng cao, đáp ứng yêu cầu của Tổng Công ty Viễn thông Viettel và các thị trường Viettel kinh doanh; đồng thời tích cực phát triển khách hàng, phát triển sản phẩm, đa dạng hóa sản phẩm in, với 02 hệ thống in Offset và in Flexo, đáp ứng yêu cầu chất lượng sản phẩm ngày càng cao của khách hàng, doanh thu hàng năm tăng trưởng 05-10%, tỉ trọng doanh thu bên ngoài/ nội bộ tiệm cận 80%/20%. 
Để tìm hiểu sâu hơn về Lịch sử và quá trình phát triển Nhà máy In, Ban Biên tập có phỏng vấn ngắn với Thượng tá Lương Thế Quang, Nguyên Giám đốc Nhà máy In (sau này là Đại tá, Bí thư Đảng ủy, Phó Tổng Giám đốc Tổng Công ty, nghỉ hưu năm 2026).
Hỏi: Khi được điều động về công tác tại Nhà máy In Viettel, anh ấn tượng nhất điều gì?
Thượng tá Lương Thế Quang: Sau khi nhà máy đi vào sản xuất, năm 2009, tôi được vinh dự về đầu quân cho Viettel. Lúc bấy giờ thương hiệu Viettel đang “nổi”, hệ thống máy móc lại hiện đại nhất Đông Nam Á lúc bấy giờ. Số được tuyển dụng đều trẻ khỏe được đào tạo cơ bản, có năng lực và nhiệt huyết nên anh em lấy làm vinh dự lắm, làm ngày làm đêm không biết mệt. Khi đó, Ngành In luôn là lĩnh vực chủ lực, chiếm doanh thu trọng yếu trong các dự án của Công ty Phát triển dịch vụ mới. 
Hỏi: Vậy từ khi sáp nhập về Công ty Thương mại và Xuất nhập khẩu, ngành In có khó khăn, thuận lợi gì? 
Nhà máy In Viettel sáp nhập về Công ty Thương mại và Xuát nhập khẩu; về nhiệm vụ thì không có gì thay đổi cả vì điều chuyển nguyên trạng. Song đó là thời kỳ ngành in chịu áp lực rất lớn trong bối cảnh ngành In nước ta phát triển mạnh mẽ. Tuy nhiên được Đảng ủy, Ban Giám đốc Công ty rất quan tâm sâu sát; chúng tôi đã thay đổi, bổ sung hàng loạt các quy trình quy chế để phù hợp với một Công ty hạch toán độc lập. Đặc biệt từ năm 2017, khi Tập đoàn và Công ty thực hiện tái cơ cấu, chúng tôi được tự chủ nhiều hơn và có điều kiện mở mang sản xuất ra bên ngoài. Từ đó chúng tôi mới thực sự “cất cánh”; mới được nhiều bạn hàng biết đến và vì thế doanh thu và lợi nhuận hàng năng đều tăng lên.
`, img: "assets/images/viettel-1997.jpg", caption: "Thử nghiệm 4G, 2015"
            },
            { year: "Ngày 28 tháng 4 năm 2015", milestone: "Đại hội đại biểu Đảng bộ Công ty lần thứ III nhiệm kỳ 2015-2020", desc: `Đảng bộ Công ty được Đảng ủy Tập đoàn chọn là Đại hội điểm, làm trước để rút kinh nghiệm cho toàn Đảng bộ Tập đoàn. Tới dự và chỉ đạo Đại hội, có đồng chí Thiếu tướng Nguyễn Mạnh Hùng, Phó Bí thư Đảng ủy, Tổng Giám đốc Tập đoàn (sau này là Ủy viên Trung ương Đảng, Ủy viên Quân ủy Trung ương, Bộ trưởng Bộ Khoa học và Công nghệ, nghỉ hưu năm 2026). Phát biểu chỉ đạo Đại hội, đồng chí Nguyễn Mạnh Hùng nhấn mạnh: “Phương hướng mục tiêu lãnh đạo Công ty Thương mại và Xuất nhập khẩu trong 5 năm tới được xác định là Tổng Công ty Thương mại và dịch vụ, tập trung vào thương mại điện tử và thương mại quốc tế. Công ty cũng phải trở thành một doanh nghiệp toàn cầu, cũng phải ra biển lớn, cạnh tranh quốc tế. Bởi chỉ có thể bằng cách cạnh tranh với những người mạnh nhất mà trở lên mạnh nhất”. Đại hội Đảng bộ Công ty nhiệm kỳ 2015-2020 xác định phương hướng nhiệm vụ nhiệm kỳ tới là lấy “bền bỉ, mạnh mẽ, linh hoạt, len lỏi” của “triết lý nước” làm nền tảng cho các hoạt động; lấy “tận tụy” là tiêu chí quan trọng đối với công nhân viên; lấy “khác biệt” làm sức mạnh trong cạnh tranh. Thực hiện thành công các mục tiêu,  nhiệm vụ chiến lược theo hướng “Đột phá - Khác biệt - Bền vững”, xây dựng Công ty trở thành Tổng Công ty hùng mạnh. Xác định kinh doanh bán lẻ là nền tảng, thương mại điện tử và thương mại quốc tế là nòng cốt cho sự phát triển. Xây dựng Công ty vững mạnh toàn diện, có môi trường làm việc “thân thiện, đoàn kết, nghĩa tình, hạnh phúc, Viettelimex là một gia đình”.`, img: "assets/images/viettel-1997.jpg", caption: "Top 500 thương hiệu toàn cầu, 2016" },
            {
                year: "Năm 2017", milestone: "Công ty được Đảng, Nhà nước trao tặng Huân chương lao động Hạng Nhì", desc: `Ngày 08 tháng 4 năm 2017, Công ty long trọng tổ chức Lễ kỷ niệm 20 năm ngày truyền thống Công ty và đón nhận Huân chương lao động Hạng Nhì với thông điệp “Biết ơn, tri ân thế hệ đi trước, đổi mới, tự cường xây dựng Công ty phát triển và phát triển bền vững”. Tới dự buổi Lễ có Thiếu tướng Nguyễn Mạnh Hùng, Phó Bí thư Đảng ủy, Tổng Giám đốc Tập đoàn; Thiếu tướng Lê Đăng Dũng, Bí thư Đảng ủy, Phó Tổng Giám đốc (sau này là Chủ tịch, kiêm Tổng Giám đốc Tập đoàn thay cho Thiếu tướng Nguyễn Mạnh Hùng chuyển công tác) cùng đông đảo cán bộ chỉ huy các cơ quan đơn vị trong Tập đoàn; các đồng chí trong Đảng ủy, Ban Giám đốc Công ty; cùng đông đảo cán bộ, nhân viên trong Công ty. Thiếu tướng Nguyễn Mạnh Hùng, Thừa ủy quyền của trên đã trao tặng và gắn Huân Chương Lao động Hạng Nhì lên Quân kỳ Quyết thắng. Phát biểu tại buổi lễ, đồng chí Nguyễn Mạnh Hùng nhấn mạnh: Phần thưởng Huân chương mà Đảng Nhà nước trao tặng là thành tích xứng đáng mà Công ty đã phấn đấu có được. Nhưng chúng ta không ngủ quên trên chiến thắng. Chặng đường phía trước của Công ty Thương mại và Xuất nhập khẩu còn dài và nhiều khó khăn thử thách. Ngành bán lẻ ở Việt Nam chưa phát triển mạnh và còn rất nhiều cơ hội cho Công ty. Công ty phải trở thành một Tổng Công ty thương mại và dịch vụ và trở thành một Công ty toàn cầu. 
Nhứng lời huấn thị của đồng chí Tổng Giám đốc Tập đoàn năm đó là định hướng với tầm cao mới mà Công ty đã và đang tiếp tục phấn đấu.
Đây là một mốc son lịch sử; đánh dấu sự ghi nhận của Tập đoàn, Quân đội; sự ghi nhận  Đảng, Nhà nước ta đối với thành tích của Công ty trong quá trình xây dựng và phát triển. 
`, images: [
                    { src: "assets/images/21 - sự kiên 21 Nguyên UVTWĐ Đảng Tổng Giám đốc Tập đoàn  Nguyễn Mạnh Hung trao Huy Trương Lao động hạng nhì .jpg", caption: "Sự kiện Nguyên Ủy viên Trung ương Đảng Tổng Giám đốc Tập đoàn Nguyễn Mạnh Hùng trao Huy Chương Lao động hạng Nhì " },
                    { src: "assets/images/21 Trao thưởng bằng khen cho các cá nhân có thành tích đóng góp 20 năm.jpg", caption: "Trao thưởng bằng khen cho các cá nhân có thành tích đóng góp 20 năm" },
                ]
            },
            {
                year: "Ngày 28 và 29 tháng 5 năm 2020", milestone: "Đại hội đại biểu Đảng bộ Công ty lần thứ IV, nhiệm kỳ 2020 - 2025", desc: `Trong hai ngày 28 và 29 tháng 5 năm 2000, Đảng ủy Công ty Thương mại và Xuất nhập khẩu tổ chức Đại hội Đại biểu nhiệm kỳ (2020-2025). Tham dự, có 100 đại biểu thay mặt cho 221 đảng viên trong toàn Đảng bộ.
Chủ đề của Đại hội là: “Nâng cao năng lực lãnh đạo, sức chiến đấu của Đảng bộ, xây dựng Công ty vững mạnh toàn diện, thực hiện thắng lợi nhiệm vụ phát triển Công ty thành Tổng công ty thương mại và dịch vụ số”.
Đại hội đã kiểm điểm kết quản lãnh đạo, chỉ đạo, tổ chức thực hiện nhiệm vụ trong những năm qua và đề ra những phương hướng nhiệm vụ chủ yếu nhiệm kỳ 2020-2025. Trọng tâm là: Nâng cao năng lực lãnh đạo, sức chiến đấu của Đảng bộ, đổi mới tư duy, hành động, thực hiện thành công 6 nhiệm vụ chiến lược trong kinh doanh bán lẻ, phân phối, xuất nhập khẩu, sản phẩm mới, in, thương mại điện tử theo hướng “Đột phá-Khác biệt-Bền vững”. Trong đó xác định: Kinh doanh Bán lẻ là nòng cốt. Phát triển mạnh kinh doanh Thương mại Điện tử. Từng bước dịch chuyển từ bán hàng trên kênh siêu thị, cửa hàng sang bán Thương mại điện tử. Xuất khẩu sản phẩm của Viettel ra nước ngoài và kinh doanh phân phối, bán lẻ tại thị trường nước ngoài là bước đột phá. Xuất khẩu hàng hóa tới 3-5 quốc gia. Xây dựng Công ty vững mạnh toàn diện, có môi trường làm việc “thân thiện, văn minh, nghĩa tình, Viettelimex là một gia đình”. Xây dựng Đảng bộ trong sạch vững mạnh; nâng cao năng lực lãnh đạo và sức chiến đấu của các cấp ủy, tổ chức đảng các cấp; xây dựng đội ngũ đảng viên có phẩm chất và bản lĩnh chính trị, đạo đức tốt, có trình độ năng lực chuyên môn ngày càng đáp ứng yêu cầu phát triển của Công ty. 
Đại hội Đảng bộ Công ty Thương mại và Xuất nhập khẩu Viettel thành công tốt đẹp đã lan tỏa một khí thế mới, niềm tin mới về một nhiệm kỳ mới Công ty tiếp tục trên đà phát triển trong thời kỳ chuyển dịch số của cách mạng công nghiệp 4.0. 
Đại tá Đặng Hồng Thái (nguyên Bí thư Đảng ủy Công ty) chia sẻ: Là một công ty hạch toán độc lập, Công ty thường xuyên phải đối mặt với nhiều khó khăn thách thức trong thương trường. Truyền thống Công ty chúng ta là một công ty luôn coi trọng nghĩa tình, đoàn kết trên dưới một lòng, sống có trách nhiệm với nhau vì nhiệm vụ chung. Việc xây dựng môi trường làm việc “thân thiện, văn minh, nghĩa tình, như một gia đình” là một việc rất quan trọng; là động lực thúc đẩy sản xuất kinh doanh. Vì thế nên khi chuẩn bị văn kiện, tôi đã đề nghị Đảng ủy đưa ý này vào Nghị quyết Đại hội và được đông đảo cán bộ Đảng viên đồng tình, ủng hộ.
Đó là những nét đẹp truyền thống mà lớp lớp cán bộ, đảng viên, công nhân viên trong toàn Đảng bộ, toàn Công ty cần trân trọng gìn giữ và phát huy. 
`, images: [
                    { src: "assets/images/22- Đc Lương Thế Qâng  tham luận tại Hội nghị Đảng bộ Cty lần thứ VI năm 2020.jpg", caption: "Đồng chí Lương Thế Quang - Nguyên Bí thư Đảng ủy, Phó Tổng Giám đốc Tổng Công ty tham luận tại Hội nghị Đảng bộ Công ty lần thứ IV năm 2020" },
                    // { src: "assets/images/22- DDc Nguyễn Anh Tuấn Nguyên Phó GĐ Cty tham luận tại Hội nghị.jpg", caption: "Đồng chí Nguyễn Anh Tuấn - Nguyên Phó Giám đốc Công ty tham luận tại Hội nghị" },
                    { src: "assets/images/22- Sự kiên 22 BCH Đảng bộ được bầu tại Đại hội Đảng bộ lần thứ IV năm 2020.jpg", caption: "Sự kiện 22 Ban chấp hành Đảng bộ được bầu tại Đại hội Đảng bộ lần thứ IV năm 2020" },

                ]
            },
            {
                year: "Ngày 12 tháng 8 năm 2020", milestone: "Thành lập Trung tâm Dịch vụ Công nghệ thông tin", desc: `Ngày 03 tháng 8 năm 2018, trong buổi Lễ bàn giao chức danh Chủ tịch kiêm Tổng Giám đốc Tập đoàn, Thiếu tướng Lê Đăng Dũng chính thức đảm nhận chức vụ Quyền Chủ tịch kiêm quyền Tổng Giám đốc Tập đoàn thay Thiếu tướng Nguyễn Mạnh Hùng nhận nhiệm vụ là Bộ trưởng Bộ Thông tin và Truyền thông; Viettel đã công bố chuyển sang giai đoạn mới, giai đoạn cách mạng công nghiệp lần thứ tư (công nghiệp 4.0); mở ra chương mới cho Viettel bước vào thời kỳ công nghệ số.
Năm 2019, Đảng ủy, Ban Giám đốc Tập đoàn xác định: một trong những nhiệm vụ trọng điểm của Viettel, đồng thời cũng là mục tiêu, là quyết tâm của Viettel trong năm 2019 và những năm tới, đó là Viettel “lĩnh ấn tiên phong” trong công nghệ 4.0 và sứ mệnh của Viettel là “kiến tạo số”. 
Năm 2020 là năm được Bộ Thông tin và Truyền thông chọn là “Năm chuyển đổi số quốc gia”, Bộ tiếp tục có những chính sách đột phá nhằm thúc đẩy chuyển dịch hạ tầng viễn thông sang hạ tầng ICT, phát triển hạ tầng số đồng bộ hiện đại để thúc đẩy chuyển đổi số. 
Nghị quyết Đảng ủy Tập đoàn xác định năm 2020 là năm bản lề để Viettel thực hiện chuyển dịch số.  
Thiếu tướng Lê Đăng Dũng, nguyên quyền Chủ tịch kiêm Quyền Tổng Giám đốc Tập đoàn nêu quan điểm: Cách mạng 4.0 dựa rất nhiều vào viễn thông và công nghệ thông tin. Và đây là lĩnh vực mà Viettel có thế mạnh. Với tư cách là một tập đoàn lớn trong lĩnh vực viễn thông và công nghệ thông tin, Viettel luôn nhận thức rõ ràng về trách nhiệm của mình trong việc tạo ra hạ tầng và nền tảng cho cuộc Cách mạng 4.0 ở Việt Nam. Viettel có thế mạnh và chuyên môn của mình. Do đó, Viettel phải tiên phong trong kiến tạo xã hội số ở Việt Nam.
Tuyên bố sứ mệnh của Viettel là “Kiến tạo xã hội số”, Quyền Chủ tịch kiêm Tổng Giám đốc Tập đoàn còn cho rằng: Viettel đang làm tốt phần nền tảng, hạ tầng và tạo ra chuyển đổi số mạnh mẽ trong lĩnh vực của mình. Tuy nhiên, để tham gia vào cách mạng 4.0, Viettel phải phá hủy nhiều những thứ đã tồn tại trước đó. Muốn thế, tư duy cũng phải rất mạnh dạn, chấp nhận phá hủy những cái đã có. Chính sách và thể chế phải chấp nhận cái mới. Viettel đặt cho mình 02 nhiệm vụ: Tạo ra các sản phẩm chuẩn công nghệ 4.0 theo đúng định hướng của mình, hai là thể hiện tiếng nói và góp phần thúc đẩy thể chế đi nhanh hơn, chính phủ số đi nhanh hơn.
Quyền Chủ tịch kiêm Tổng Giám đốc Tập đoàn còn nói: Chúng ta cũng cần phải phá hủy cách làm cũ. Bán hàng trong thời đại này là khách hàng phải được trải nghiệm, để họ thích sản phẩm của mình rồi mới mua sản phẩm của mình. Sản phẩm phải liên lục update, cải tiến liên tục, để nó vừa ổn định lại vừa liên tục tiến hóa. 
	Thực hiện chỉ đạo của Đảng ủy, Ban Tổng Giám đốc Tập đoàn, mà trực tiếp là Đại tá Đỗ Minh Phương, Phó Tổng Giám đốc Tập đoàn (sau này là Thiếu tướng Đỗ Minh Phương, Phó Tổng Giám đốc Tập đoàn kiêm Chủ tịch Tổng Công ty), định hướng cho Công ty Thương mại và Xuất nhập khẩu Viettel phải trở thành Công ty thương mại có hàm lượng công nghệ chiếm tỷ trọng cao, thay đổi chất trong hiệu quả hoạt động, đồng thời tạo thêm chân kiềng mới cùng với bán lẻ, phân phối và nghành nghề truyền thống giúp Công ty phát triển bển vững…
Sau thời gian chuẩn bị các nguồn lực, ngày 17 tháng 8 năm 2020, tại trụ sở Công ty, Công ty công bố thành lập Trung tâm Dịch vụ Công nghệ thông tin. Phát biểu tại buổi lễ ra mắt Trung tâm Dịch vụ Công nghệ thông tin , Trung tá Phạm Văn Hùng, Giám đốc Công ty nhận định: “Việc thành lập Trung tâm Dịch vụ Công nghệ thông tin đánh dấu cho bước chuyển mình của Viettelimex trong giai đoạn tiếp theo. Lĩnh vực sản xuất gia công phần mềm có mối quan hệ chặt chẽ trong hệ sinh thái dịch vụ Viettel và sẽ tạo động lực tăng trưởng mới cho Công ty. Với việc đưa thêm ngành nghề mới vào kinh doanh, Viettelimex được Tập đoàn chuyển từ nhóm các công ty truyền thống sang nhóm các công ty chuyển đổi số”.
	Trung tâm Dịch vụ Công nghệ thông tin có nhiệm vụ phát triển dịch vụ gia công phần mềm theo nhu cầu của khách hàng cả trong và ngoài Viettel. Bắt đầu kinh doanh thị trường ngoài Viettel từ năm 2023, đến năm 2025 cơ cấu doanh thu trong/ngoài Viettel là 70:30. 
	Trung tâm hoạt động trên 3 lĩnh vực kinh doanh chính: Hoạt động sản xuất và gia công phần mềm; Hoạt động đào tạo nhân sự; Hoạt động cung ứng nhân sự chất lượng cao.
	Mục tiêu phấn đấu đến năm 2025, Công ty xác định phát triển Trung tâm Dịch vụ Công nghệ thông tin trở thành một Công ty sản xuất và gia công phần mềm có tên trong danh sách top 10 công ty hàng đầu Việt Nam về doanh thu và phát triển công nghệ, với 1100 tỷ doanh thu, 173 tỷ lợi nhuận trước thuế và gần 2300 nhân sự.
Thiếu tá Nguyễn Đức Cường, Phó Giám đốc Công ty kiêm Giám đốc Trung tâm Dịch vụ Công nghệ thông tin tâm sự:
	Hiện các ngành nghề kinh doanh truyền thống của Công ty đang dần bão hòa, và kinh doanh gặp nhiều khó khăn, thách thức; việc thành lập Trung tâm Dịch vụ Công nghệ thông tin ra đời hy vọng sẽ giúp Công ty chuyển đổi về lĩnh vực kinh doanh bám theo xu thế chuyển dịch số của thế giới và chiến lược chuyển dịch số của Tập đoàn, từ đó phát triển bền vững hơn trong tương lai.
Thời đại ngày nay, công nghệ thông tin đang phát triển mạnh mẽ; vì thế dịch vụ công công nghệ thông tin cũng “nở rộ”, nhiều doanh nghiệp cũng đang mở mang dịch vụ này. Đây là thách thức không nhỏ trong đối với trung tâm. 
Khi được hỏi hiện nay Trung tâm cần nhất điều gì, đồng chí Nguyễn Đức Cường chia sẻ: Vấn đề lớn nhất hiện nay của Trung tâm là nhân sự, là vấn đề con người. Mình vừa cần người giỏi chuyên môn, lại cần phát triển, mở rộng quy mô nhân sự nhanh; có môi trường tốt để anh em yên tâm làm việc và sáng tạo. Các cụ bảo “nhất nghệ tinh…”. Vì vậy dịch vụ công nghệ thông tin của Công ty phải thực sự chuyên sâu trở thành một “nghề” mới mong “kiếm ăn” được. Cũng như nghề bán lẻ của Công ty, biết bao thăng trầm nay mới đứng vững được trên thương trường. Chỉ có điều, “nghề” của lĩnh vực này xác định phải “đi” nhanh hơn, nhanh chóng xác lập được “nghề” và chỗ đứng trên thương trường mới theo kịp được xu thế phát triển của công nghệ. 
`, images: [
                    { src: "assets/images/23 - Sự kiện 23 các đại biểu tham dự lễ ra mắt TTCNTT.jpg", caption: "Sự kiện các đại biểu tham dự lễ ra mắt Trung tâm Dịch vụ Công nghệ thông tin" },
                    { src: "assets/images/23 - Sự kiện 23; Công bố Quyết định thành lập TTCNTT và trao Quyết định cho đồng chí Nguyễn Đức Cường - Phó GDDCty kiêm GĐ Trung tâm .jpg", caption: "Sự kiện Công bố Quyết định thành lập Trung tâm Dịch vụ Công nghệ thông tin và trao Quyết định cho đồng chí Nguyễn Đức Cường - Phó Giám đốc Công ty kiêm Giám đốc Trung tâm" },
                ]
            },
            {
                year: "Ngày 17 tháng 5 năm 2021", milestone: "Nhận diện thương hiệu mới của Công ty", desc: `Từ ngày 17 tháng 5 năm 2021, tên nhận diện thương hiệu của Công ty chuyển từ Viettelimex thành Viettel Commerce.
Năm 2021, năm khởi đầu cho giai đoạn mới, khi Công ty Thương mại và Xuất nhập khẩu Viettel xác định tái cấu trúc, mục tiêu phát triển lên Tổng Công ty và cổ phần hóa một số lĩnh vực kinh doanh nhằm chuyển dịch thành công ty thị trường. Mục tiêu chiến lược là cùng Viettel kiến tạo xã hội số, do đó Công ty ưu tiên phát triển ngành nghề mới - dịch vụ công nghệ thông tin bằng cách cung cấp nhân sự chất lượng cao cho Tập đoàn và thị trường công nghệ thông tin, đồng thời thiết kế, sản xuất phần mềm. Đối với các ngành nghề truyền thống Công ty tập trung tối ưu chi phí, cải thiện hiệu quả sản xuất kinh doanh và giữ vững thị phần.
Với những định hướng trên, Công ty xác định thương hiệu Viettelimex không còn phù hợp cho việc phát triển trong giai đoạn mới khi chỉ thể hiện được lĩnh vực xuất nhập khẩu. Bởi vậy, việc thay đổi thương hiệu cho phù hợp với Công ty là điều tất yếu phải làm. Và Viettel Commerce là thương hiệu vừa bao quát được tất cả các ngành nghề vừa thể hiện được chiến lược kinh doanh mà Công ty đang hướng đến trong giai đoạn mới.
Tên nhận diện thương hiệu mới (Viettel Commerce) nhằm bao quát được ý nghĩa hoạt động các ngành nghề đang kinh doanh của Công ty theo định hướng của Tập đoàn mà tên nhận diện thương hiệu cũ (Viettelimex) chưa thể hiện đầy đủ. Mặt khác Viettel Commerce chuyển tải được ý nghĩa định hướng sản xuất kinh doanh trong thời kỳ phát triển mới, thời kỳ lấy lĩnh vực kinh doanh thương mại làm nòng cốt.
Thương hiệu Viettel Commerce có 03 giá trị cốt lõi là: Quan tâm, Sáng tạo và Khát khao. Trong đó, Khát khao là nhân tố thúc đẩy mạnh mẽ nguồn năng lượng, sức trẻ cho thương hiệu. Cả ba giá trị này được kết tinh trong 1 từ thể hiện cho triết lý thương hiệu là “Diversity” – Cộng hưởng tạo sự khác biệt.
Logo mới có màu sắc chủ đạo là màu đỏ với ý nghĩa của sự trẻ trung, khát khao, đam mê và năng động. Đây cũng là biểu trưng cho màu cờ tổ quốc, của niềm tự hào dân tộc, sự mạnh mẽ và bản lĩnh tiên phong của thương hiệu Viettel nói chung và Viettel Commerce nói riêng.
Thượng tá Nguyễn Anh Tuấn, Đảng ủy viên, Phó Giám đốc Công ty chia sẻ: “Giá trị cốt lõi của thương hiệu Viettel Commerce là “quan tâm, sáng tạo, khát khao”. Điều đó đúng vì giá trị này đề cập đến con người, chính là tài sản, là trung tâm của tổ chức, tạo ra cốt lõi của thương hiệu và lan tỏa thương hiệu. Trách nhiệm của Đảng ủy, Ban Giám đốc Công ty là phải xây dựng được đội ngũ cán bộ công nhân viên vừa hồng, vừa chuyên, luôn đoàn kết, an tâm, gắn bó vì nhiệm vụ chung, có khát khao cống hiến và sáng tạo. Đó là yếu tố cơ bản, cốt lõi để Công ty sự phát triển và phát triển bền vững”. 
`, img: "assets/images/viettel-1997.jpg", caption: "Vững vàng mùa dịch, 2020"
            },
            {
                year: "Năm 2022", milestone: `Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Nhất`, desc: `Báo cáo thành tích trình Hội đồng thi đua khen thưởng Trung ương đã chỉ rõ: Trong 25 năm xây dựng và trưởng thành, Công ty Thương mại và Xuất nhập khẩu Viettel đã hoàn thành xuất sắc nhiệm vụ nhập khẩu thiết bị viễn thông với khối lượng lớn, đáp ứng xây dựng hạ tầng mạng lưới Viettel nhanh, rộng khắp, phục vụ sản xuất kinh doanh và nhiệm vụ Quốc phòng An ninh, góp phần vào sự nghiệp bảo vệ Tổ quốc từ xa. Trong môi trường cạnh tranh quyết liệt, Công ty đã đứng vững trên thị trường, Doanh thu và lợi nhuận tăng trưởng tốt, nguồn vốn Nhà nước được bảo toàn và phát triển, Công ty là đơn vị đứng đầu trong hoạt động sản xuất kinh doanh của khối các đơn vị truyền thống của Tập đoàn Công nghiệp - Viễn thông Quân đội. Đơn vị tiêu biểu trong phong trào sáng kiến ý tưởng, làm chủ công nghệ mới, có mô hình thi đua mới trong tổ chức thi đua và xây dựng điển hình tiên tiến. Đảng ủy, Ban Giám đốc Công ty triển khai và thực hiện tốt các chủ trương của Đảng, chính sách và pháp luật của Nhà nước, các tổ chức được xây dựng vững mạnh: Công ty luôn chấp hành tốt chủ trương, chính sách của Đảng, kinh doanh theo pháp luật nhà nước, quy định của Bộ Quốc phòng. Gắn liền triết lý kinh doanh với thượng tôn pháp luật, nêu gương người lính làm kinh tế trong thời bình. Đảm bảo quyền lợi và chế độ chính sách, thu nhập ổn định cho hơn 4000 lao động, tăng cường phúc lợi, khen thưởng cho cán bộ, công nhân viên để kích thích hiệu quả sản xuất kinh doanh.
Trong thư gửi cán bộ công nhân viên toàn Công ty nhân kỷ niệm 25 năm ngày truyền thống Công ty; Thượng tá Đỗ Mạnh Hùng (nay là Đại tá, nguyên Bí thư Đảng ủy, nguyên Chủ tịch Công ty) có đoạn viết:
“Chặng đường 25 năm xây dựng, phát triển và trưởng thành với biết bao khó khăn, thử thách nhưng chúng ta liên tục tìm tòi, đổi mới để nâng cao hiệu quả sản xuất kinh doanh và đóng góp tích cực vào thực hiện nhiệm vụ quân sự, quốc phòng cũng như góp phần xây dựng Tập đoàn Công nghiệp - Viễn thông Quân đội ngày càng lớn mạnh. Sau 25 năm, từ khi là Phòng Xuất nhập khẩu với 07 nhân sự non trẻ, chưa có kinh nghiệm, đến nay chúng ta đã vươn mình đứng vị trí 119 trong top 500 doanh nghiệp lớn nhất Việt Nam. Đặc biệt, năm 2021, trong môi trường cạnh tranh quyết liệt, chúng ta đã đứng vững trên thị trường, doanh thu đạt 16.380 tỷ đồng, tiệm cận doanh thu mục tiêu chiến lược của năm 2025, lợi nhuận tăng trưởng tốt, nguồn vốn Nhà nước được bảo toàn và phát triển, Công ty là đơn vị đứng đầu trong hoạt động sản xuất kinh doanh của Khối các đơn vị truyền thống của Tập đoàn Công nghiệp -Viễn thông Quân đội. Những thành công hôm nay không chỉ thể hiện về năng lực của chúng ta mà còn là kết tinh của tinh thần đoàn kết, ý chí bền bỉ vượt khó khăn của mỗi người thế hệ người Viettel Commerce….Tôi nhận thấy một trong những nguyên nhân quan trọng nhất để chúng ta đạt được những thành tích xuất sắc trong chặng đường 1/4 thế kỷ đó chính là tinh thần đoàn kết, đây là gốc rễ trong sức mạnh của chúng ta. Và tôi cũng khẳng định rằng: khi chúng ta đoàn kết lại, chúng ta sẽ hùng mạnh hơn và vượt qua tất cả khó khăn - đây là điều mỗi người Viettel Commerce đang làm và cần được làm mỗi ngày. 25 năm – một chặng đường lịch sử là một dấu ấn thật tuyệt vời! Nhân dịp này, tôi kêu gọi mỗi cá nhân, mỗi tập thể tiếp tục phát huy truyền thống “Đoàn kết - Sáng tạo - Nghĩa tình - Vượt khó - Phát triển”, tiếp nối tinh thần nhiệt huyết trong 25 năm của các thế hệ những người đi tìm lửa để thực hiện khát vọng xây dựng Công ty đứng đầu tại Việt Nam trong các lĩnh vực kinh doanh và vươn ra thị trường quốc tế. Bằng trí lực của một tập thể đoàn kết, chúng ta sẽ tiếp tục cung cấp cho khách hàng những sản phẩm và dịch vụ tốt nhất với phương châm “khách hàng là trọng tâm, đổi mới tạo tương lai”, xây dựng và phát triển Ngôi nhà chung của chúng ta rộng lớn hơn, vững chãi hơn, để hơn 4.000 cán bộ, nhân viên của chúng ta có cuộc sống tốt hơn và hạnh phúc hơn”. 
Từ mốc son lịch sử này; có quyết tâm và khát vọng, chúng ta vững tin rằng Công ty Viettel Commerce sẽ tiếp tục phát triển và phát triển bền vững, tạo lập những thành công mới, đỉnh cao thắng lợi mới trong tương lai. 
`, img: "assets/images/viettel-1997.jpg", caption: "5G thương mại hóa, 2021"
            },
            {
                year: "Năm 2023", milestone: "Kiên cường vượt bão suy thoái, khẳng định bản lĩnh người lính thương trường", desc: `Bước sang năm 2023, trong bối cảnh nền kinh tế thế giới và trong nước đối mặt với cuộc đại suy thoái sâu sắc, tổng cầu thị trường thiết bị đầu cuối handset đóng băng nghiêm trọng và sụt giảm mạnh 23% sản lượng, Đảng ủy và Ban Giám đốc Công ty đã quyết liệt lãnh đạo đơn vị bám trụ trận địa. Đây là năm Công ty thực hiện đợt dịch chuyển tổ chức lớn, bàn giao Trung tâm Dịch vụ Công nghệ thông tin sang đơn vị bạn từ ngày 1 tháng 9 năm 2023, đưa khối sản xuất trực tiếp về thế chân kiềng cốt lõi.
Vận dụng linh hoạt Triết lý nước bền bỉ và mềm mại, Công ty đã tạo nên kỳ tích vẻ vang khi cán đích doanh thu sản xuất kinh doanh đạt 16.575 tỷ đồng, hoàn thành 100,4% kế hoạch năm điều chỉnh và bảo toàn hoàn toàn nguồn vốn Nhà nước. Chỉ tiêu lợi nhuận trước thuế đạt vững vàng 160 tỷ đồng. Trong giông bão, Trung tâm Bán lẻ Viettel Store khẳng định vị thế xương sống thương mại khi mang về doanh thu 7.028,3 tỷ đồng, lợi nhuận vượt mức 136% kế hoạch đạt 23 tỷ đồng, đồng thời xuất sắc lọt vào Top 3 nhà bán lẻ uy tín nhất Việt Nam ngành thiết bị số. Trung tâm Phân phối kiên cường đạt doanh thu 7.363 tỷ đồng và mang lại lợi nhuận 27 tỷ đồng nhờ phát triển thành công hai license điện thoại mới là Honor và TCL. Nhà máy In Viettel ghi dấu một năm đại thắng khi đưa vào vận hành dây chuyền máy in Offset hiện đại mới từ tháng 8 năm 2023 trước tiến độ, đưa doanh thu đạt 489 tỷ đồng và lợi nhuận cán mốc 47,9 tỷ đồng. Trung tâm Xuất nhập khẩu khẳng định vai trò lá cờ đầu về tốc độ tăng trưởng khi đạt doanh thu bứt phá 1.348 tỷ đồng (tăng 31,2%) và lợi nhuận bùng nổ 83,3 tỷ đồng (tăng 35,4%).
Công tác xây dựng Đảng và đơn vị vững mạnh toàn diện đạt được những đỉnh cao vinh quang mới khi Đảng bộ Công ty vinh dự đạt tiêu chuẩn Trong sạch vững mạnh tiêu biểu năm thứ ba liên tiếp, chính quyền Công ty nhận Cúp đơn vị xuất sắc toàn diện của Tập đoàn. Phong trào thi đua quyết thắng gọi tên Trung tâm Phân phối và Nhà máy In Viettel đón nhận Bằng khen của Bộ trưởng Bộ Quốc phòng, đồng thời cá nhân đồng chí Phó Giám đốc phụ trách khối Bán lẻ được vinh danh là Điển hình xuất sắc toàn cầu tại Lễ tôn vinh Viettel Stars. Bản sắc văn hóa Nghĩa tình được thắp sáng rực rỡ khi cán bộ công nhân viên quyên góp trích từ lương hơn 3 tỷ đồng để xây dựng nhà tình nghĩa, thực hiện dự án Giving Day trao tặng đồ dùng học tập cho điểm trường mầm non Màng Mủ - Mù Cang Chải và trao quà cho học sinh nghèo vùng khó khăn tỉnh Quảng Trị.
`, img: "assets/images/viettel-1997.jpg", caption: "Hệ sinh thái số VCM, 2022"
            },
            {
                year: "Năm 2024", milestone: "Cuộc đại cải tổ số toàn diện và kỳ tích lợi nhuận bùng nổ mạnh mẽ", desc: `Năm 2024 chứng kiến sức ép khốc liệt từ các nền tảng thương mại điện tử xuyên biên giới và tổn thất nặng nề từ siêu bão Yagi, Đảng ủy và Ban Giám đốc Công ty đã biến áp lực thành bàn đạp tiến công bằng chiến lược lấy công nghệ số làm vũ khí cạnh tranh trọng tâm, đón đầu chiến dịch dừng dịch vụ sóng 2G để mở rộng không gian tăng trưởng. Sức mạnh tổng lực từ tư duy tiến công đã mang lại kết quả kinh doanh kỷ lục vĩ đại nhất kể từ ngày thành lập: Doanh thu sản xuất kinh doanh đạt con số khổng lồ 18.965 tỷ đồng (tăng trưởng 14%), vượt xa tốc độ chung của thị trường. Chỉ tiêu lợi nhuận trước thuế bùng nổ bứt phá mạnh mẽ nhất khi đạt 225 tỷ đồng, hoàn thành xuất sắc 119% kế hoạch Tập đoàn giao và tăng trưởng ngoạn mục tới 40% so với năm trước. Năng suất lao động bình quân thiết lập kỷ lục mới đạt 357 triệu đồng trên một người mỗi năm, mang lại thu nhập bình quân cao nhất lịch sử đạt 20,1 triệu đồng trên một người mỗi tháng. Viettel Commerce kiêu hãnh vươn lên đứng thứ 3 trong toàn ngành bán lẻ, bán sỉ khối doanh nghiệp lớn và đứng vị trí thứ 27 trong Top 100 nơi làm việc tốt nhất Việt Nam do tổ chức Anphabe công bố.
Sự cất cánh đồng đều của các đơn vị trực thuộc đã dệt nên bản trường ca chiến công đầy tự hào. Trung tâm Bán lẻ Viettel Store bùng nổ lợi nhuận gấp 2,7 lần so với năm ngoái khi cán mốc 55 tỷ đồng, doanh thu đạt 7.800 tỷ đồng, trong đó mũi nhọn thương mại điện tử đa kênh bứt phá đạt doanh thu Online 2.200 tỷ đồng (tăng 53%), đưa hệ thống kiêu hãnh đứng vị trí số 1 tuyệt đối về doanh thu điện thoại di động trên các sàn thương mại điện tử quốc gia. Trung tâm Phân phối ghi nhận số lượng license phát triển mới tốt nhất lịch sử với 9 bản quyền lớn, đưa tổng doanh thu bứt phá lên con số kỷ lục 8.553 tỷ đồng và lợi nhuận đạt 55 tỷ đồng (tăng trưởng 113,8%). Nhà máy In Viettel khẳng định uy tín thương hiệu vĩ đại khi doanh thu đạt 543,3 tỷ đồng, lợi nhuận trước thuế tại đơn vị đạt 50,39 tỷ đồng, đồng thời bảo vệ thành công chủ trương đầu tư sắm hệ thống máy in Offset hiện đại mới tại khu vực Thành phố Hồ Chí Minh trong tháng 11 năm 2024. Trung tâm Xuất nhập khẩu ghi dấu mốc son chói lọi khi đạt doanh thu 2.000 tỷ đồng, tổ chức giao nhận tuyệt đối an toàn khối lượng khổng lồ vật tư phục vụ mạng 4G và 5G, đặc biệt tập thể cán bộ xuất nhập khẩu đã thông minh bảo vệ thành công trước Tổng cục Hải quan về việc áp mã thuế thiết bị RRU từ 5% về 0%, làm lợi cho Tập đoàn số tiền cực kỳ lớn gần 200 tỷ đồng.
Ghi nhận những chiến công hiển hách đó, Đảng bộ Công ty đạt tiêu chuẩn trong sạch vững mạnh xuất sắc tiêu biểu năm thứ tư liên tiếp, chính quyền Công ty tự hào nhận Cờ thi đua của Bộ Quốc phòng, tập thể Nhà máy In Viettel vinh dự đón nhận Bằng khen của Thủ tướng Chính phủ, đồng thời cá nhân Thiếu tá Đinh Thị Dung được tôn vinh Điển hình tiên tiến xuất sắc toàn Tập đoàn. Hành trình Nghĩa tình Quân đội được thắp sáng rực rỡ khi Công ty trích kinh phí kịp thời hỗ trợ 371 triệu đồng cho 182 gia đình cán bộ bị ảnh hưởng thiên tai, và tổ chức khánh thành, khởi công xây dựng công trình Điểm trường Tà Moòng tại xã Nậm Bàn, huyện Văn Bàn, tỉnh Lào Cai với tổng trị giá gần 500 triệu đồng.
`, img: "assets / images / viettel - 1997.jpg", caption: "Xuất khẩu công nghệ, 2023"
            },
            {
                year: "Năm 2025", milestone: "Dấu ấn rực rỡ từ Đại hội Đảng bộ lần thứ V mở đường cho sự bứt phá toàn diện, thiết lập đỉnh cao lịch sử và kiêu hãnh bước vào hàng ngũ các doanh nghiệp tỷ đô", desc: `Năm 2025 đi vào lịch sử của đơn vị, ghi dấu thắng lợi toàn diện và rực rỡ nhất ngay trong năm khởi đầu của nhiệm kỳ Đại hội đại biểu Đảng bộ Công ty lần thứ V, giai đoạn 2025 – 2030. Toàn thể ban điều hành và lực lượng lao động đã chuyển hóa tinh thần Nghị quyết Đại hội thành những hành động thương trường quả cảm, mở ra không gian tăng trưởng mới và bẻ gãy mọi rào cản thị trường. Kết quả thực hiện nhiệm vụ kinh doanh đã tạo nên một kỳ tích kinh ngạc khi Công ty xuất sắc hoàn thành toàn diện kế hoạch doanh thu của cả năm trước hẳn 02 tháng, đưa tổng doanh thu sản xuất kinh doanh toàn đơn vị cán đích với con số vĩ đại chưa từng có là 27.132 tỷ đồng, đạt 134% kế hoạch và tăng trưởng bùng nổ 37,8% so với năm 2024. Chiến chiến thắng vang dội này đã chính thức đưa Viettel Commerce kiêu hãnh vươn mình, bước vào hàng ngũ các doanh nghiệp tỷ đô vĩ đại của quốc gia, thăng 5 bậc lên vị trí thứ 78 trong bảng xếp hạng VNR500 và lần đầu tiên lọt vào Top 50 Doanh nghiệp xuất sắc nhất Việt Nam với thứ hạng 25.
Mặt trận tiến công của các đơn vị trực thuộc chứng kiến những bước nhảy vọt thần tốc mang tính lịch sử. Khối Bán lẻ với thương hiệu Viettel Store tạo nên một tiếng vang chấn động toàn quốc khi đưa doanh thu lần đầu tiên bứt phá vượt mốc mười một nghìn tỷ, cán đích ở con số 11.400 tỷ đồng (tăng trưởng kinh ngạc 44,7%), lợi nhuận bùng nổ mạnh mẽ đạt 150,2 tỷ đồng nhờ chiến lược dịch chuyển sang thương mại điện tử đa kênh đưa doanh thu Online đạt 4.646 tỷ đồng (chiếm tỷ trọng tới 42% tổng doanh thu bán máy). Đặc biệt, từ tháng 12 năm 2025, trung tâm đã đưa thành công lĩnh vực mới đầy tiềm năng là pháo hoa độc quyền vào kinh doanh tại 20 siêu thị. Song hành cùng khối lẻ, Trung tâm Phân phối cũng xác lập một kỳ tích lịch sử vẻ vang khi phân phối độc quyền thành công thêm 8 license mới thuộc ngành hàng Điện máy, đưa doanh thu bứt phá cán mốc mười một nghìn tỷ với con số thực hiện đạt 11.652 tỷ đồng (tăng trưởng 29,5%) và mang lại lợi nhuận tại đơn vị đạt 70 tỷ đồng. Việc cả hai Trung tâm Bán lẻ và Phân phối cùng đồng loạt vượt ngưỡng doanh thu mười một nghìn tỷ trong cùng một năm tài chính chính là lời khẳng định đanh thép cho sức mạnh nội sinh vĩ đại của đơn vị. Nhà máy In Viettel khẳng định năng lực sản xuất công nghiệp công nghệ cao khi lợi nhuận giữ vững đà tăng trưởng năm thứ 3 liên tiếp, đưa hệ thống máy in Offset hiện đại mới tại thành phố Hồ Chí Minh vào vận hành từ tháng 12 năm 2025 đúng tiến độ, mang về doanh thu 568,2 tỷ đồng và lợi nhuận đạt 51,55 tỷ đồng. Trung tâm Xuất nhập khẩu ghi nhận mức tăng trưởng doanh thu vượt bậc phi mã 65,4% khi đạt 3.596,7 tỷ đồng, hoàn thành khối lượng hợp đồng quốc tế khổng lồ phục vụ hạ tầng mạng 5G của Tập đoàn và thu hồi sớm 9,6 mi-li-ôn USD từ thị trường Mytel.
Công tác chỉ đạo xây dựng đơn vị vững mạnh toàn diện mẫu mực, tiêu biểu ghi nhận những thành tựu vô cùng to lớn khi Đơn vị triển khai quyết liệt, bài bản các mặt tiêu chuẩn xây dựng cơ quan vững mạnh toàn diện theo đúng chỉ thị của Bộ Quốc phòng. Phòng Nhân sự tham mưu cải tổ tinh giản bộ máy hành chính cồng kềnh, cắt giảm thành công ròng 19 đầu mối đơn vị (tương ứng giảm tới 33% đầu mối hoạt động), cải thiện mạnh mẽ chỉ số SOC kiểm soát lên mức 7,5. Nền nếp chính quy được duy trì nghiêm túc, kỷ cương hành chính và kỷ luật quân đội được thắt chặt từ cơ quan văn phòng đến các tuyến đầu. Môi trường làm việc văn minh, khoa học và nghĩa tình đã đưa đơn vị tăng 4 bậc lên vị trí thứ 23 trong bảng xếp hạng Top 100 Nơi làm việc tốt nhất Việt Nam. Chỉ số năng suất lao động bình quân toàn Công ty đạt mức không tưởng: 440,9 triệu đồng trên một người mỗi năm, mang lại nguồn thu nhập bình quân kỷ lục đạt 26,4 triệu đồng trên một người mỗi tháng, giúp người lao động vô cùng hân hoan, phấn khởi. Công tác xây dựng tổ chức Đảng được củng cố vững chắc làm hạt nhân lãnh đạo khi Đảng ủy tổ chức thành công Đại hội đại biểu lần thứ V nhiệm kỳ 2025 - 2030 và Đại hội của 17 tổ chức đảng trực thuộc đúng tiến độ, Đảng bộ Công ty được Đảng ủy khối Doanh nghiệp Trung ương tặng Bằng khen đạt tiêu chuẩn Trong sạch vững mạnh xuất sắc tiêu biểu 5 năm liền. Các tổ chức quần chúng bùng nổ khí thế hân hoan khi cả Đoàn Thanh niên và Hội Phụ nữ Công ty đều xuất sắc đón nhận Cờ thi đua “Đơn vị xuất sắc” của Tổng cục Chính trị. Hành trình Nghĩa tình Quân đội được thắp sáng khi cán bộ công nhân viên quyên góp ủng hộ nhân dân Cuba 196 triệu đồng và tài trợ 465 triệu đồng hoàn thành xây dựng và đưa vào khánh thành 01 điểm trường nghĩa tình cho trẻ em nghèo tại tỉnh Lào Cai.
`, img: "assets/images/viettel-1997.jpg", caption: "AI & Big Data, 2024"
            },
            {
                year: "Năm 2026", milestone: "Bước ngoặt vĩ đại vươn mình lên mô hình Tổng công ty và khí thế hân hoan trên toàn mạng lưới", desc: `Năm 2026 khắc ghi một bước ngoặt vĩ đại, một mốc son chói lọi và huy hoàng nhất trong toàn bộ pho sử vàng phát triển của đơn vị. Sau chặng đường dài ba mươi năm kiên cường tích lũy sâu sắc về cả quy mô tài chính tập đoàn tỷ đô, tiềm lực tổ chức vững chắc lẫn trình độ công nghệ số tiên tiến, đơn vị chính thức vươn mình cất cánh lên một tầm vóc hoàn toàn mới. Sự kiện trọng đại, vinh quang và tự hào nhất diễn ra vào ngày 07 tháng 6 năm 2026, khi Tổng Giám đốc Tập đoàn chính thức ký ban hành Quyết định số 6261/QĐ-CNVTQĐ cải tổ toàn diện mô hình tổ chức, đổi tên Công ty thành Tổng Công ty Thương mại và Xuất nhập khẩu Viettel. Ngay sau đó, ngày 12 tháng 6 năm 2026, Đảng ủy Tập đoàn ra Quyết định số 215-QĐ/ĐU chính thức đổi tên Đảng bộ Công ty thành Đảng bộ Tổng Công ty Thương mại và Xuất nhập khẩu Viettel. Mốc son vĩ đại này khẳng định tầm vóc nòng cốt của đơn vị trong hàng ngũ các tổng công ty chiến lược của Tập đoàn Công nghiệp - Viễn thông Quân đội. Liền sau đó, bộ máy lãnh đạo ban điều hành đã được kiện toàn, bổ sung thêm 1 đồng chí Phó Tổng Giám đốc mới là đồng chí Phạm Tiến Tuyền, giúp Ban Tổng Giám đốc vững vàng với cơ cấu chiến lược gồm 04 đồng chí chỉ huy (01 đồng chí Tổng Giám đốc và 03 đồng chí Phó Tổng Giám đốc), tạo nên bộ chỉ huy Tinh - Gọn - Mạnh, tối ưu hóa năng lực quản trị hành chính điều hành sản xuất kinh doanh.
Để tương xứng với quy mô tổng công ty mới, các đơn vị trực thuộc cũng đồng loạt chuyển mình thay đổi tên gọi mới đầy ý nghĩa và tầm vóc chiến lược: Trung tâm Kinh doanh Thiết bị số đổi tên thành Trung tâm Kinh doanh Thiết bị số; Trung tâm Phân phối giữ nguyên tên gọi; Nhà máy In Viettel tự hào chuyển đổi mô hình thành Trung tâm Công nghệ In; Trung tâm Xuất nhập khẩu đổi tên thành Trung tâm Dịch vụ Thương mại. Sự thay đổi vĩ đại đồng bộ về cả danh xưng lẫn mô hình tổ chức đã thổi một luồng sinh khí mới, kích hoạt một niềm vinh dự, tự hào vô bờ bến và làn sóng hân hoan, phấn khởi sục sôi chưa từng có trong huyết quản của toàn thể hơn bốn ngàn cán bộ, chiến sĩ và công nhân viên trên toàn quốc. Khí thế hân hoan từ mô hình Tổng công ty mới đã kết tinh thành một thắng lợi rực rỡ trong 6 tháng đầu năm 2026 với doanh thu sản xuất kinh doanh đạt 14.586,7 tỷ đồng (hoàn thành xuất sắc 118,4% kế hoạch 6 tháng), lợi nhuận trước thuế bứt phá đạt 112,5 tỷ đồng (tăng trưởng phi mã tới 44,8% so với cùng kỳ). Năng suất lao động bứt phá lên mức kỷ lục đạt 41,1 triệu đồng trên một người mỗi tháng, giúp thu nhập bình quân của người lao động tăng lên mức 20,59 triệu đồng trên một người mỗi tháng, người lao động vô cùng phấn khởi, an tâm cống hiến và tin tưởng tuyệt đối vào hướng đi chiến lược của tập thể Đảng ủy, Ban Tổng Giám đốc Tổng công ty, sẵn sàng chung sức đồng lòng viết tiếp những trang sử vàng chói lọi trong hành trình vững bước tiên phong, xứng đáng với tầm vóc của một công trình lịch sử ba mươi năm vững bền cùng đất nước.
`, img: "assets/images/viettel-1997.jpg", caption: "Thập kỷ tăng trưởng, 2025"
            },
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
                    <div class="scrapbook-desc">Từ những ngày đầu gian khó cho đến hôm nay, mỗi trang sách là một dấu ấn, một câu chuyện, một chặng đường đáng nhớ trong hành trình 30 năm của chúng tôi.</div>
                </div>
            </div>
        `;

        // Tạo cặp trang cho từng mốc thời gian
        milestones.forEach((m, i) => {
            // Xoay ảnh ngẫu nhiên nhẹ để tạo cảm giác dán tự nhiên
            const rotations = [0]; // Chuyển thành [0] để ảnh luôn thẳng. Bạn có thể sửa lại thành [-2.5, 1.8, -1.2...] nếu muốn ảnh nghiêng ngẫu nhiên.
            // const rotations = [-2.5, 1.8, -1.2, 2.1, -3.0, 1.5, -0.8, 2.8, -1.7, 1.1];

            const rot = rotations[i % rotations.length];

            // Trang TRÁI - Mô tả dạng nhật ký
            pagesHTML += `
                <div class="page scrapbook-left">
                    <div class="page-content">
                        <div class="scrapbook-year">${m.year}</div>
                        <div class="scrapbook-milestone">${m.milestone}</div>
                        <div class="scrapbook-divider"></div>
                        <div class="scrapbook-desc">${m.desc.split("\n").map(p => p.trim() ? `<p>${p.trim()}</p>` : "").join("")}</div>
                    </div>
                    <div class="page-number">${i * 2 + 1}</div>
                </div>
            `;

            // Trang PHẢI - Ảnh dán (Hỗ trợ 1 hoặc nhiều ảnh tự co giãn)
            let photos = [];
            if (m.images && Array.isArray(m.images)) {
                photos = m.images;
            } else if (m.img) {
                photos = [{ src: m.img, caption: m.caption }];
            }

            let photosHTML = "";
            photos.forEach((photo, idx) => {
                const photoRot = rotations[(i + idx * 3) % rotations.length];
                photosHTML += `
                    <div class="scrapbook-photo-item" style="transform: rotate(${photoRot}deg);">
                        <div class="scrapbook-photo-wrapper">
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <img src="${photo.src}" alt="${m.year}">
                        </div>
                        <p class="scrapbook-caption font-deco">${photo.caption || ""}</p>
                    </div>
                `;
            });

            pagesHTML += `
                <div class="page scrapbook-right">
                    <div class="page-content scrapbook-gallery" data-count="${photos.length}">
                        ${photosHTML}
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
                    <div class="scrapbook-desc">Cảm ơn bạn đã đồng hành cùng chúng tôi suốt hành trình 30 năm ý nghĩa này.</div>
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

        // Expose để book-timeline.js có thể hook vào
        window.bookPageFlip = pageFlip;

        // ==========================================
        // LIGHTBOX & EVENT INTERCEPTION
        // ==========================================
        const lightboxHTML = `
            <div id="photo-lightbox" class="photo-lightbox">
                <span class="lightbox-close">&times;</span>
                <img id="lightbox-img" src="" alt="">
                <div id="lightbox-caption" class="lightbox-caption"></div>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", lightboxHTML);

        const lightbox = document.getElementById("photo-lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxCaption = document.getElementById("lightbox-caption");
        const closeBtn = document.querySelector(".lightbox-close");

        const closeLightbox = () => {
            lightbox.classList.remove("active");
            setTimeout(() => { lightbox.style.display = "none"; }, 300);
        };
        closeBtn.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

        // Xử lý sự kiện riêng cho Text: Bôi đen thì không lật, nhưng click nhanh thì lật trang
        const textElements = document.querySelectorAll(".scrapbook-desc, .scrapbook-year, .scrapbook-milestone");
        let pressTime = 0;
        let pressX = 0;
        let pressY = 0;

        textElements.forEach(el => {
            const stopProp = (e) => e.stopPropagation();
            el.addEventListener("mousemove", stopProp);
            el.addEventListener("pointermove", stopProp);

            const handleDown = (e) => {
                e.stopPropagation();
                pressTime = Date.now();
                pressX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
                pressY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
            };

            el.addEventListener("mousedown", handleDown);
            el.addEventListener("touchstart", handleDown);
            el.addEventListener("pointerdown", handleDown);

            const handleUp = (e) => {
                e.stopPropagation();
                const now = Date.now();
                const timeDiff = now - pressTime;
                
                // Tránh việc 1 cú click kích hoạt cả pointerup và mouseup gây lật 2 trang
                if (window.lastFlipTime && (now - window.lastFlipTime < 500)) return;

                const upX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
                const upY = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0;
                const dist = Math.abs(upX - pressX) + Math.abs(upY - pressY);

                // Click nhanh (dưới 250ms) và không rê chuột (dưới 10px) => Lật trang
                if (timeDiff < 250 && dist < 10) {
                    window.lastFlipTime = now; // Ghi nhận thời gian lật
                    
                    // Xác định trang trái/phải dựa vào toạ độ click so với giữa cuốn sách
                    const bookEl = document.getElementById("flipbook");
                    const bookRect = bookEl.getBoundingClientRect();
                    const bookCenter = bookRect.left + (bookRect.width / 2);
                    
                    if (upX > bookCenter) {
                        pageFlip.flipNext();
                    } else {
                        pageFlip.flipPrev();
                    }
                }
            };

            el.addEventListener("mouseup", handleUp);
            el.addEventListener("touchend", handleUp);
            el.addEventListener("pointerup", handleUp);
        });

        // Riêng phần khung ảnh: Chặn lật trang để ưu tiên tính năng Lightbox Zoom
        const mediaElements = document.querySelectorAll(".scrapbook-photo-wrapper");
        mediaElements.forEach(el => {
            const stopProp = (e) => e.stopPropagation();
            el.addEventListener("mousedown", stopProp);
            el.addEventListener("touchstart", stopProp);
            el.addEventListener("mousemove", stopProp);
            el.addEventListener("pointerdown", stopProp);
            el.addEventListener("pointermove", stopProp);
        });
        // Click ảnh để mở zoom
        document.querySelectorAll(".scrapbook-photo-wrapper img").forEach(img => {
            img.style.cursor = "zoom-in";
            img.addEventListener("click", (e) => {
                e.stopPropagation();
                lightboxImg.src = img.src;
                const wrapper = img.closest(".scrapbook-photo-item") || img.closest(".page-content");
                const captionEl = wrapper.querySelector(".scrapbook-caption");
                lightboxCaption.textContent = captionEl ? captionEl.textContent : "";

                lightbox.style.display = "flex";
                setTimeout(() => lightbox.classList.add("active"), 10);
            });
        });

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
        // ==========================================
        // SỰ KIỆN BÀN PHÍM (KEYBOARD NAVIGATION)
        // ==========================================
        document.addEventListener('keydown', (e) => {
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

            if (e.key === 'ArrowRight') {
                pageFlip.flipNext();
            } else if (e.key === 'ArrowLeft') {
                pageFlip.flipPrev();
            }
        });

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
