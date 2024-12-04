import React from "react";

function Marquee() {
    return (
        <table className="marquee">
            <tr>
            <td className="block">
                NEWS
            </td>
            <td>
                <marquee>
                    <a href="https://csirhrdg.res.in/SiteContent/ManagedContent/ATContent/Inviting_Applications_for_direct_SRF_RA_2024.pdf" target="_blank">CSIR-HRDG Invites Applications For Direct SRF & RA Fellowships - Apply Online</a>
                </marquee>
            </td>
            </tr>
            <style>
                {`
                    .marquee {
                        width: 100vw;
                        border-radius: 5px;
                        color: var(--tertiary-color);
                        background-color: var(--primary-color);
                        text-align: center;
                    }
                    
                    .block {
                        background: var(--secondary-color);
                        border-radius: 5px;
                        padding: 5px 10px;
                        line-height: 18px;
                        font: 20px bold;
                        color: var(--primary-color);
                        margin: 0;
                    }

                    .marquee a {
                        text-decoration: none;
                        color: var(--tertiary-color);
                    }

                    .marquee a:hover {
                        text-decoration: none;
                        color: var(--secondary-color);
                    }
                `}
            </style>
        </table>
    );
}

export default Marquee;