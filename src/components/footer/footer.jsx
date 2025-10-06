import { FaComputer } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { FaChartSimple } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-icon">
                    <FaComputer />
                </div>
                <div className="footer-text">
                    <p className="footer-title">
                        Responsive Designe
                    </p>
                    <p className="footer-text">
                        lorem ipsum text fake
                    </p>
                </div>
            </div>

            <div className="footer-container">
                <div className="footer-icon">
                    <CiTrophy />
                </div>
                <div className="footer-text">
                    <p className="footer-title">
                        Visual Page Builder
                    </p>
                    <p className="footer-text">
                        lorem ipsum text fake
                    </p>
                </div>
            </div>

            <div className="footer-container">
                <div className="footer-icon">
                    <FaChartSimple />
                </div>
                <div className="footer-text">
                    <p className="footer-title">
                        Strong Admin Panel
                    </p>
                    <p className="footer-text">
                        lorem ipsum text fake
                    </p>
                </div>
            </div>
        </footer>
    )
}