import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-email">
                <div className="footer-background-email">
                    <div className="footer-content">
                        <h2>NHẬP EMAIL</h2>
                        <p>Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi</p>
                        <div className="footer-input-group">
                            <input type="email" placeholder="Nhập email của bạn" />
                            <button>Gửi ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-information">
                <div className="footer-section">
                    <h3>Trải Nghiệm VANS Store Ngay Tại Nhà</h3>
                    <p>Hệ Thống VANS Online</p>
                    <p>Địa chỉ: Hồ Chí Minh</p>
                    <p>Hotline: 0866956907</p>
                </div>
                <div className="footer-section">
                    <h3>Về Chúng Tôi</h3>
                    <p>About Us</p>
                    <p>Size Chart</p>
                    <p>Hệ Thống Cửa Hàng</p>
                    <p>ZALO Business: 0866956907</p>
                </div>
                <div className="footer-section">
                    <h3>Chính Sách</h3>
                    <p>Chính sách thanh toán</p>
                    <p>Chính sách đổi trả</p>
                    <p>Chính sách bảo hành</p>
                </div>
            </footer>
            <div className="footer-license">
                © Bản quyền thuộc về <span className="highlight">VANS Việt Nam</span> | Cung cấp bởi VansVN
            </div>
        </div>
    )
}

export default Footer