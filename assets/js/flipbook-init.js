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
Lịch sử Viettel ghi lại, nhiều năm sau ngày thành lập (01/6/1989), Công ty Điện tử Viễn thông Quân đội vẫn trong tình trạng “đi làm thuê”, tìm kiếm các hợp đồng để ký kết, xây dựng các công trình, hạ tầng viễn thông cho các đối tác. Sáu năm sau thời gian đi “làm thuê” tích lũy kinh nghiệm và ấp ủ “ước mơ”; ngày 13/6/1995 đã trở thành một dấu mốc mang tính bước ngoặt trong lịch sử Viettel. Thực hiện Quyết nghị của Thường trực Bộ Chính trị, đồng chí Trần Đức Lương, Phó Thủ tướng Chính phủ đã ký quyết định thành lập Công ty Điện tử Viễn thông Quân đội (trên cơ sở Công ty Điện tử Thiết bị Thông tin-Sigelco). Với ngành nghề mới được bổ sung là kinh doanh dịch vụ bưu chính viễn thông trong nước và quốc tế. Sigeleco đã vượt qua hàng rào cản trở độc quyền, tiến hành lập đề án về kinh doanh viễn thông. Đại tá Phạm Ngọc Điệp, nguyên Giám đốc Công ty Sigelco (1993-1995) cho biết: Trong đề xuất cấp giấy phép kinh doanh bưu chính viễn thông, Ban Lãnh đạo Công ty đã giải quyết được 02 vấn đề rất mấu chốt, rất căn bản, có tính chiến lược lâu dài: “Thứ nhất, xin được giấy phép cho Công ty được kinh doanh dịch vụ bưu chính viễn thông cả trong nước và quốc tế. Thứ hai, đặt tên mới cho công ty có thêm chữ “viễn thông”, gọi tắt  là “VIETEL” (lúc này trong chữ Vietel chỉ có 01 chữ T, đến năm 2003 mới bổ sung thành Viettel}. Lúc này, Công ty đã có tầm nhìn chiến lược lâu dài, cả trong nước và đối ngoại, hội nhập quốc tế. 
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

        // Ngăn lật trang và giảm độ nhạy hover khi tương tác với nội dung
        const contentElements = document.querySelectorAll(".scrapbook-desc, .scrapbook-year, .scrapbook-milestone, .scrapbook-photo-wrapper");
        contentElements.forEach(el => {
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
